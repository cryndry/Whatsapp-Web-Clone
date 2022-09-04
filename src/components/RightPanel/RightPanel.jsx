import React from 'react'
import RightHeader from './RightHeader/RightHeader'
import MsgScreen from './MsgScreen/MsgScreen'
import s from "./RightPanel.module.css"
import RightFooter from "./RightFooter/RightFooter"

const RightPanel = () => {
  return (
    <div className={s.RightPanel}>
      <RightHeader />
      <MsgScreen />
      <RightFooter />
    </div>
  )
}

export default RightPanel