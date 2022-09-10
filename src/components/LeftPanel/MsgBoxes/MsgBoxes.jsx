import React, { useState } from 'react'
import MsgBox from './MsgBox/MsgBox'
import SmallLockIcon from "../assets/SmallLockIcon"
import s from './MsgBoxes.module.css'
import { useSelector, useDispatch } from "react-redux"
import { MsgBoxesActions } from "../../../redux/redux-store"

const MsgBoxes = () => {
    const comps = useSelector(state => state.MsgBoxes)
    const dispatch = useDispatch()
    const [activeChat, setActiveChat] = useState("-1")

    const chatActivate = (num) => {
        if (num === activeChat) {
            dispatch(MsgBoxesActions.activator({ activeNow: "" }))
            setActiveChat("-1")
        } else {
            dispatch(MsgBoxesActions.activator({ activeNow: num }))
            setActiveChat(num)
        }
    }

    return (
        <div className={s.MsgBoxes}>
            {Object.keys(comps).filter((key) => { if (key === "activeNow") { return false }; return true })
                .map(num => <MsgBox key={num} id={num} activator={chatActivate} />)}
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