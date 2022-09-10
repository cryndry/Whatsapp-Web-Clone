import React, { useEffect, useRef } from 'react'
import s from './MsgScreen.module.css'
import MessageOut from "./MessageOut/MessageOut"
import MessageIn from "./MessageIn/MessageIn"
import { useSelector } from "react-redux"

const MsgScreen = () => {
  const ref = useRef()
  const activeBox = useSelector(state => state.MsgBoxes.activeNow)
  const messages = useSelector(state => state.MsgBoxes[activeBox]?.messages)

  useEffect(() => {
    ref.current.scroll({ top: ref.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  return (
    <div className={s.MsgScreenContainer} ref={ref}>
      <div className={s.MsgScreen}>
        {messages.map(message => {
          if (message.type === "in") {
            return <MessageIn text={message.text} sender={message.sender} sendingTime={message.sendingTime} />
          }
          return <MessageOut text={message.text} sendingTime={message.sendingTime} />
        })}
      </div>
    </div>
  )
}

export default MsgScreen