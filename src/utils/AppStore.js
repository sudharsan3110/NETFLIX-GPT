import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
import movieSlice from "./movieSlice";
import GPTreducer from './GptSlice'
import configReducer from './configSlice'
const appStore = configureStore({
    reducer:{
        name : userReducer,
        movies :movieSlice,
        gpt:GPTreducer,
        config: configReducer,
    },
});

export default appStore;