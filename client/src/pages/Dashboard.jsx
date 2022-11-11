import React from 'react';
import MainDash from '../components/Dashboard/MainDash/MainDash';
import RightSide from '../components/Dashboard/RightSide/RightSide';
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