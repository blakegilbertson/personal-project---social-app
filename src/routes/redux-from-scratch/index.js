import React from 'react';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};

// mocking redux store to understand whats happening - http://tinyurl.com/y3fqo782
const createStore = (reducer) => {
  let state;
  let listeners = []

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  dispatch({})

  return { getState, dispatch, subscribe}
}

const store = createStore(counterReducer)

const render = () => {
  if(document.getElementById('someEl') !== null) {
    document.getElementById('someEl').innerText = store.getState() 
  }
}

store.subscribe(render)




const ReduxFromScratchRoute = () => {

  return(
    <div id="redux-test">
      <div>REDUX FROM SCRATCH</div>
      <div id="someEl">{store.getState()}</div>

      <button onClick={() => store.dispatch({type: 'INCREMENT'})}>+1</button>
      <button onClick={() => store.dispatch({type: 'DECREMENT'})}>-1</button>
    </div>
  )
};

export default ReduxFromScratchRoute;
