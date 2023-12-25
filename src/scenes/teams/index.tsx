import React from 'react'
import './Teams.css'
import { Table } from 'antd'

const dataSource = [
  {
    key: '1',
    name: 'ByteWizards',
    members: 25,
    projects: 'DataEncryption, AlgorithmOptimizer, VirtualRealitySim'
  },
  {
    key: '2',
    name: 'QuantumBytes',
    members: 30,
    projects: 'QuantumComputing, AIResearchHub, DataScienceToolkit'
  },
  {
    key: '3',
    name: 'ByteWizards',
    members: 25,
    projects: 'DataEncryption, AlgorithmOptimizer, VirtualRealitySim'
  },
  {
    key: '4',
    name: 'QuantumBytes',
    members: 30,
    projects: 'QuantumComputing, AIResearchHub, DataScienceToolkit'
  },
  {
    key: '5',
    name: 'ByteWizards',
    members: 25,
    projects: 'DataEncryption, AlgorithmOptimizer, VirtualRealitySim'
  },
  {
    key: '6',
    name: 'QuantumBytes',
    members: 30,
    projects: 'QuantumComputing, AIResearchHub, DataScienceToolkit'
  },
  {
    key: '7',
    name: 'ByteWizards',
    members: 25,
    projects: 'DataEncryption, AlgorithmOptimizer, VirtualRealitySim'
  },
  {
    key: '8',
    name: 'QuantumBytes',
    members: 30,
    projects: 'QuantumComputing, AIResearchHub, DataScienceToolkit'
  }
]

const columns = [
  {
    key: '1',
    title: 'Name',
    dataIndex: 'name',
    width: 400
  },
  {
    key: '2',
    title: 'Members',
    dataIndex: 'members',
    width: 600,
  },
  {
    key: '3',
    title: 'Projects',
    dataIndex: 'projects'
  },
]

export const Teams = () => {
  return (
      <div className='teams-container'>
          <div className='teams-header'>
              <p>Teams</p>
      </div>
      
      <div className="teams-table-container">
        <div className="teams-table-div">
          <Table
            dataSource={ dataSource }
            columns={columns}
            pagination={false}
        />
        </div>
      </div>
    </div>
  )
}
