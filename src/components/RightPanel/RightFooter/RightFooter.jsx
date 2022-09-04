import React from 'react'
import s from "./RightFooter.module.css"
import SmileyButton from "../assets/SmileyButton"
import AttachmentButton from "../assets/AttachmentButton"
import MicButton from "../assets/MicButton"

const RightFooter = () => {
  return (
    <div className={s.Footer}>
        <SmileyButton/>
        <AttachmentButton/>
        <MicButton/>
    </div>
  )
}

export default RightFooter