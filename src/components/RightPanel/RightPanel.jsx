import React from 'react'
import RightHeader from './RightHeader/RightHeader'
import MsgScreen from './MsgScreen/MsgScreen'
import s from "./RightPanel.module.css"

const RightPanel = () => {
  return (
    <div className={s.RightPanel}>
      <RightHeader />
      <MsgScreen />
    </div>
  )
}

export default RightPanel