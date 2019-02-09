import * as actionTypes from '../actions/actions';
const initialState ={
    results:[],
}

const reducer = (state=initialState, action) =>{
    switch(action.type)
    {
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                // Concant update array immutable way. don't use push()
                results: state.results.concat({id: new Date(), value: action.result})
            }

        case actionTypes.DELETE_RESULT:
        const id=2;
        //state.results.splice(id,1); It's not immutable
        //const newArray = [...state.results]; // It will copy the object from array as reference, which is again not immutalbe way of updating array.

        const updatedArray = state.results.filter(result => result.id !== action.resultElId);

        return {
            ...state,
            results: updatedArray
        }
    }
    return state;
}

export default reducer;