import React, { useReducer } from "react";


const img0 = require('./images/1.jpg');
const img1 = require('./images/2.jpg');
const img2 = require('./images/3.jpg');
const img3 = require('./images/4.jpg');

const initialState = {index: 0, imageList: [img0, img1, img2, img3], message: ''};

function reducer(state, action) {
    const arrayLength = state.imageList.length;
    const stateIndex = state.index;
    switch (action.type) {
      case 'increment':
        return {...state, index: stateIndex < arrayLength-1 ? stateIndex + 1 : stateIndex, 
        message: stateIndex < arrayLength -1 ? '+' : '<'};
      case 'decrement':
      return {...state, index: stateIndex > 0 ? stateIndex - 1 : stateIndex, 
        message: stateIndex < arrayLength -1  ? '>' : '+'};
      default:
        throw new Error();
    }
  }

  export default function Gallery () {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onClickForward = () => {
        dispatch({type:'increment'})
      }
    
      const onClickBack = () => {
        dispatch({type:'decrement'})
      }

      return (
        <div>
        <img src={state.imageList[state.index]} alt="" /><br />
        <button onClick={onClickBack}>Back</button>
        <button onClick={onClickForward}>Forward</button>
        <div>{state.message}</div>
      </div>
      )
  }
  //https://medium.com/@gianpaul.r/rendering-new-images-onclick-in-react-7cf0fee2184f
