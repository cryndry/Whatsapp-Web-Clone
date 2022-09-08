import React from 'react'
import s from './MessageIn.module.css'
import MessageInTail from "../../assets/MessageInTail.jsx"

const MessageIn = (props) => {
  return (
    <div className={s.MessageLine}>
      <div className={s.MessageContainer}>
        <div className={s.MessageBody}>
          <span className={s.MessageText}>{props.text}</span>
        </div>
        <span className={s.MessageTail}>
          <MessageInTail />
        </span>
      </div>
    </div>
  )
}

export default MessageIn