import React from 'react'
import s from './MsgScreen.module.css'
import MessageOut from "./MessageOut/MessageOut"
import MessageIn from "./MessageIn/MessageIn"

const MsgScreen = () => {
  const messageText = "asdasdadasdaasdasdadasdaa".repeat(7)
  return (
    <div className={s.MsgScreenContainer}>
      <div className={s.MsgScreen}>
        <MessageOut text={messageText} />
        <MessageIn text={messageText} />
        <MessageOut text={messageText} />
        <MessageIn text={messageText} />
        <MessageOut text={messageText} />
        <MessageIn text={messageText} />
        <MessageOut text={messageText} />
        <MessageIn text={messageText} />
        <MessageOut text={messageText} />
        <MessageIn text={messageText} />
      </div>
    </div>
  )
}

export default MsgScreen