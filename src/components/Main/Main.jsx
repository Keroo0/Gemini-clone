import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import {Context} from '../../context/kon'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>KeroAI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
        {!showResult?<>
            <div className="greet">
                <p><span>Wassap, Bro...</span></p>
                <p>Mau bahas apanih hari ini?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Siapa si dalang perusuh demo 25 Agustus 2025 kemarin</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Membuat aplikasi web menggunakan python</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Saran tempat berlibur paling populer 2025 bersama pasangan</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Curhat tentang masalah hidupmu yang begitu berat dan membosankan</p>
                    <img src={assets.message_icon} alt="" />
                </div>
             </div>
        </>:
        <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?
                <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>:
                  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
              
            </div>

        </div>
        }
    
        
       
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Ketik sesuatu...' onChange={(e)=> setInput(e.target.value)} value={input}/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input? <img src={assets.send_icon} alt="" onClick={()=> onSent()}/>:null}
                   
                </div>
            </div>
            <p className="bottom-info">
                Kero AI adalah asisten virtual yang didukung oleh teknologi AI canggih untuk membantu Anda dengan berbagai tugas, mulai dari menjawab pertanyaan hingga memberikan rekomendasi personal. Ini mungkin belum akurat, jan asal copas 100% ya bro... harus di crosscheck dulu.
            </p>
        </div>
        
    </div>
      
    </div>
  )
}

export default Main
