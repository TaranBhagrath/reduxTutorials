import { useEffect, useState } from "react";
import store from "../store/store";
import {increment,decrement} from '../actions/counterActions'

const Counter = () => {
  const [getValue,setValue]= useState();
  useEffect(() => {
    updateState();
    store.subscribe(updateState);
  }, []);

  function updateState(){
    const state= store.getState();
    setValue(state);
  }


  const onIncrement=()=>{
    store.dispatch(increment());

  }

  const onDecrement= ()=>{

    store.dispatch(decrement());
  }

  return (
    <>
      <div>Counter Component</div>
      <div>{getValue}</div>
      <div>
        <button onClick={onIncrement()}> Increment</button>
      </div>
      <div>
        <button onClick={decrement()}> Decrement</button>
      </div>
    </>
  );
};

export default Counter;
