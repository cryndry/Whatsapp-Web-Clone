import React from 'react'
import MsgBox from './MsgBox/MsgBox'
import SmallLockIcon from "../assets/SmallLockIcon"
import s from './MsgBoxes.module.css'

const MsgBoxes = () => {
    return (
        <div className={s.MsgBoxes}>
            {Array.from({ length: 15 }, (() => <MsgBox />))}
            <div className={s.EndingTextContainer}>
                <div className={s.EndingText}>
                    <SmallLockIcon />
                    &nbsp;Your personal messages are&nbsp;
                    <span>end-to-end encrypted</span>
                </div>
            </div>
        </div>
    )
}

export default MsgBoxes