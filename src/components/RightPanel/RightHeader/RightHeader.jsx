import React from 'react'
import s from "./RightHeader.module.css"
import PP from "../assets/PP.jpg"
import MenuButton from "../assets/MenuButton"
import SearchButton from "../assets/SearchButton"
import { useSelector } from "react-redux"

const RightHeader = () => {
  const activeBox = useSelector(state => state.MsgBoxes.activeNow)
  const boxName = useSelector(state => state.MsgBoxes[activeBox]?.boxName)
  const members = useSelector(state => state.MsgBoxes[activeBox]?.members)
  return (
    <div className={s.RightHeader}>
      <div className={s.PpContainer}>
        <img className={s.ProfilePhoto} src={PP} alt="ProfilePhoto" />
      </div>
      <div className={s.BoxInfo}>
        <div className={s.MessageBoxName}>
          {boxName}
        </div>
        <div className={s.CurrentInfo}>
          {members.join(", ")+", You"}
        </div>
      </div>
      <div className={s.Buttons}>
        <SearchButton />
        <MenuButton />
      </div>
    </div>
  )
}

export default RightHeader