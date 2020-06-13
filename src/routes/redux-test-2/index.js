import React from 'react';
//import { createStore } from 'redux';
import { configureStore } from 'redux-starter-kit'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};

//let store = createStore(counter)

const store = configureStore({
  reducer: counter
})

store.subscribe(() => console.log(store.getState()))



class ReduxRoute2 extends React.Component {
  constructor(props) {
    super(props)
  }

  // counter(state = 0, action) {
  //   switch (action.type) {
  //     case 'INCREMENT':
  //       return state + 1
  //     case 'DECREMENT':
  //       return state - 1
  //     default:
  //       return state
  //   }
  // };
  
  // let store = createStore(counter)

  // // store.subscribe(() => console.log(store.getState()))

  // store.dispatch({ type: 'INCREMENT' })

  // store.dispatch({ type: 'INCREMENT' })

  // store.dispatch({ type: 'DECREMENT' })



  handleIncrementClick() {
    console.log('Clicked handleIncrementClick()');
    store.dispatch({ type: 'INCREMENT' })
  }  
  
  handleDecrementClick() {
    console.log('Clicked handleDecrementClick()');
    store.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return(
      <div id="redux-test">
        <div>REDUX TEST 2</div>

        <button id="increment" onClick={this.handleIncrementClick}>+1</button>
        <button id="decrement" onClick={this.handleDecrementClick}>-1</button>
      </div>
    )
  }
};

export default ReduxRoute2;
