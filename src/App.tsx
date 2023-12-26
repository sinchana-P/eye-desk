// import { useState } from 'react';
import './App.css'
import { Layout } from 'antd';
import { Topbar } from './scenes/global/topbar/Topbar';
import { Sidebar } from './scenes/global/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './scenes/dashboard';
import { Timesheets } from './scenes/timesheets';
import { Approvals } from './scenes/approvals';
import { Screenshots } from './scenes/screenshots';
import { Apps } from './scenes/apps';
import { Urls } from './scenes/urls';
import AllReports from './scenes/reports/AllReports'


function App() {

  return (
    <>
      <Layout>
        <Sidebar />
          <Layout className='app-container'>
            <Topbar />
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            <Route path='/timesheets' element={ <Timesheets /> } />
            <Route path='/approvals' element={ <Approvals /> } />
            <Route path='/screenshots' element={ <Screenshots /> } />
            <Route path='/apps' element={ <Apps /> } />
            <Route path='/urls' element={ <Urls /> } />
            <Route path='/reports' element={ <AllReports/> } />
            </Routes>
          </Layout>
      </Layout>
    </>
   
  )
}

export default App
