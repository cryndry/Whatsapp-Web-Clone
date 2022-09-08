import React from 'react'
import s from './MessageOut.module.css'
import MessageOutTail from "../../assets/MessageOutTail"

const MessageOut = (props) => {
  return (
    <div className={s.MessageLine}>
      <div className={s.MessageContainer}>
        <div className={s.MessageBody}>
          <span className={s.MessageText}>{props.text}</span>
        </div>
        <span className={s.MessageTail}>
          <MessageOutTail />
        </span>
      </div>
    </div>
  )
}

export default MessageOut