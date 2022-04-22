import React from 'react'
import styled from "styled-components"
import img from "../logo.svg"
const Header = styled.div`
  width: 100%;
 cursor:pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap:10px;
   
  }
  &>img{
     width:10rem;
  }
  &>*{
    font-size:12px;
      
  }
`;

const Search = styled.div`
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  font-size: 14px;
  color: #333;
  display: flex;
  text-align: center;
  justify-content: start;
  align-items: center;
  & > * {
    flex: 1;
    padding: 10px;
  }
 
`;
export default function Header1({state,setState,display}) {
  return (
    <Header>
      <img src={img} alt="" />
      <Search onClick={()=>{display("block")}}
      >
              <div  id="small-location">
                  {state.place}
        </div>
        <div >{state.guests} guests</div>
        <div >
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </Search>
    </Header>
  );
}
