import React from 'react'
import LeftHeader from './LeftHeader/LeftHeader'
import MsgBoxes from './MsgBoxes/MsgBoxes'
import s from "./LeftPanel.module.css"

const LeftPanel = () => {
  return (
    <div className={s.LeftPanel}>
      <LeftHeader />
      <MsgBoxes />
    </div>
  )
}

export default LeftPanel