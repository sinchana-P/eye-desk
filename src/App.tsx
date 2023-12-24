import { useState } from 'react';
import './App.css'
import { Layout } from 'antd';
import { Topbar } from './scenes/global/topbar/Topbar';
import { Sidebar } from './scenes/global/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './scenes/dashboard';


function App() {

  return (
    
    <>
      <Layout>
        <Sidebar />
          <Layout className='app-container'>
            <Topbar />
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
            </Routes>
          </Layout>
      </Layout>
    </>
   
  )
}

export default App
