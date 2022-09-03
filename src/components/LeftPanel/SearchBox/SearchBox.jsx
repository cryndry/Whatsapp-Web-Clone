import React from 'react'
import s from "./SearchBox.module.css"
import SearchBoxIcon from "../assets/SearchBoxIcon"
import UnreadFilterIcon from '../assets/UnreadFilterIcon'


const SearchBox = () => {
    return (
        <div className={s.BoxContainer}>
            <div className={s.SearchBoxContainer}>
                <div className={s.SearchBox}>
                    <div className={s.SearchBoxIcon}>
                        <SearchBoxIcon />
                    </div>
                        Search or start new chat
                </div>
            </div>
            <div className={s.UnreadIcon}>
                <UnreadFilterIcon />
            </div>
        </div>
    )
}

export default SearchBox