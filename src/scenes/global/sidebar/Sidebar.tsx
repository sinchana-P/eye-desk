import React, {useState} from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

import { VscDashboard } from "react-icons/vsc";
import { WiTime3 } from "react-icons/wi";
import { GoGraph } from "react-icons/go";
import { TiLightbulb } from "react-icons/ti";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { TbSteam } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";


import { Link } from 'react-router-dom';
// import SubMenu from 'antd/es/menu/SubMenu';

import './Sidebar.css'

export const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  const timesheetsMenu = [
        {
          label: "View & edit",
          key: "viewandedit",
          link: '/timesheets'
        },
        {
          label: "Approvals",
          key: "approvals",
          link: '/approvals'
        }
  ]

  const activitiesMenu = [
        {
          label: "Screenshots",
          key: "screenshots",
          link: '/screenshots'
        },
        {
          label: "Apps",
          key: "apps",
          link: '/apps'
        },
        {
          label: "URLs",
          key: "urls",
          link: '/urls'
        }
  ]

  const projectManagementMenu = [
        {
          label: "Projects",
          key: "projects",
          link: '/projects'
        },
        // {
        //   label: "Tasks",
        //   key: "tasks",
        //   link: '/tasks'
        // }
  ]

  const reportsMenu = [
        {
          label: "Time & activity",
          key: "timeandactivity",
          link: '/timeandactivity'
        },
        {
          label: "Daily totals (Weekly)",
          key: "dailytotals",
          link: '/dailytotals'
        },
        {
          label: "Amounts owed",
          key: "amountsowed",
          link: '/amountsowed'
        },
        {
          label: "Payments",
          key: "payments",
          link: '/payments'
        },
        {
          label: "All reports",
          key: "allreports",
          link: '/reports'
        }
  ]
  
  const onCollapse = (collapsed: boolean | ((prevState: boolean) => boolean)) => {
    setCollapsed(collapsed);  
  };
  
  return (
    <div className='sidebar-container'>
      <Sider
        style={{ backgroundColor: 'pink' }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        // style={{ transition: '100px 0.3s ease' }}
      >
        <div className='logo-container' style={{ backgroundColor: 'white' }}>
          {
            collapsed ? (
                <img src="../../../assets/logo2.png" alt="logo" style={{ width: '40px', height: 'auto' }} />
            ): (
              <img src="../../../assets/logo-text.png" alt="logo" style={{ width: '150px', height: 'auto' }} />
            )
          }
        </div>  
        <div>
          <div
            className='arrow'
            style={{ left: collapsed ? 68 : 186, }}
          >
            {
              collapsed ? (
                <IoArrowForwardOutline
                  style={{
                    fontSize: '15px',
                    cursor: 'pointer',
                  }}
                  onClick={() => setCollapsed(!collapsed)}
                />
              ) : (
                  <IoArrowBack
                    style={{
                      fontSize: '15px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setCollapsed(!collapsed)}
              />
              )
            }
            </div>
        </div>

            <Menu theme="light" mode="inline">
              <Menu.Item key="dashboard" icon={<VscDashboard size={21} />} >
                <Link to='/'>Dashboard</Link> 
              </Menu.Item>    
            </Menu>
        
            <Menu theme="light" mode="inline">
              <SubMenu key="timesheets" icon={<WiTime3 size={21} />} title="Timesheets">
                {timesheetsMenu.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>

            {/* <Menu theme="light" mode="inline" items={[
              {
                key: 'timesheets',
                icon: <WiTime3 size={21} />,
                title: 'Timesheets',
                items: timesheetsMenu.map((item) => ({
                  key: item.key,
                  label: <Link to={item.link}>{item.label}</Link>,
                })),
              },
            ]} />
         */}
            <Menu theme="light" mode="inline">
              <SubMenu key="activity" icon={<GoGraph size={21} />} title="Activity">
                {activitiesMenu.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
        
            <Menu theme="light" mode="inline">
              <Menu.Item key="insights" icon={<TiLightbulb size={21} />} >
                <Link to='/insights'>Insights</Link> 
              </Menu.Item>    
            </Menu>
                  
            <Menu theme="light" mode="inline">
              <SubMenu key="projectManagement" icon={<IoMdCheckboxOutline size={21} />} title="Project Management">
                {projectManagementMenu.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
        
            <Menu theme="light" mode="inline">
              <SubMenu key="reports" icon={<TbReportSearch size={21} />} title="Reports">
                {reportsMenu.map((item) => (
                  <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
        
            <Menu theme="light" mode="inline">
              <Menu.Item key="teams" icon={<TbSteam size={21} />} >
                <Link to='/teams'>Teams</Link> 
              </Menu.Item>    
            </Menu>
        
            <Menu theme="light" mode="inline">
              <Menu.Item key="transactions" icon={<HiOutlineCurrencyRupee size={21} />} >
                <Link to='/expenses'>Expenses</Link> 
              </Menu.Item>    
            </Menu>
        </Sider>
    </div>
  )
}


// <img src="../../../../public/assets/logo2.png" alt="logo" style={{ width: '40px', height: 'auto' }} />
// ): (
// <img src="../../../../public/assets/logo-text.png" alt="logo" style={{ width: '150px', height: 'auto' }} />
