import React from 'react';
import { createStore, configureStore, createAction, createReducer, createSlice } from 'redux-starter-kit'

import { loadState, saveState } from '../../services/localStorage'

const persistedState = loadState()

//const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

// const store = (createStore)(MainReducer, persistedState)

// store.subscribe(() => {
//   saveState(store.getState())
// })


const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

const store = configureStore({
  reducer: counterSlice.reducer, persistedState
})

store.subscribe(() => {
  saveState(store.getState())
})

console.log('Initial Redux state', store.getState())


class ReduxRoute extends React.Component {
  constructor(props) {
    super(props)

    console.log('constructor props: ', props);
  }

  handleIncrementClick() {
    store.subscribe(() => {
      saveState(store.getState())
    })
    store.dispatch(increment())

    console.log('Updated Redux state', store.getState())
  }  
  
  handleDecrementClick() {
    store.subscribe(() => {
      saveState(store.getState())
    })
    store.dispatch(decrement())

    console.log('Updated Redux state', store.getState())
  }

  render() {
    return(
      <div id="redux-test">
        <div>REDUX TEST</div>

        <button id="increment" onClick={this.handleIncrementClick}>+1</button>
        <button id="decrement" onClick={this.handleDecrementClick}>-1</button>
      </div>
    )
  }
};

export default ReduxRoute;
