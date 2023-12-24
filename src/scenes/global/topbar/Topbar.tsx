import React from 'react'
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiGift } from "react-icons/bi";
import { IoApps } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import './Topbar.css'

export const Topbar = () => {

  return (
      <div className='topbar-container'>
        <div className='icons-container'>
          <div className='each-icon'>
            <RiQuestionnaireFill />
          </div>
          <div className='each-icon'>
            <MdOutlineNotificationsNone />
          </div>
          <div className='each-icon'>
            <BiGift />
          </div>
          <div className='each-icon'>
            <IoApps />
          </div>
          <div className='each-icon'><RxAvatar style={{ color: '#53aaff' }} /></div>
          <div className='divider'></div>
          <div className='each-icon company-account'>
            <p>C</p>
          </div>
        </div>
      </div>
  )
}
