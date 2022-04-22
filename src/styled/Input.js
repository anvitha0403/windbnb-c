import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Location from './Location'
import Guests from './Guests'
const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:20px;
  padding-bottom:30px;

`;
const Input1 = styled.div`
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #333333;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor:pointer;
  border-radius: 16px;

  border-radius: 16px;
  & > input {
    border: none;
    outline: none;
  }
  & > p {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 800;
    font-size: 9px;
    line-height: 11px;
    text-transform: uppercase;
  }

  &:focus-within {
    border: 2px solid #eb5757;
    box-shadow: 0 0 10px;
  }
`;



const SearchBox = styled.div`
  display: flex;
  justify-content:space-around;
  
`;
const Button = styled.div`
  width: 127px;
  height: 48px;
 
color:white;
line-height:48px;
text-align:center;
cursor:pointer;
  background: #eb5757;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export default function Input({state,setState,setDisplay}) {
  
    const [slide, setSlide] = useState(1)
   
 
    return (
      <>
        <SearchContainer>
          <Input1>
            <p>Location</p>
            <input type="text" id="a1" onClick={() => setSlide(1)} value={state.place} readOnly />
          </Input1>
          <Input1>
            <p>total</p>
            <input type="text" id="a1" onClick={() => setSlide(2)} value={ state.guests} readOnly/>
          </Input1>
          <Button onClick={() => {

            setDisplay("none")
          }}>search</Button>
        </SearchContainer>
       
        <div>
          {slide == 1 && <Location parent={setState} />}
          {slide == 2 && <Guests parent={setState} />}
        </div>
      </>
    );
}
