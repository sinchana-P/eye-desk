import { Button, DatePicker, Select, Table } from 'antd'
import React from 'react'
import '../apps/Apps.css'

const dataSource = [
  {
    id: 'divider0',
    isDivider: true,
    date: 'Mon, Dec 25, 2023 12:00 am IST',
  },
  {
    id: '1',
    project: 'Interns',
    site: 'app.hubstaff.com',
    timeSpent: '0:01:26',
  },
  {
    id: '2',
    project: 'Interns',
    site: 'google.com',
    timeSpent: '0:00:23',
  },
  {
    id: '3',
    project: 'Interns',
    site: 'react-icons.github.io',
    timeSpent: '0:00:02',
  },
  {
    id: 'divider1',
    isDivider: true,
    date: 'Mon, Dec 25, 2023 1:00 am IST',
  },
  {
    id: '4',
    project: 'Interns',
    site: 'app.hubstaff.com',
    timeSpent: '0:12:39',
  },
  {
    id: '5',
    project: 'Interns',
    site: 'figma.com',
    timeSpent: '0:00:01',
  },
  {
    id: 'divider2',
    isDivider: true,
    date: 'Mon, Dec 25, 2023 8:00 am IST',
  },
  {
    id: '6',
    project: 'Interns',
    site: 'ant.design',
    timeSpent: '0:03:47',
  },
  {
    id: '7',
    project: 'Interns',
    site: 'app.hubstaff.com',
    timeSpent: '0:00:37',
  },
  {
    id: '8',
    project: 'Interns',
    site: 'charts.ag-grid.com',
    timeSpent: '0:00:11',
  },
  {
    id: '9',
    project: 'Interns',
    site: 'google.com',
    timeSpent: '0:00:02',
  },
  {
    id: 'divider3',
    isDivider: true,
    date: 'Mon, Dec 25, 2023 9:00 am IST',
  },
  {
    id: '10',
    project: 'Interns',
    site: 'app.hubstaff.com',
    timeSpent: '0:05:13',
  },
  {
    id: '11',
    project: 'Interns',
    site: 'chat.openai.com',
    timeSpent: '0:02:22',
  },
  {
    id: '12',
    project: 'Interns',
    site: 'ant.design',
    timeSpent: '0:01:13',
  },
  {
    id: '13',
    project: 'Interns',
    site: 'google.com',
    timeSpent: '0:00:34',
  },
  {
    id: '14',
    project: 'Interns',
    site: 'localhost',
    timeSpent: '0:00:07',
  },
  {
    id: '15',
    project: 'Interns',
    site: 'github.com',
    timeSpent: '0:00:01',
    },
  {
    id: '33',
    project: 'Interns',
    site: 'Google Chrome',
    timeSpent: '0:11:22',
    sessions: 6,
  },
  {
    id: '34',
    project: 'Interns',
    site: 'Hubstaff',
    timeSpent: '0:09:04',
    sessions: 3,
  },
  {
    id: '35',
    project: 'Interns',
    site: 'Microsoft® Windows® Operating System',
    timeSpent: '0:04:57',
    sessions: 2,
  },
  {
    id: '36',
    project: 'Interns',
    site: 'GitHub Desktop',
    timeSpent: '0:02:23',
    sessions: 1,
  },
  {
    id: '37',
    project: 'Interns',
    site: 'Visual Studio Code',
    timeSpent: '0:02:20',
    sessions: 2,
  },
  {
    id: '38',
    project: 'Interns',
    site: 'Figma',
    timeSpent: '0:00:54',
    sessions: 1,
  },
  {
    id: 'divider8',
    isDivider: true,
    date: 'Mon, Dec 25, 2023 7:00 pm IST',
  },
  {
    id: '39',
    project: 'Interns',
    site: 'Google Chrome',
    timeSpent: '0:03:47',
    sessions: 2,
  },
  {
    id: '40',
    project: 'Interns',
    site: 'GitHub Desktop',
    timeSpent: '0:03:12',
    sessions: 1,
  },
  {
    id: '41',
    project: 'Interns',
    site: 'MicrosoftWindows.Client.CBS',
    timeSpent: '0:02:41',
    sessions: 1,
  },
  {
    id: '42',
    project: 'Interns',
    site: 'Ant Design',
    timeSpent: '0:02:21',
    sessions: 1,
  },
  {
    id: '43',
    project: 'Interns',
    site: 'Chat.OpenAI',
    timeSpent: '0:02:13',
    sessions: 1,
  },
  {
    id: '44',
    project: 'Interns',
    site: 'YouTube',
    timeSpent: '0:01:40',
    sessions: 1,
  },
];


const columns = [
  {
    key: 'date',
    width: 300,
    render: (d) => (
      d.date ? (
        <p>{d.date}</p>
      ) : null
    )
  },
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    width: 300,
  },
  {
    title: 'Site',
    dataIndex: 'site',
    key: 'site',
    width: 850,
  },
  {
    title: 'Time Spent (hrs)',
    dataIndex: 'timeSpent',
    key: 'timeSpent',
  }
];


export const Urls = () => {

    const rowClassName = (record, index) => {
        return record.date ? 'highlighted-row' : ''; // Add a class for rows with date
    };

  return (
    <div>
          <div className="apps-header-container">
            <div className='app-row-1'>
                <p>URL activity</p>
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
