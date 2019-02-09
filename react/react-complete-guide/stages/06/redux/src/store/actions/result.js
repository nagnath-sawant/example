import * as actionTypes from './actionTypes';

export const saveResult = (res) =>{
    //const updatedResult = res *2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
} 

export const storeResult = (res) =>{
    return (dispatch, getState) =>{
        //const counter = getState().ctr.counter
        //console.log('Old Counter:', counter);
        setTimeout(() => {dispatch(saveResult(res))},2000)
    }
}

export const deleteResult = (id) =>{
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId : id
    }
}