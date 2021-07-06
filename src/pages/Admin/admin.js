import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { getScreams,getEmails } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
//import "../pages/p.css";
export const Admin = (props) => {
  const [body,setBody]=useState('');
  const [image,setImage]=useState('');
  const [catchy,setCatchy]=useState('');
  const [topic,setTopic]=useState('');


  
    useEffect(() => {
        props.getScreams();
      }, []);
    useEffect(() => {
        props.getEmails();
      }, []);
      const { screams, loading,emails } = props.data;
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


        </div>
    )
}
Admin.propTypes = {
    getScreams: PropTypes.func.isRequired,
    getEmails: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };
const mapStateToProps = (state) => ({
    data: state.data,
})



export default connect(mapStateToProps, { getScreams,getEmails })(Admin)
