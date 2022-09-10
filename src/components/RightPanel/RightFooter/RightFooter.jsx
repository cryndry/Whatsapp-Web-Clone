import React, { useRef, useState } from 'react'
import s from "./RightFooter.module.css"
import SmileyButton from "../assets/SmileyButton"
import AttachmentButton from "../assets/AttachmentButton"
import MicButton from "../assets/MicButton"
import SendButton from "../assets/SendButton"
import { useSelector, useDispatch } from "react-redux"
import { MsgBoxesActions } from "../../../redux/redux-store"

const RightFooter = () => {
    const [msgText, setMsgText] = useState("")
    const MsgInput = (e) => { setMsgText(e.target.innerText); }
    const msgRef = useRef()

    const dispatch = useDispatch()
    const activeBox = useSelector(state => state.MsgBoxes.activeNow)

    const sendMessage = (e) => {
        e.preventDefault()
        if (msgText) {
            dispatch(MsgBoxesActions.addMessage({
                boxNumber: activeBox,
                message: {
                    type: "out",
                    text: msgText,
                    sendingTime: new Date(Date.now()).toString()
                }
            }))
            setTimeout(() => {
                dispatch(MsgBoxesActions.addMessage({
                    boxNumber: activeBox,
                    message: {
                        type: "in",
                        text: "This message automatically created for you to see the style of incoming messages. <3",
                        sendingTime: new Date(Date.now()).toString(),
                        sender: "Host"
                    }
                }))
            }, 100);
            setTimeout(() => {
                const typingDiv = document.getElementById("Typing")
                while (typingDiv.firstChild && typingDiv.removeChild(typingDiv.firstChild));
                setMsgText("")
            }, 50);
        }
    }

    return (
        <div className={s.Footer}>
            <div className={s.LeftButtons}>
                <SmileyButton />
                <AttachmentButton />
            </div>
            <div className={s.TextingContainer}>
                <div className={s.TypingContainer}>
                    <div className={s.TypingGrid}>
                        <div className={s.Typing} ref={msgRef} id="Typing" contentEditable="true" placeholder='Type a message' onInput={MsgInput}
                            onPaste={(e) => {
                                e.preventDefault();
                                let text = (e.originalEvent || e).clipboardData.getData('text/plain');
                                document.execCommand("insertHTML", false, text);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault()
                                    document.getElementById("SendButton").click()
                                }
                            }}
                        >
                        </div>
                    </div>
                </div>
                {msgText ? (
                    <div className={s.SendButton} id="SendButton" onClick={sendMessage}>
                        <SendButton />
                    </div>
                ) : (
                    <div className={s.MicButton}>
                        <MicButton />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RightFooter