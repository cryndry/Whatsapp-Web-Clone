import React from 'react'
import s from './MessageOut.module.css'
import MessageOutTail from "../../assets/MessageOutTail"
import DoubleTicks from "../../assets/DoubleTicks"

const MessageOut = (props) => {
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
            <span className={s.Ticks}> <DoubleTicks /> </span>
          </div>
        </div>
        <span className={s.MessageTail}>
          <MessageOutTail />
        </span>
      </div>
    </div>
  )
}

export default MessageOut