import React from 'react'
import styled from "styled-components"
const Img = styled.div`
  border-radius: 24px;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    transition: 0.5s all ease-in-out;
    background-color: #d3d3d3;
  }
  & > img:hover {
    transform: scale(1.5);
  }
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px;
  
  & >*{
      padding:5px;
  }
  & .desc {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
  & .beds {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    /* Gray 3 */

    color: #828282;
  }
  & .super-host {
    border: 1px solid #4f4f4f;
    box-sizing: border-box;
    border-radius: 12px;
    color: #4f4f4f;
    padding:2px;
  }
`;
export default function Container({ place }) {
  console.log(place+"dfdfdfdf")
  return (
    <Container1>
      <Img>
        <img
          src={place.photo}
          alt=""
        />
      </Img>
          <div className="flex-sb"><>
        {
          place.superHost?<div className="super-host">super-host</div>:<></>}
        <div className="beds">{ place.type}</div>
              </>
        <div className="rating">
          <i className="fa-solid fa-star"></i>
          {place.rating}
        </div>
      </div>
      <div className="desc">{ place.title}</div>
    </Container1>
  );
}
