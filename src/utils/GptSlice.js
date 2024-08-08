import {  createSlice } from "@reduxjs/toolkit"

const GptSlice = createSlice(
    {
        name:"gpt",
        initialState: {
            showGptSearch:true,
        },
        reducers:{
            toggleGptSearchView: (state) =>{
                state.showGptSearch = !state.showGptSearch
            }
        }
    })
export const {toggleGptSearchView} = GptSlice.actions
export default GptSlice.reducer