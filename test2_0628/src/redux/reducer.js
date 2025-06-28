const initialState = {color: 'black'}

//export changeColor = (dispach)=>({type: "RED"})

const colorReducer = (state=initialState, action) => {
    switch(action.type){
        case "RED": 
            return {...state, color:'red'}
        case "BLUE":
            return {...state, color: 'blue'}

        default:
            return state;
    }
}

export default colorReducer;