import React from 'react'
import s from "./RightHeader.module.css"
import PP from "../assets/PP.jpg"
import MenuButton from "../assets/MenuButton"
import SearchButton from "../assets/SearchButton"

const RightHeader = () => {
  return (
    <div className={s.RightHeader}>
      <div className={s.PpContainer}>
        <img className={s.ProfilePhoto} src={PP} alt="ProfilePhoto" />
      </div>
      <div className={s.BoxInfo}>
        <div className={s.MessageBoxName}>
          Ondördüncü harbiye koğuşu
        </div>
        <div className={s.CurrentInfo}>
          Ahmet, Azad, Enes, Furkan, Hamarat, Taha, Yusuf, Sen
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