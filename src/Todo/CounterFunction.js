import React, { useState } from "react";


export default function CounterFunction () {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setCounter(counter-1)}>-</button>
            <button onClick={() => setCounter(0)}>reset</button>
        </div>
    )
}

// function CounterFunction() {
//   var _useState = useState(0),
//       _useState2 = _slicedToArray(_useState, 2),
//       counter = _useState2[0],
//       setCounter = _useState2[1];

//   return React.createElement("div", null, React.createElement("p", null, counter), React.createElement("button", {
//     onClick: function onClick() {
//       return setCounter(counter + 1);
//     }
//   }, "+"), React.createElement("button", {
//     onClick: function onClick() {
//       return setCounter(counter - 1);
//     }
//   }, "-"), React.createElement("button", {
//     onClick: function onClick() {
//       return setCounter(0);
//     }
//   }, "reset"));
// }
