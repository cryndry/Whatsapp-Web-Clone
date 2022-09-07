import React from 'react'
import s from "./RightFooter.module.css"
import SmileyButton from "../assets/SmileyButton"
import AttachmentButton from "../assets/AttachmentButton"
import MicButton from "../assets/MicButton"

const RightFooter = () => {
    const MsgInput = () => { console.log("adfsf") }
    return (
        <div className={s.Footer}>
            <div className={s.LeftButtons}>
                <SmileyButton />
                <AttachmentButton />
            </div>
            <div className={s.TextingContainer}>
                <div className={s.TypingContainer}>
                    <div className={s.Typing} contentEditable="true" placeholder='Type a message' onInput={MsgInput}
                        onPaste={(e) => {
                            e.preventDefault();
                            let text = (e.originalEvent || e).clipboardData.getData('text/plain');
                            document.execCommand("insertHTML", false, text);
                        }}>
                    </div>
                </div>
                <div className={s.MicButton}>
                    <MicButton />
                </div>
            </div>
        </div>
    )
}

export default RightFooter