import React from 'react'
import approvalImage from '../../assets/approval-img.png'
import './Approvals.css'

export const Approvals = () => {
  return (
    <div className='approval-container'>
          <div className='text-container'>
              <h3>Timesheet approvals</h3>
              <p>Enable timesheet approvals for any team member. They'll get alerts to submit timesheets after the pay period ends, and managers will be notified to review once they're ready. Approved timesheets can be paid automatically or manually.</p>
          </div>
          <div className='img-container'>
              <img src={approvalImage} alt="Approval Image" />
          </div>
          <p style={{ color: '#617083' }}>Ask an organization owner to configure</p>
    </div>
  )
}
