import React from 'react'
import s from "./LeftHeader.module.css"
import PP from "../assets/PP.jpg"
import StatusButton from "../assets/StatusButton"
import NewChatButton from "../assets/NewChatButton"
import MenuButton from "../assets/MenuButton"

const LeftHeader = () => {
  return (
    <div className={s.LeftHeader}>
      <div className={s.PpContainer}>
        <img className={s.ProfilePhoto} src={PP} alt="ProfilePhoto" />
      </div>
      <div className={s.Buttons}>
        <StatusButton />
        <NewChatButton />
        <MenuButton />
      </div>
    </div>
  )
}

export default LeftHeader