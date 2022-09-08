import React, { useState } from 'react'
import s from './MsgBox.module.css'
import PP from "../../assets/PP.jpg"
import PinIcon from "../../assets/PinIcon"
import MuteIcon from "../../assets/MuteIcon"
import ContextButton from "../../assets/ContextButton"

const MsgBox = () => {
  const [isBoxActive, setIsBoxActive] = useState(false)
  const [isBoxHovered, setIsBoxHovered] = useState(false)
  return (
    <div className={isBoxActive ? s.MessageBoxActive : s.MessageBox} onClick={(e) => { setIsBoxActive(() => !isBoxActive) }} onMouseOver={() => { setIsBoxHovered(() => true) }} onMouseOut={() => { setIsBoxHovered(() => false) }}>
      <div className={s.BoxPhotoContainer}>
        <img className={s.BoxPhoto} src={PP} alt="" />
      </div>
      <div className={s.BoxInfo}>
        <div className={s.BoxInfoName}>
          <div className={s.MessageBoxName}>
            <div className={s.MessageBoxNameText}>
              Ondördüncü harbiye koğuşu
            </div>
          </div>
          <div className={s.BoxLastMsgTime}>18:00</div>
        </div>
        <div className={s.BoxLastMsg}>
          <div className={isBoxActive ? s.LastMsgBoxActive : s.LastMsgBox}>
            <span>Taha</span>
            <span>:&nbsp;</span>
            <span className={s.LastMsg}>
              <span className={s.LastMsgText}>ahahaahahahahahhhah</span>
            </span>
            <span className={s.OtherIcons}>
              <MuteIcon />
              <PinIcon />
              {isBoxHovered && <ContextButton />}
            </span>
          </div>
          <div className={s.Pin}></div>
        </div>
      </div>
    </div>
  )
}

export default MsgBox