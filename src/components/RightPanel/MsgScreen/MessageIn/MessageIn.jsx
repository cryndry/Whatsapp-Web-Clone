import React from 'react'
import s from './MessageIn.module.css'
import MessageInTail from "../../assets/MessageInTail.jsx"

const MessageIn = (props) => {
  const sendingTimeObj = new Date(props.sendingTime)
  const sendingTime = `${(sendingTimeObj.getHours()).toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${(sendingTimeObj.getMinutes()).toLocaleString(undefined, { minimumIntegerDigits: 2 })}`
  return (
    <div className={s.MessageLine}>
      <div className={s.MessageContainer}>
        <div className={s.MessageBody}>
          <div className={s.MessageTextBody}>
            <span className={s.MessageText}>{props.text}</span>
            <span className={s.MessageSpace}></span>
          </div>
          <div className={s.Metadata}>
            <span className={s.SendingTime}>{sendingTime}</span>
          </div>
        </div>
        <span className={s.MessageTail}>
          <MessageInTail />
        </span>
      </div>
    </div>
  )
}

export default MessageIn