import { configureStore } from "@reduxjs/toolkit"
import MsgBoxesSlice from "./msgBoxes"

const store = configureStore({
    reducer: { MsgBoxes: MsgBoxesSlice.reducer }
})

export default store
export const MsgBoxesActions = MsgBoxesSlice.actions