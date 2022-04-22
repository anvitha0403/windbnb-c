import React, { useState } from 'react'
import styled from 'styled-components'
const Counters = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin: 3px;
  font-size: 1.5rem;
  color:#333;
  align-items: center;
  & > * {
      
      padding:10px;
  }
  & > .sym {
    width: 20px;
    height: 20px;
    display: flex;
    cursor:pointer;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: rgba(235, 87, 87, 0.9);
  }
`;
export default function Counter({parent}) {

    const [count, setCount] = useState(0);
    return (
        <Counters>
           
        <div
          className="sym"
          onClick={() => {
            setCount((prev) => prev - 1);
            parent(-1);
          }}
        >
          -
        </div>
        <div>{count}</div>
        <div
          className="sym"
          onClick={() => {
            setCount((prev) => prev + 1);
            parent(1);
          }}
        >
          +
        </div>
      </Counters>
    );
}
