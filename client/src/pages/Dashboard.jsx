import React from 'react';
import './Dashboard.css'
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RightSide/RightSide';
import Sidebar from '../components/Sidebar';

function Dashboard() {
    return ( 
        <div className='AppGlass'>
            <Sidebar />
            <MainDash />
            <RightSide />
        </div>
    );
}

export default Dashboard;