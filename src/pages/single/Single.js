import React from 'react'
import Datatable from '../../components/datatable/Datatable';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';

import './single.scss';
import HomeTable from '../../components/table/HomeTable';


const Single = () => {
  return (
    <div className='single'>
          <Sidebar/>
        <div className="singleContainer">
            <Navbar/>

            <div className="top">
                  <div className="left">
                    <div className="editButton">edit</div>
                      <h1 className="title">Information</h1>
                       <div className="item">
                        <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" alt="user" className="itemImg" />
                          <div className="details">
                              <h3 className="itemTitle">Vel Karthik</h3>
                              <div className="detailItem">
                                  <span className="itemKey">Email:</span>
                                  <span className="itemValue">velkarthi@gmail.com</span>
                              </div>
                              <div className="detailItem">
                                  <span className="itemKey">Phone:</span>
                                  <span className="itemValue">+91 9874 56 12 23</span>
                              </div>
                              <div className="detailItem">
                                  <span className="itemKey">Address:</span>
                                  <span className="itemValue">Attur, sales, TN </span>
                              </div>
                              <div className="detailItem">
                                  <span className="itemKey">Country:</span>
                                  <span className="itemValue">India</span>
                              </div>
                          </div>
                      </div> 
                  </div>
                  <div className="right">
                      <Chart />
                  </div> 
            </div>
            <div className="bottom">
                <h1 className="title">Transactions</h1>
                <HomeTable/>
            </div> 
        </div>
    </div>
  )
}

export default Single