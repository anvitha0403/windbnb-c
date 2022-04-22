import React from 'react'
import stays from "../stays.json"
import styled from "styled-components"
import {useState,useEffect} from 'react'



const Loc = styled.div`

  
    display: flex;
    height: 20px;
padding:20px;
display: flex;
gap:10px;
    cursor: pointer;
    align-items: center;
  `;
   

       
    
        
    

export default function Location({ parent }) {
  const [stayd, setStayd] = useState([]);
  var stay = stays.stays;
   
  useEffect(() => {
    const s = new Set();
    stay.map((m) => {
      var place = `${m.city},${m.country}`;
      if (s.has(place) === false) {
        s.add(place);
        
      }
      return m;
    });
    const arr = Array.from(s);
    setStayd(arr);
  


    

  }, [])
  
 
  

  return (
    <div>
   
      {
        stayd.map(m => { 
          return (
            <Loc key={m} onClick={(e) => parent(prev => {
              console.log(m)
              return {
                ...prev,
                place: m,
              };
             })}>
             <i class="fa-solid fa-location-dot"></i>
              <div >{m}</div>
            </Loc>
          )
        })
       
       
         
          
           
          
         
             
           
            
          
      }
       </div>
      )
      
        
   
  

}
