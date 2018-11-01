const submitReducer = (state = {
     value : "",
     list : []
    },action)=>{
    switch(action.type){
        case "ON_CHANGE" :
        state = {
            ...state,
            value : action.payload.value
        };
        break;
        
        case "ON_SUBMIT":
        state = {
            ...state,
            list : [...state.list , action.payload.pushToList]
        };
        break;
    }
    return state;
}

export default submitReducer;