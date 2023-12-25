import React from 'react'
import './Projects.css'
import { FaSearch } from "react-icons/fa";
import { Button, Input, Select, Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Interns',
    teams: 'None',
    members: '',
    todos: 'No to-dos',
    budget: '',
  },
  {
    key: '1',
    name: 'Employee',
    teams: 'Employee-hub',
    members: '12',
    todos: 'Use cases',
    budget: 'Rs.25cr',
  }
]

const columns = [
  {
    key: '1',
    title: 'Name',
    dataIndex: 'name',
  },
  {
    key: '2',
    title: 'Teams',
    dataIndex: 'teams',
  },
  {
    key: '3',
    title: 'Members',
    dataIndex: 'members',
  },
  {
    key: '4',
    title: 'To-dos',
    dataIndex: 'todos',
  },
  {
    key: '5',
    title: 'Budget',
    dataIndex: 'budget',
  },
  {
    key: '6',
    render: () => (<Select style={{ width: 140 }} options={options} defaultValue='Actions'/>)
  },
]

const options=[
        { value: 'edit', label: 'Edit time entry' },
        { value: 'split', label: 'Split time entry' },
        { value: 'delete', label: 'Delete time entry' }
    ];

export const Projects = () => {
  return (
    <div className='projects-container-main'>
      <div className='projects-table-header'>
        <div className="projects-row1">
          <p>Projects</p>
        </div>

        <div className='projects-row2'>
          <div>
              <Input type='search' className='search-input' placeholder='Search projects' prefix={<FaSearch />} />
          </div>
          <div>
              <Button className='import-btn'>Import Projects</Button>
          </div>
        </div>
      </div>

      <div className="projects-table-container">
        <div className="projects-table">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          />
          </div>
      </div>
    </div>
  )
}

