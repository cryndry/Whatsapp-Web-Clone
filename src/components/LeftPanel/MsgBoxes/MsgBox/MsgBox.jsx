import React, { useState } from 'react'
import s from './MsgBox.module.css'
import PP from "../../assets/PP.jpg"

const MsgBox = () => {
  const [isBoxActive, setIsBoxActive] = useState(false)
  return (
    <div className={isBoxActive ? s.MessageBoxActive : s.MessageBox} onClick={(e) => { setIsBoxActive(true) }}>
      <div className={s.BoxPhotoContainer}>
        <img className={s.BoxPhoto} src={PP} alt="" />
      </div>
      <div className={s.BoxInfo}>
        <div className={s.BoxInfoName}>
          <div className={s.MessageBoxName}>Ondördüncü harbiye koğuşu</div>
          <div className={s.BoxLastMsgTime}>18:00</div>
        </div>
        <div className={s.BoxLastMsg}>
          <div className={isBoxActive ? s.LastMsgActive : s.LastMsg}>
            <span>Taha</span>
            <span>:&nbsp;</span>
            <span>ahahhahhah</span>
          </div>
          <div className={s.Pin}></div>
        </div>
      </div>
    </div>
  )
}

export default MsgBox