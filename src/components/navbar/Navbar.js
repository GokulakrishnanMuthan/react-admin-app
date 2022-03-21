import React, { useContext } from 'react'
import './navbar.scss'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import { DarkModeContext } from '../context/darkmodeContext';

const Navbar = () => {

  const {dispatch} =useContext(DarkModeContext);

  return (
    <div className='navbar'>
          <div className="wrapper">
              <div className="search">
                <input type="text" name="search" id=""  placeholder='Search...'/>
                <SearchOutlinedIcon/>
              </div>
              <div className="items">
                <div className="item">
                  <LanguageOutlinedIcon className='icon'/>
                    English
                </div>
                <div className="item">
                  <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
                 </div>
                 <div className="item">
                  <FullscreenExitOutlinedIcon className='icon'/>
                 </div>
                 <div className="item">
                  <NotificationsNoneOutlinedIcon className='icon'/>
                    <div className="counter">10</div>
                 </div>
                 <div className="item">
                  <ChatBubbleOutlineOutlinedIcon className='icon'/>
                     <div className="counter">101</div>
                 </div>
                 <div className="item">
                  <ListOutlinedIcon className='icon'/>
                 </div>

              </div>
          </div>

    </div>
  )
}

export default Navbar