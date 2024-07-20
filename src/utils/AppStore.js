import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
const appStore = configureStore({
    reducer:{
        name : userReducer
    },
});

export default appStore;