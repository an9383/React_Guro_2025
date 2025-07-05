// store/actions.js
import axios from 'axios';
export const fetchData = (target) => async (dispatch) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axios.get(`http://localhost:8080/${target}`);
            dispatch({ type: "SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({ type: "FAILURE", error });
        }
};

export const fetchInfoPost = (obj) => async (dispatch) => {
        dispatch({ type: "LOADING" });
        try {
            const url = "http://localhost:8080/users";
            const response = await axios.post(url, obj);
            dispatch({type: "SUCCESS", data: response.data})
        } catch (error) {
           dispatch({ type: "FAILURE", error });
        }
    };

export const fetchProductPost = (obj) => async (dispatch) => {
        dispatch({ type: "LOADING" });
        try {
            const url = "http://localhost:8080/products";
            const response = await axios.post(url, obj);
            dispatch({type: "SUCCESS", data: response.data})
        } catch (error) {
           dispatch({ type: "FAILURE", error });
        }
    };



const initialViewState = {
    loading: false,
    data: [],
    error: null,
};

const viewReducer = (state = initialViewState, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true, error: null };
        case "SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "FAILURE":
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default viewReducer;


