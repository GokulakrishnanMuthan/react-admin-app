import React from 'react'
import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revene</h1>
        <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
           <CircularProgressbar value={66}  text="66 %" strokeWidth="4"/>
        </div>
          <div className="details">Total Sales made Today</div>
          <div className="money">399$</div>
          <div className="seemore">See Details</div>
      </div>
    </div>
  )
}

export default Featured