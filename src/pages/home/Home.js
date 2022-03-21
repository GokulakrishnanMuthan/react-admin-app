import React from 'react'
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import HomeTable from '../../components/table/HomeTable';

const Home = () => {
  return (
    <div className='home'>
          <Sidebar/>
        <div className="homecontainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart/>
            </div>
            <div className="listContainer">
                  <div className="listtitle">Transactions</div>
                  <HomeTable/>
            </div>
        </div>
    </div>
  )
}

export default Home