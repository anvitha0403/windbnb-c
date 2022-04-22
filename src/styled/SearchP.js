import React from 'react'
import Input from './Input'

import styled from 'styled-components'

const SearchBig = styled.div`
  position: absolute;
  padding: 20px;
  top: 0;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;


  z-index: 999;

  display: ${({ display }) => display};
  width: 95vw;
  height: 50vh;
  margin: auto;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color: white;
`;
export default function SearchP({state,setState,display,setDisplay}) {
  return (
    
      <SearchBig display={display}>
        <Input
          state={state}
          setState={setState}
          setDisplay={setDisplay}
        ></Input>
      </SearchBig>
    
  );
}
