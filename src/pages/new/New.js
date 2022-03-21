import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import './new.scss';


const New = () => {

  const[file,setFile]=useState("");

  return (
    <div className='new'>
            <Sidebar/>
        <div className="newContainer">
            <Navbar/>

              <div className="top">
                <h1 className='title'>Add New User</h1>  
              </div> 
              <div className="bottom">
                  <div className="left">
                      <img className='profileImg' src={file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" } alt="user icon" />
                  </div>
                  <div className="right">
                    <form>
                      <div className="formInput">
                              <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                              <input type="file" id="file" style={{display:'none'}} onChange={ (e)=> setFile(e.target.files[0])}/>
                        </div>
                        <div className="formInput">
                              <label htmlFor="">Username</label>
                              <input type="text" name="" id=""  placeholder='Enter User name'/>
                        </div>
                        <div className="formInput">
                              <label htmlFor="">Name and surename</label>
                              <input type="text" name="" id=""  placeholder='Enter Name'/>
                        </div>
                        <div className="formInput">
                              <label htmlFor="">Email</label>
                              <input type="email" name="" id=""  placeholder='Enter Email'/>
                        </div>
                        <div className="formInput">
                              <label htmlFor="">Phone</label>
                              <input type="text" name="" id=""  placeholder='Enter Phone'/>
                        </div>
                        <div className="formInput">
                              <label htmlFor="">Password</label>
                              <input type="password" name="" id=""  placeholder='Enter Password'/>
                        </div>
                        <div className="formInput">
                              <label htmlFor="">Address</label>
                              <input type="text" name="" id=""  placeholder='Enter Address'/>
                        </div>
                        <div className="formInput">
                              <label htmlFor="">Country</label>
                              <input type="text" name="" id=""  placeholder='Enter Country'/>
                        </div>
                        <button>Send</button>
                      

                    </form>
                     

                  </div>
              </div>
        </div>
    </div>
  )
}

export default New