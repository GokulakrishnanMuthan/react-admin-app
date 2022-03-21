import React, { useContext } from 'react'
import './sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom';
import { DarkModeContext } from '../context/darkmodeContext';


const Sidebar = () => {

   const {dispatch} =useContext(DarkModeContext);

  return (
    <div className='sidebar'>
          <div className="top">
             <Link to="/" style={{textDecoration:'none'}}>
               <span className="logo">Admin App</span>
            </Link>
          </div>
          
          <div className="center">
             <ul>
                <p className="title">MAIN</p>
                  <Link to="/" style={{textDecoration:'none'}}>
                     <li> 
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                     </li>
                  </Link>
               <p className="title">LIST</p>
                  <Link to="/users" style={{textDecoration:'none'}}>
                  <li> 
                     <PersonOutlineOutlinedIcon className='icon'/>
                     <span>Users</span>
                  </li>
                 </Link>
                 <Link to="/products" style={{textDecoration:'none'}}>
                  <li> 
                     <Inventory2OutlinedIcon className='icon'/>
                     <span>Products</span>
                  </li>
                 </Link>
                 <li> 
                    <ShoppingCartOutlinedIcon className='icon'/>
                    <span>Orders</span>
                 </li>
                 <li> 
                  <LocalShippingOutlinedIcon className='icon'/>
                  <span>Delivery</span>
                 </li>
                 <p className="title">SERVICE</p>
                 <li> 
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Notification</span>
                 </li>
                 <li> 
                  <HealthAndSafetyOutlinedIcon className='icon'/>
                  <span>System Health</span>
                 </li>
                 <li> 
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                 </li>
                 <p className="title">USER</p>
                 <li> 
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                 </li>
                 <li> 
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                 </li>
             </ul>
          </div>
          <div className="bottom">
              <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
              <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
          </div>
    </div>
  )
}

export default Sidebar