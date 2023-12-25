import React from 'react'
import './Apps.css'

import { Button, DatePicker, Select, Table, Divider } from 'antd'

const dataSource = [
{
    key: 'divider0',
    divider: true,
    date: 'Mon, Dec 25, 2023 12:00 am IST',
  },
  {
    key: '1',
    project: 'Interns',
    appName: 'Google Chrome',
    timeSpent: '0:36:31',
    sessions: 8,
  },
  {
    key: '2',
    project: 'Interns',
    appName: 'Microsoft® Windows® Operating System',
    timeSpent: '0:10:16',
    sessions: 3,
  },
  {
    key: '3',
    project: 'Interns',
    appName: 'Visual Studio Code',
    timeSpent: '0:04:24',
    sessions: 1,
  },
  {
    key: '4',
    project: 'Interns',
    appName: 'Hubstaff',
    timeSpent: '0:00:03',
    sessions: 2,
  },
  {
    key: 'divider1',
    divider: true,
    date: 'Mon, Dec 25, 2023 1:00 am IST',
  },
  {
    key: '5',
    project: 'Interns',
    appName: 'Google Chrome',
    timeSpent: '0:12:56',
    sessions: 5,
  },
  {
    key: '6',
    project: 'Interns',
    appName: 'Hubstaff',
    timeSpent: '0:00:06',
    sessions: 2,
  },
  {
    key: '7',
    project: 'Interns',
    appName: 'Microsoft® Windows® Operating System',
    timeSpent: '0:00:04',
    sessions: 2,
  },
  {
    key: '8',
    project: 'Interns',
    appName: 'MicrosoftWindows.Client.CBS',
    timeSpent: '0:00:03',
    sessions: 2,
  },
  {
    key: 'divider2',
    divider: true,
    date: 'Mon, Dec 25, 2023 1:00 am IST',
  },
  {
    key: '9',
    project: 'Interns',
    appName: 'Visual Studio Code',
    timeSpent: '0:32:09',
    sessions: 119,
  },
  {
    key: '10',
    project: 'Interns',
    appName: 'Google Chrome',
    timeSpent: '0:27:02',
    sessions: 125,
  },
  {
    key: '11',
    project: 'Interns',
    appName: 'Microsoft® Windows® Operating System',
    timeSpent: '0:00:08',
    sessions: 5,
  },
  {
    key: 'divider3',
    divider: true,
    date: 'Mon, Dec 25, 2023 1:00 am IST',

  },
  {
    key: '18',
    project: 'Interns',
    appName: 'Visual Studio Code',
    timeSpent: '0:32:09',
    sessions: 119,
  },
  {
    key: '19',
    project: 'Interns',
    appName: 'Google Chrome',
    timeSpent: '0:27:02',
    sessions: 125,
  },
  {
    key: '20',
    project: 'Interns',
    appName: 'Microsoft® Windows® Operating System',
    timeSpent: '0:00:08',
    sessions: 5,
  },
  {
    key: '21',
    project: 'Interns',
    appName: 'MicrosoftWindows.Client.CBS',
    timeSpent: '0:00:04',
    sessions: 4,
  },
  {
    key: '22',
    project: 'Interns',
    appName: 'Hubstaff',
    timeSpent: '0:00:04',
    sessions: 1,
  },
  {
    key: '23',
    project: 'Interns',
    appName: 'GitHub Desktop',
    timeSpent: '0:00:02',
    sessions: 1,
  },
  {
    key: 'divider4',
    divider: true,
    date: 'Mon, Dec 25, 2023 1:00 am IST',

  },
  {
    key: '27',
    project: 'Interns',
    appName: 'Visual Studio Code',
    timeSpent: '0:23:28',
    sessions: 43,
  },
  {
    key: '28',
    project: 'Interns',
    appName: 'Google Chrome',
    timeSpent: '0:16:48',
    sessions: 47,
  },
  {
    key: '29',
    project: 'Interns',
    appName: 'GitHub Desktop',
    timeSpent: '0:07:15',
    sessions: 4,
  },
  {
    key: '30',
    project: 'Interns',
    appName: 'MSTeams',
    timeSpent: '0:01:49',
    sessions: 2,
  },
  {
    key: '31',
    project: 'Interns',
    appName: 'MicrosoftWindows.Client.CBS',
    timeSpent: '0:00:08',
    sessions: 2,
  },
  {
    key: '32',
    project: 'Interns',
    appName: 'Microsoft® Windows® Operating System',
    timeSpent: '0:00:05',
    sessions: 4,
  },
];

const columns = [
  {
    // title: 'Date',
    key: 'date',
    width: 300,
    render: (d) => (
        d.date ? (
            <p>{ d.date }</p>
        ) : null   
    )
  },
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
  },
  {
    title: 'App Name',
    dataIndex: 'appName',
    key: 'appName',
    width: 800,
  },
  {
    title: 'Time Spent (hrs)',
    dataIndex: 'timeSpent',
    key: 'timeSpent',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
];



export const Apps = () => {

    const rowClassName = (record, index) => {
        return record.date ? 'highlighted-row' : ''; // Add a class for rows with date
    };

  return (
    <div className='apps-container'>
        <div className="apps-header-container">
            <div className='app-row-1'>
                <p>App activity</p>
            </div>
            <div className='app-row-2'>
                <div className="apps-row-2-left">
                      <div>
                          <DatePicker
                              className='apps-date-picker'
                            // onChange={onChange} 
                        />
                      </div>
                      <div>
                          <Button type='default' className='today-btn'>Today</Button>
                      </div>
                      <div>
                          <Button type='default' className='all-notes-btn'>All Notes</Button>
                      </div>
                </div>
                <div className="apps-row-2-right">
                      <div className="each-select-div">
                          <p>TIME TYPE</p>
                            <Select
                                defaultValue="Normal"
                                style={{ height: '40px', width: '254px' }}
                                // onChange={handleChange}
                                options={[
                                    { value: 'Normal', label: 'Normal' },
                                    { value: 'Idle', label: 'Idle' },
                                    { value: 'Resumed', label: 'Resumed' },
                                    { value: 'Manual', label: 'Manual' },
                                ]}
                            />
                      </div>
                      <div className="each-select-div">
                          <p>PROJECT</p>
                            <Select
                                defaultValue="Interns"
                                style={{ height: '40px', width: '254px' }}
                                // onChange={handleChange}
                                options={[
                                    { value: 'Interns', label: 'Interns' },
                                    { value: 'Shipper UI', label: 'Shipper UI' },
                                    { value: 'Use Case Manager', label: 'Use Case Manager' },
                                ]}
                            />
                      </div>
                      <div className="each-select-div">
                          <p>MEMBER</p>
                            <Select
                                defaultValue="Lucy"
                                style={{ height: '40px', width: '254px' }}
                                // onChange={handleChange}
                                options={[
                                    { value: 'Lucy', label: 'Lucy' },
                                    { value: 'Lily', label: 'Lily' },
                                    { value: 'Jack', label: 'Jack' },
                                    { value: 'John', label: 'John' },
                                ]}
                            />
                      </div>
                </div>
            </div>
          </div>
          
          <div className="apps-table-container">
              <div className="apps-table">
                   <Table
                        dataSource={dataSource}
                        columns={columns}
                        rowClassName={rowClassName}
                        pagination={false}
                    />
              </div>
          </div>
    </div>
  )
}
