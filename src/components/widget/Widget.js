import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Widget = ({type}) => {

  let data;

  switch (type) {
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See more users",
        icon: <PersonOutlinedIcon className='icon'/>
      }
      break;
    case "order":
      data={
        title:"ORDERS",
        isMoney:false,
        link:"See more Orders",
        icon: <ShoppingCartOutlinedIcon className='icon'/>
      }
      break;
    case "earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"View Net Earnings",
        icon: <MonetizationOnOutlinedIcon className='icon'/>
      }
      break;
    case "balance":
      data={
        title:"BALANCE",
        isMoney:true,
        link:"See Details",
        icon: <AccountBalanceWalletOutlinedIcon className='icon'/>
      }
      break;

    default:
      break;
  }


  return (
    <div className='widget'>
        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.isMoney && "$"} 125</div>
          <div className="link">{data.link}</div>
        </div>
        <div className="right">
          <div className="percentage positive">
              <KeyboardArrowUpOutlinedIcon />
            35 %
          </div>
          {data.icon}
        </div>
        
    </div>
  )
}

export default Widget