// import { combineReducers } from "redux";
// import { applyMiddleware, legacy_createStore } from "redux";
// import count from './reducerSlices/countSlice';
// import { thunk } from "redux-thunk";

// const rootReducers = combineReducers({
//     count,
// })

// const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import count from "./reducerSlices/countSlice";
import nickname from "./reducerSlices/nicknameSlice";
import users from "./reducerSlices/userSlice";

const store = configureStore({
    reducer: {
        count,
        nickname,
        users,
    }
});

export default store;