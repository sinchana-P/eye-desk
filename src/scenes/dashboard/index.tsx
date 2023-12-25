import React from 'react'
// import '../../assets/styles/style.css'
// import Draggable from 'react-draggable';
// import { useDrag } from 'react-dnd';
import { FiHexagon } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { TbDotsVertical } from "react-icons/tb";
import graphImg from '../../../public/assets/skyblue-graph.png'
import graphImg2 from '../../../public/assets/blue-graph.png'
import ss from '../../../public/assets/ss.png'
import ss2 from '../../../public/assets/ss2.png'
import ss3 from '../../../public/assets/ss3.png'

import './dashboard.css'
import { Avatar, Badge, Progress, Space, Table, Tag } from 'antd';
import { AgChartsReact } from 'ag-charts-react';
import { AgChartOptions, AgCharts } from 'ag-charts-community';

import type { ColumnsType } from 'antd/es/table';

export const Dashboard = () => {

  interface DataType {
    // toUpperCase(): React.ReactNode;
    key: string;
    project: string;
    action: string;
    timeChange: string;
  }

  const cardDetails = [
    {
      key: '1',
      title: 'WEEKLY ACTIVITY',
      value: '52%',
      upDown: '-4%',
    },
    {
      key: '2',
      title: 'WORKED THIS WEEK',
      value: '75:50:37',
      upDown: '+10:43:04',
    },
    {
      key: '3',
      title: "TODAY'S ACTIVITY",
      value: '72%',
      upDown: '+29%',
    },
    {
      key: '4',
      title: 'WORKED TODAY',
      value: '17:30:37',
      upDown: '+4:10:09',
    },
  ]

  const weekOptions: AgChartOptions = {
    data: [
            { month: 'Mon', avgTemp: 2.3, time: 9.17 },
            { month: 'Tue', avgTemp: 6.3, time: 13.41 },
            { month: 'Wed', avgTemp: 16.2, time: 10.50 },
            { month: 'Thu', avgTemp: 22.8, time: 2.58 },
            { month: 'Fri', avgTemp: 14.5, time: 6.48 },
            { month: 'Sat', avgTemp: 8.9, time: 8.29 },
            { month: 'Sun', avgTemp: 7.9, time: 7.28 },
        ],
    series: [{
      type: 'bar',
      xKey: 'month',
      yKey: 'time',
      fills: ['#4CAF50'],
      strokes: ['#2E7D32'],
      width: 10,
    }]
  }

  const data: DataType[] = [
  {
    key: '1',
    project: 'Interns',
    action: 'Delete',
    timeChange: '-4:36:44',
  },
  {
    key: '2',
    project: 'Interns',
    action: 'Delete',
    timeChange: '-2:30:00',
  }
];

  const columns: ColumnsType<DataType> = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Tag color='red' key='action'>
                {record.action}
        </Tag>
      ),
    },
    {
      title: 'Time change',
      dataIndex: 'timeChange',
      key: 'timeChange',
    },
  ];

  // ----
  const timeSheetsData = [
    {
      key: '1',
      project: 'Interns',
      date: 'Sun, Dec 24, 2023',
      startTime: '3:40 pm',
      stopTime: '7:37 pm',
      duration: '4:36:44',
    },
    {
      key: '2',
      project: 'Interns',
      date: 'Sun, Dec 24, 2023',
      startTime: '3:40 pm',
      stopTime: '7:37 pm',
      duration: '4:36:44',
    },
  ]

  const timeSheetsColumns = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Start time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'Stop time',
      dataIndex: 'stopTime',
      key: 'stopTime',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
  ];

  // ----
  const projectsData = [
    {
      key: '1',
      project: 'Interns',
      time: '56:16:47',
      progress: 90
    },
    {
      key: '2',
      project: 'Use cases',
      time: '47:36:44',
      progress: 75
    },
  ]

  const projectsColumns = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      width: '70rem'
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      dataIndex: 'progress',
      key: 'progress',
      render: (data: number) => (
         <div style={{ width: 120 }}>
            <Progress percent={data} size="small" showInfo={false} />
          </div>
      )
    },
  ];



  return (
    <div className='dashboard-container'>
      {/* <Draggable>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
          Drag me!
        </div>
      </Draggable> */}

      <div className='header-wrapper'>
        <div className='dashboard-header-container'>
          <div>
            <p>Dashboard</p>
            <span>Mon, Dec 18, 2023 - Sun, Dec 24, 2023</span>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Badge count={3} color='lightgreen'>
              <LuClock3 style={{ width: '30px', height: '30px', color: '#2aa7ff' }} />
              {/* <Avatar shape="circle" size="large" /> */}
            </Badge>
          </div>
        </div>
        <div className='widgets'>
          <p>Manage Widgets</p>
        </div>
      </div>

      <div className="cards-container">
            {
            cardDetails.map((card, key) => (
                <div className='each-card' key={key}>
                    <div>
                      <p>{card.title} <b style={{ marginLeft: '6px' }}>{ '\u24D8' }</b></p>
                      <div><TbDotsVertical /></div> 
                    </div>
                    <div>
                      <h5>{ card.value }</h5>
                    </div>
                    <div>
                      <span>{card.upDown}</span>
                      <img src={(card.key === '1' || card.key === '3') ? graphImg : graphImg2} alt='graph' />  
                    </div>
                </div>
              ))
            }
      </div>
      
      <div className='two-columns-container'>

        <div className='first-column-container'>

          <div className='recent-container'>
            <div className='title-recent-container'>
              <p>RECENT ACTIVITY</p>
              <div><TbDotsVertical /></div> 
            </div>
  
            <div className='ss-container'>
              <div>
                <Badge count='74%' color='#00d469'>
                  <img src={ss} alt='screenshot' width='228px' height='128px' style={{ margin: '10px 12px', }}/>
                </Badge>
              </div>
              <div>
                <Badge count='74%' color='#00d469'>
                  <img src={ss2} alt='screenshot' width='228px' height='128px' style={{ margin: '12px 10px', }}/>
                </Badge>
              </div>
              <div>
                <Badge count='74%' color='#00d469'>
                  <img src={ss3} alt='screenshot' width='228px' height='128px' style={{ margin: '12px 10px', }}/>
              </Badge>
              </div>
              <div>
                <Badge count='74%' color='#00d469'>
                  <img src={ss3} alt='screenshot' width='228px' height='128px' style={{ margin: '12px 10px', }}/>
              </Badge>
              </div>
              <div>
                <Badge count='74%' color='#00d469'>
                  <img src={ss} alt='screenshot' width='228px' height='128px' style={{ margin: '12px 10px', }}/>
              </Badge>
              </div>
              <div>
                <Badge count='74%' color='#00d469'>
                  <img src={ss2} alt='screenshot' width='228px' height='128px' style={{ margin: '12px 10px', }}/>
              </Badge>
              </div>
            </div>

            <div >
              <a href='/screenshots'>{'View activity >'}</a>
            </div>
          </div>

          <div className='week-container'>
            <div className='title-week-container'>
              <p>THIS WEEK</p>
              <div style={{ cursor: 'pointer' }}><TbDotsVertical /></div>  
            </div>
            <div className='graph-container'>
              <AgChartsReact options={weekOptions} />
            </div>
            <div>
              <a href='/timeandactivity'>{'View report >'}</a>
             </div>
          </div>

          <div className='manual-container'>
            <div className='title-manual-container'>
              <p>MANUAL TIME</p>
              <div style={{ cursor: 'pointer' }}><TbDotsVertical /></div>  
            </div>
            <div className='manual-table'>
              <Table columns={columns} dataSource={data} pagination={false} />
            </div>
            <div>
              <a href='/reports'>{'View report >'}</a>
            </div>
          </div>
        </div>

        
        <div className='second-column-container'>
          <div className='timeSheet-container'>
            <div className='title-timeSheet-container'>
              <p>TIMESHEET</p>
              <div style={{ cursor: 'pointer' }}><TbDotsVertical /></div>  
            </div>
            <div className='timeSheet-table'>
              <Table columns={timeSheetsColumns} dataSource={timeSheetsData} pagination={false} />
            </div>
            <div>
              <a href='/timesheets'>{'View daily timesheet >'}</a>
            </div>

          </div>

          <div className='projects-container'>
            <div className='title-project-container'>
              <p>PROJECTS</p>
              <div style={{ cursor: 'pointer' }}><TbDotsVertical /></div>  
            </div>
              <div className='project-table'>
                <Table columns={projectsColumns} dataSource={projectsData} pagination={false} />
            </div>
            <div>
              <a href='/timesheets'>{'View daily timesheet >'}</a>
            </div>
          </div>
          <div className='apps-container'>

          </div>
        </div>
        
      </div>
    </div>
  )
}
