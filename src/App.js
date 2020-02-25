import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import {increment, decrement,signin,signout} from './actions';


function App() {
  const counter = useSelector( state => state.counterReducer);
  const logged = useSelector( state => state.loggedReducer);
  const dispatchEvent = useDispatch()
  return (
    <div className="App">
      
      { logged ? 
      <React.Fragment>
      <h6>counter {counter}</h6>
      <button onClick={() =>dispatchEvent(increment())}> + </button>
      <button onClick={() =>dispatchEvent(decrement())}> - </button>
      <button onClick={() =>dispatchEvent(signout())}> SIGNOUT </button>
      </React.Fragment> :
      <button onClick={() =>dispatchEvent(signin())}> SIGNIN </button>
      }
      
     
    </div>
  );
}

export default App;
