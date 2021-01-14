import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

class Tiny extends React.Component {
  state = {
    body: "",
    image: "",
    topic: "",
    catchy: "",
  };
  onSubmit = (event) => {
    var x = this.state;
    var k = this.props.history;
    setTimeout(function () {
      console.log("hut");
      event.preventDefault();

      const variables = {
        body: x.body,
        topic: x.topic,
        image: x.image,
        catchy: x.catchy,
      };
      console.log(variables);
      axios
        .post(
          "https://us-central1-zigzag-d2feb.cloudfunctions.net/api/blog",
          variables
        )
        .then((response) => {
          if (response) {
            console.log(response);
          }
          k.push("/");
        })
        .catch((err) => {
          console.log(variables);
        });
    }, 5000);
  };
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    this.setState({ body: content });
  };
  onTopicChange = (event) => {
    this.setState({ topic: event.target.value });
    console.log(this.state.topic);
  };
  onCatchyChange = (event) => {
    this.setState({ catchy: event.target.value });
  };
  handleImageChange = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);

    axios
      .post(
        "https://us-central1-zigzag-d2feb.cloudfunctions.net/api/upload",
        formData
      )
      .then((response) => {
        this.setState({ image: response.data });

        console.log(response.data);
      });
    //this.props.uploadImage(formData);
  };
  render() {
    return (
      <>
        <Editor
          initialValue="<p>This is the initial content of the editor</p>"
          apiKey="xmyra79e9kyeql4uxcc3tid6iaitg1tif93ra4j6o1yll1sf"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor ",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code  wordcount",
            ],

            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent|fontselect | removeformat |fontsizeselect ",
            file_picker_types: "image",
            /* and here's our custom image picker*/
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");

              /*
                Note: In modern browsers input[type="file"] is functional without
                even adding it to the DOM, but that might not be the case in some older
                or quirky browsers like IE, so you might want to add it to the DOM
                just in case, and visually hide it. And do not forget do remove it
                once you do not need it anymore.
              */

              input.onchange = function () {
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function () {
                  /*
                Note: Now we need to register the blob in TinyMCEs image blob
                registry. In the next release this part hopefully won't be
                necessary, as we are looking to handle it internally.
              */
                  var id = "blobid" + new Date().getTime();
                  var blobCache =
                    window.tinymce.activeEditor.editorUpload.blobCache;
                  var base64 = reader.result.split(",")[1];
                  var blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);

                  /* call the callback and populate the Title field with the file name */
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              };

              input.click();
            },
            automatic_uploads: true,
            file_picker_types: "image",
            font_formats:
              "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
            icons_url: "https://www.example.com/icons/material/icons.js",
            icons: "material",
            menu: {
              file: {
                title: "File",
                items: "newdocument restoredraft | preview | print ",
              },
              edit: {
                title: "Edit",
                items: "undo redo | cut copy paste | selectall | searchreplace",
              },
              view: {
                title: "View",
                items:
                  "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen",
              },
              insert: {
                title: "Insert",
                items:
                  "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime",
              },
              format: {
                title: "Format",
                items:
                  "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat",
              },
              tools: {
                title: "Tools",
                items: "spellchecker spellcheckerlanguage | code wordcount",
              },
              table: {
                title: "Table",
                items: "inserttable | cell row column | tableprops deletetable",
              },
              help: { title: "Help", items: "help" },
            },
          }}
          onEditorChange={this.handleEditorChange}
        />
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@getbootstrap"
        >
          submit
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Let's finish up
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Topic:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      onChange={this.onTopicChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      catchy statement:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      onChange={this.onCatchyChange}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={this.handleImageChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
//bg color
//fonts
export default Tiny;
