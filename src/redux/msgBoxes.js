import { createSlice } from "@reduxjs/toolkit"

const MsgBoxesSlice = createSlice({
    name: "MsgBoxes",
    initialState: { "0": false, "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false },
    reducers: {
        activator(state, action) {
            state = { ...state, ...action.payload }
            console.log(action.payload);
            return state
        },
    }
})
export default MsgBoxesSlice