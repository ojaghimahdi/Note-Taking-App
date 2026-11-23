import { createSlice } from "@reduxjs/toolkit";

const NoteTypeBox = createSlice({
    name: "openTheBox",

    initialState: {
        isOpen: false,
        SelectOption: "Note Type",
        selectOptions: [
            { url: "/notes", name: "Job", value: "job", color: "blue" },
            { url: "/notes", name: "Home", value: "home", color: "green" },
            { url: "/notes", name: "Others", value: "others", color: "red" }
        ]
    },

    reducers: {
        OpenTheBox: (state) => {
            state.isOpen = !state.isOpen
        },

        CloseTheBox: (state) => {
            state.isOpen = false
        },
        selectOptions: (state, action) => {
            state.selectOptions = action.payload
        },
        SelectedOption: (state, action) => {
            state.SelectOption = action.payload
            state.isOpen = false
        }
    }
})

export const { OpenTheBox, CloseTheBox, SelectedOption } = NoteTypeBox.actions
export default NoteTypeBox.reducer

export function optionUrl(option: { url: string; value: string }) {
    const [path, query = ""] = option.url.split("?")
    const params = new URLSearchParams(query)
    params.set("option", option.value)
    return `${path}?${params.toString()}`
}