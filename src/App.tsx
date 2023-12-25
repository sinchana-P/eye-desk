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
            </Routes>
          </Layout>
      </Layout>
    </>
   
  )
}

export default App
