import { createSlice } from "@reduxjs/toolkit"

const MsgBoxesSlice = createSlice({
    name: "MsgBoxes",
    initialState: {
        activeNow: "",
        "0": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu",
            members: ["Ahmet", "Azad", "Enes", "Furkan", "Hamarat", "Taha", "Yusuf"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "1": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu1",
            members: ["Ahmet", "Azad", "Taha", "Yusuf"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "2": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu2",
            members: ["Ahmet", "Furkan", "Hamarat", "Taha", "Yusuf"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "3": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu3",
            members: ["Ahmet", "Azad", "Enes", "Taha", "Yusuf"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "4": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu4",
            members: ["Furkan", "Hamarat", "Taha", "Yusuf"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "5": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu5",
            members: ["Ahmet", "Azad", "Enes", "Furkan"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "6": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu6",
            members: ["Ahmet", "Azad", "Enes", "Hamarat", "Yusuf"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "7": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu7",
            members: ["Ahmet", "Azad", "Furkan", "Hamarat", "Taha",],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "8": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu8",
            members: ["Azad", "Enes", "Hamarat", "Taha", "Yusuf"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
        "9": {
            boxActive: false,
            boxName: "Ondördüncü harbiye koğuşu9",
            members: ["Azad", "Enes", "Hamarat", "Taha"],
            messages: [{
                type: "in",
                text: "This message automatically created for you to see the style of incoming messages. <3",
                sendingTime: new Date(Date.now()).toString(),
                sender: "Host"
            }]
        },
    },
    reducers: {
        activator(state, action) {
            return { ...state, ...action.payload }
        },
        addMessage(state, action) {
            const boxNumber = action.payload.boxNumber
            const message = action.payload.message
            state[boxNumber].messages.push(message)
        }
    }
})

export default MsgBoxesSlice