import React from 'react'
import LeftHeader from './LeftHeader/LeftHeader'
import MsgBoxes from './MsgBoxes/MsgBoxes'
import SearchBox from './SearchBox/SearchBox'
import s from "./LeftPanel.module.css"

const LeftPanel = () => {
  return (
    <div className={s.LeftPanel}>
      <LeftHeader />
      <SearchBox />
      <MsgBoxes />
    </div>
  )
}

export default LeftPanel