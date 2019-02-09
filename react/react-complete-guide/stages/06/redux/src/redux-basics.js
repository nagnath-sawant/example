// Store

//Reducer 

//Dispatching Action

//Subscription

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter:0
}

// Create Reducer, using initial state
const rootReducer = (state=initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter +1
        }
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}; 

// Create store using reducer
const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() =>{
    console.log("Subscription:", store.getState());
});

// Dispatch Action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value:10});

console.log(store.getState());

//Subscription