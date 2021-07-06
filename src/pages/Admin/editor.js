import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { getScreams,getEmails,getScream } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
//import "../pages/p.css";
export const Editor1 = (props) => {
  


  
    useEffect(() => {
        props.getScreams();
      }, []);
    useEffect(() => {
        props.getEmails();
      }, []);
      useEffect( () =>  {
        props.getScream(props.match.params.id);
     
     
       }, []);
      
      const { screams, loading,emails,scream } = props.data;
      const bb=scream.body;
      const mg=scream.image;
      const ct=scream.catchy;
      const tt=scream.topic;


      const [body,setBody]=useState(bb);
      const [image,setImage]=useState(mg);
      const [catchy,setCatchy]=useState(ct);
      const [topic,setTopic]=useState(tt);
      const pl=Object.keys(emails);

      const loa=loading?(<>
        <div className="cover">
      <div className="loader">  <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div></div></div></>):(<>{pl.map((email)=>{
            return <p>{emails[email].email}</p>
        })}</>);
    return (
        <div>
           {console.log(scream.body)}
 {scream.body?<><Editor
          initialValue={scream.body}
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
        //   onEditorChange={this.handleEditorChange}
        /></>:<><p>loading</p></>}

        </div>
    )
}
Editor1.propTypes = {
    getScreams: PropTypes.func.isRequired,
    getScream: PropTypes.func.isRequired,
    getEmails: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };
const mapStateToProps = (state) => ({
    data: state.data,
})



export default connect(mapStateToProps, { getScreams,getEmails,getScream })(Editor1)
