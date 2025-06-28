import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./reducer";

const store = configureStore({
    reducer: {
        color: colorReducer // color로 받는다!!!!!!!
        count: count
    }
})
export default store;
