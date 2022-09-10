import React, { useState } from 'react'
import s from './MsgBox.module.css'
import PP from "../../assets/PP.jpg"
import PinIcon from "../../assets/PinIcon"
import MuteIcon from "../../assets/MuteIcon"
import ContextButton from "../../assets/ContextButton"
import { useSelector } from "react-redux"

const MsgBox = (props) => {
  const isBoxActive = useSelector(store => store.MsgBoxes.activeNow === props.id)
  const boxName = useSelector(store => store.MsgBoxes[props.id].boxName)
  const lastMessage = useSelector(store => {
    const messages = store.MsgBoxes[props.id].messages
    return messages[messages.length - 1]
  })
  const [isBoxHovered, setIsBoxHovered] = useState(false)
  const lastMessageTime = new Date(lastMessage.sendingTime)
  return (
    <div className={isBoxActive ? s.MessageBoxActive : s.MessageBox}
      onClick={(e) => { props.activator(props.id); }}
      onMouseOver={() => { setIsBoxHovered(() => true) }}
      onMouseOut={() => { setIsBoxHovered(() => false) }}
    >
      <div className={s.BoxPhotoContainer}>
        <img className={s.BoxPhoto} src={PP} alt="" />
      </div>
      <div className={s.BoxInfo}>
        <div className={s.BoxInfoName}>
          <div className={s.MessageBoxName}>
            <div className={s.MessageBoxNameText}>
              {boxName}
            </div>
          </div>
          <div className={s.BoxLastMsgTime}>
            {`${lastMessageTime.getHours()}:${lastMessageTime.getMinutes() < 10
              ? "0" + lastMessageTime.getMinutes()
              : lastMessageTime.getMinutes()}`}
          </div>
        </div>
        <div className={s.BoxLastMsg}>
          <div className={isBoxActive ? s.LastMsgBoxActive : s.LastMsgBox}>
            <span>{lastMessage.sender?.replaceAll(" ","\xA0") || "You"}</span>
            <span>:&nbsp;</span>
            <span className={s.LastMsg}>
              <span className={s.LastMsgText}>{lastMessage.text}</span>
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