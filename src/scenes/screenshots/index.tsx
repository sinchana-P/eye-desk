import React from 'react'
import './Screenshots.css'

import { Button, DatePicker, Progress, Select, Timeline } from 'antd';
import { PiNotePencilBold } from "react-icons/pi";
import ssImg from '../../assets/ss.png'
import ssImg2 from '../../assets/ss2.png'
import ssImg3 from '../../assets/ss3.png'

import { RiPencilLine } from "react-icons/ri";


const ssArray = [ssImg, ssImg2, ssImg3, ssImg, ssImg2, ssImg3]

const items = [
      {
        color: 'gray',
        children: (
          <>
            <p>12:00 am - 1:00 am <span style={{ color: '#8692a3', paddingLeft: '20px' }}>total time worked : 0:56:47</span></p>
            <div className='ss-timeline-container'>
              {
              ssArray.map((i, index) => (
              <div key={index} className='each-ss-timeline'>
                  <img src={i} alt='screenshot-image' width='228px' height='128px' style={{ margin: '0px 0px', zIndex: '1'}} />
                  
                  <div className='z-index-screen'>3 screens</div>
                  
                  <div className='ss-details'>
                    <div>
                      <p>12:00 am - 12:10 am</p>
                      <div><RiPencilLine style={{ color: '#2aa7ff', cursor: 'pointer' }} /></div>
                    </div>
                    <div>
                      <Progress percent={50} size='small' />
                    </div>
                    <div>
                      <p>73% of 6 minutes</p>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
            
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>12:00 am - 1:00 am <span style={{ color: '#8692a3', paddingLeft: '20px' }}>total time worked : 0:56:47</span></p>
            <div className='ss-timeline-container'>
              {
              ssArray.map((i, index) => (
              <div key={index} className='each-ss-timeline'>
                  <img src={i} alt='screenshot-image' width='228px' height='128px' style={{ margin: '0px 0px', zIndex: '1'}} />
                  
                  <div className='z-index-screen'>3 screens</div>
                  
                  <div className='ss-details'>
                    <div>
                      <p>12:00 am - 12:10 am</p>
                      <div><RiPencilLine style={{ color: '#2aa7ff', cursor: 'pointer' }} /></div>
                    </div>
                    <div>
                      <Progress percent={20} size='small' status="exception" />
                    </div>
                    <div>
                      <p>73% of 6 minutes</p>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
            
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>1:00 am - 2:00 am <span style={{ color: '#8692a3', paddingLeft: '20px' }}>total time worked : 0:56:47</span></p>
            <div className='ss-timeline-container'>
              {
              ssArray.map((i, index) => (
              <div key={index} className='each-ss-timeline'>
                  <img src={i} alt='screenshot-image' width='228px' height='128px' style={{ margin: '0px 0px', zIndex: '1'}} />
                  
                  <div className='z-index-screen'>3 screens</div>
                  
                  <div className='ss-details'>
                    <div>
                      <p>1:00 am - 2:00 am</p>
                      <div><RiPencilLine style={{ color: '#2aa7ff', cursor: 'pointer' }} /></div>
                    </div>
                    <div>
                      <Progress percent={90} size='small' />
                    </div>
                    <div>
                      <p>73% of 6 minutes</p>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
            
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>8:00 am - 9:00 am <span style={{ color: '#8692a3', paddingLeft: '20px' }}>total time worked : 0:56:47</span></p>
            <div className='ss-timeline-container'>
              {
              ssArray.map((i, index) => (
              <div key={index} className='each-ss-timeline'>
                  <img src={i} alt='screenshot-image' width='228px' height='128px' style={{ margin: '0px 0px', zIndex: '1',}} />
                  
                  <div className='z-index-screen'>3 screens</div>
                  
                  <div className='ss-details'>
                    <div>
                      <p>8:00 am - 9:00 am</p>
                      <div><RiPencilLine style={{ color: '#2aa7ff', cursor: 'pointer' }} /></div>
                    </div>
                    <div>
                      <Progress percent={100} size='small' />
                    </div>
                    <div>
                      <p>73% of 6 minutes</p>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
            
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>9:00 am - 10:00 am <span style={{ color: '#8692a3', paddingLeft: '20px' }}>total time worked : 0:56:47</span></p>
            <div className='ss-timeline-container'>
              {
              ssArray.map((i, index) => (
              <div key={index} className='each-ss-timeline'>
                  <img src={i} alt='screenshot-image' width='228px' height='128px' style={{ margin: '0px 0px', zIndex: '1'}} />
                  
                  <div className='z-index-screen'>3 screens</div>
                  
                  <div className='ss-details'>
                    <div>
                      <p>12:00 am - 12:10 am</p>
                      <div><RiPencilLine style={{ color: '#2aa7ff', cursor: 'pointer' }} /></div>
                    </div>
                    <div>
                      <Progress percent={87} size='small' />
                    </div>
                    <div>
                      <p>73% of 6 minutes</p>
                    </div>
                  </div>
              </div>
              ))
            }
            </div>
            
          </>
        ),
      },
      
      
    ]

export const Screenshots = () => {
  return (
    <div className='screenshots-container-main'>

      <div className="screenshots-header">
            <div className="ss-row-one">
                <p>Screenshots</p>
                <div>Daily</div>
            </div>  
        
            <div className="ss-row-two">
            <div>
            <DatePicker
              // onChange={onChange} 
            />
            </div>
                <div className='ss-row-two-right'>
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
                <div className='ss-filter-btn'><Button style={{ border: '1px solid #2aa7ff', borderRadius: '8px', color: '#2aa7ff', height: '40px', width: '84px' }}>Filters</Button></div>
            </div>
            </div> 
            
            <div className="ss-row-three">
                <div className='screenshots-icons-container'>
                  <div><PiNotePencilBold style={{ color: '#2aa7ff' }} /></div>
                </div>
            </div> 
      </div>

      <div className="ss-activity-container">
        <div className='activity-col1'>
            <div>
              <p>WORKED TIME</p> 
              <h1>5:38</h1>
            </div>
          
            <div>
            <p>AVG. ACTIVITY</p>
            <h1>62%</h1>
            </div>
        </div>

        <div className='activity-col2'>
          <div className='col1-div'>
            <p>FOCUS TIME</p>   
            <div><Progress type='circle' percent={97} size="small" /></div>
          </div>  
          
          <div className='col2-div'>
            <p>WORK TIME CLASSIFICATION</p>

            <div className='col2-div-inner'>
              <div className='col2-div-inner-left'>
                <h1>68%</h1>
                <p>Core work</p>
              </div>
              
              <div className='col2-div-inner-right'>
                <ul>
                  <li>68.4% Core work</li>
                  <li>31.6% Non-core work</li>
                  <li>0% Unproductive</li>
                </ul>
              </div>
            </div>

            <div><Progress percent={75} size={[450, 20]} /></div>

          </div>
        </div>
      </div>

      <div className="ss-timeline-container">
        <Timeline
          items={items}
        />
      </div>

    </div>
  )
}
