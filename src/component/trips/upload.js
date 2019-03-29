import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'

class UploadData extends Component {
    constructor(props) {
        super(props);
       }
       state = {
        uploading: false,
        images: []
      }
      onChange = e => {
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })
    
        const formData = new FormData()
    
        files.forEach((file, i) => {
          formData.append(i, file)
        })
        fetch(`https://my-app.com/my-form-handler/`, {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(images => {
            this.setState({ 
              uploading: false,
              images
            })
          })
        }
    render() {
        const { uploading, images } = this.state
        return (
            <div className='buttons fadein'>
            <form method="POST" encType="multipart/form-data"
      action="https://upload.uploadcare.com/submit/">
      <input type="hidden" name="UPLOADCARE_PUB_KEY" value="demopublickey" />
      <input type="hidden" name="UPLOADCARE_ACTION" value="https://my-app.com/my-form-handler/" />
      <input type="file" name="File"  id="prizeFile"/>
      <input type="submit" value="Submit"/>

      </form>
         
  </div>
          );
}
}
  
export default UploadData;