import React,{useEffect,useState} from 'react'
import Counter from "./Counter"
import styled from "styled-components"

export default function Guests({parent}) {
  
    const setTotal1 = ( c ) => {
       
        parent(prev => ( ({
            ...prev, guests: prev.guests + c
        })))
        
    }
  return (
    <div>
      
          <div className="age">Adults
              <p>13 and above</p>
          </div>
          <div className=""></div>
      <Counter parent={setTotal1} key={1}></Counter>
          <div className="age">Child
          <p>12 and below</p></div>
      <Counter parent={setTotal1} key={2}></Counter>
    </div>
  );
}
