import React, { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/kon'

const SideBar = () => {

    const[extended,setExtended]=useState(false)
    const{onSent, prevPrompt, setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt) =>{
            setRecentPrompt(prompt)
            await onSent(prompt)
    } 


  return (
    <div className='sidebar'>
        <div className="top">
            <img className="menu"src={assets.menu_icon} alt="" onClick={()=> setExtended(!extended)}  />
            <div className="new-chat" onClick={()=> newChat()}>
                <img src={assets.plus_icon} className="add-chat" alt="" />
                {extended?<p>New Chat</p>:<></>}
            </div>
            {extended?
            <div className="recent">
                <p className='recent-title'>Recent</p>
                {prevPrompt.map((item,index)=>{
                    return(
                        <div className="recent-entry" key={index}>
                            < img onClick={()=> setExtended(prev => !prev)} src={assets.message_icon} alt="" />
                            <p className='chat'>{item.slice(0,18)}...</p>
                        </div>
                    )
                })}
                
            </div>:<></>}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended? <p>Activity</p>:null}
            </div>
             <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
            </div>
        </div>
      
    </div>
  )
}

export default SideBar
