import React, { useState } from "react";
import { Form }  from './Form';



export default function Counter () {
  const [count, updateCount] = useState(0);
    return (
      <div>
        <div>
        {count}
          <button onClick={()=> updateCount(0)}>Reset</button>
          <button onClick={() => updateCount(prevCount => prevCount + 1)}>+</button>
          <button onClick={() => updateCount( prevCount => prevCount -1)}>-</button>
      </div>
      <Form />
      </div>
    );
  }
