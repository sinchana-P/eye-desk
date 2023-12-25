import React from 'react'
import './timesheets.css'

import { Button, DatePicker, Select, Table } from 'antd';
import { TbColumns3 } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { ColumnsType } from 'antd/es/table';

const { RangePicker } = DatePicker;

interface DataType {
    key: React.Key;
    project: string;
    activity: string;
    idle: string;
    manual: string;
    duration: string;
    time: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Project',
        dataIndex: 'project',
        // render: (text: string) => <a>{text}</a>,
        width: '320px',
    // align: 'left',
  },
  {
    title: 'Activity',
    dataIndex: 'activity',
  },
  {
    title: 'Idle',
    dataIndex: 'idle',
  },
  {
    title: 'Manual',
    dataIndex: 'manual',
  },
  {
    title: 'Duration',
      dataIndex: 'duration',
    //   render: (duration) => (<a>{ duration }</a>)
  },
  {
    title: 'Time',
      dataIndex: 'time',
    //   render: (duration) => (<a>{ duration }</a>)
  },
  {
      dataIndex: 'address',
      render: () => (<Select style={{ width: 140 }} options={options} defaultValue='Actions'/>)
  },
];

const data: DataType[] = [
  {
    key: '1',
    project: 'Interns',
    activity: '3%',
    idle: '26%',
    manual: '0%',
    duration: '0:19:41',
    time: '12:00 am - 12:19 am',
  },
  {
    key: '2',
    project: 'Interns',
    activity: '3%',
    idle: '26%',
    manual: '0%',
    duration: '0:19:41',
    time: '12:00 am - 12:19 am',
  },
  {
    key: '3',
    project: 'Interns',
    activity: '3%',
    idle: '26%',
    manual: '0%',
    duration: '0:19:41',
    time: '12:00 am - 12:19 am',
  },
  {
    key: '4',
    project: 'Interns',
    activity: '3%',
    idle: '26%',
    manual: '0%',
    duration: '0:19:41',
    time: '12:00 am - 12:19 am',
  },
  {
    key: '5',
    project: 'Interns',
    activity: '3%',
    idle: '26%',
    manual: '0%',
    duration: '0:19:41',
    time: '12:00 am - 12:19 am',
  },
  {
    key: '6',
    project: 'Interns',
    activity: '3%',
    idle: '26%',
    manual: '0%',
    duration: '0:19:41',
    time: '12:00 am - 12:19 am',
  },
  {
    key: '7',
    project: 'Interns',
    activity: '3%',
    idle: '26%',
    manual: '0%',
    duration: '0:19:41',
    time: '12:00 am - 12:19 am',
  },
];

const options=[
        { value: 'edit', label: 'Edit time entry' },
        { value: 'split', label: 'Split time entry' },
        { value: 'delete', label: 'Delete time entry' }
    ];

export const Timesheets = () => {
  return (
      <div className='timeSheet-container-main'>
          
        <div className="timesheet-header">
            <div className="row-one">
                <p>View & edit timesheets</p>
                <div>Daily</div>
            </div>  
        
            <div className="row-two">
            <div>
              <RangePicker
                style={{ height: '40px', width: '300px' }}
                    // showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    // onChange={onChange}
                    // onOk={onOk}
              />
            </div>
                <div className='row-two-right'>
                <div>
                    <p>Member</p>
                    <Select
                        defaultValue="lucy"
                        style={{ height: '40px', width: '140px' }}
                        // onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                        ]}
                    />
                </div>
                <div className='filter-btn'><Button style={{ border: '1px solid #2aa7ff', borderRadius: '8px', color: '#2aa7ff', height: '40px', width: '84px' }}>Filters</Button></div>
            </div>
            </div> 
            
            <div className="row-three">
                <div className='timesheets-icons-container'>
                        <div><TbColumns3 size={ 20 } /></div>
                        <div><HiDownload size={ 20 } /></div>
                        <div><Button type='primary'>Add Time</Button></div>
                </div>
            </div> 
        </div>
          
        <div className="timesheets-table-container">
              <div className='timesheet-table'>
                <Table
                    rowSelection={{
                        type: 'checkbox',
                    }}
                    columns={columns}
                      dataSource={data}
                      pagination={false}
                    style={{ width: '100%' }}  
                />
              </div>           
        </div>               
          

    </div>
  )
}
