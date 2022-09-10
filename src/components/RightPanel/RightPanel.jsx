import React from 'react'
import s from "./RightPanel.module.css"
import IntroImage from './assets/IntroImage'
import RightHeader from './RightHeader/RightHeader'
import MsgScreen from './MsgScreen/MsgScreen'
import RightFooter from "./RightFooter/RightFooter"
import { useSelector } from "react-redux"


const RightPanel = () => {
  const activeBox = useSelector(state => state.MsgBoxes.activeNow)

  return activeBox ? (
    <div className={s.RightPanel}>
      <RightHeader />
      <MsgScreen />
      <RightFooter />
    </div>
  ) : (
    <div className={s.RightPanel}>
      <div className={s.NoActiveChat}>
        <div className={s.IntroImage}><IntroImage /></div>
        <h1 className={s.IntroTitle}>WhatsApp Web</h1>
      </div>
    </div>
  )
}

export default RightPanel