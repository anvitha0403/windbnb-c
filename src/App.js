import Container from "./styled/Container.styled"
import Header from "./styled/Header.styled"
import SearchP from "./styled/SearchP"
import styled from "styled-components"
import './App.css';
import stay from "./stays.json"
import { useEffect, useState } from "react";

const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns:1fr;
  }
`;
const Wrapper = styled.div`
width:95vw;
margin:auto;
`
function App() {
  const [places, setPlace] = useState([]);
   const [query, setQuery] = useState({
     place: "Finland",
     guests: 0,
   });
  const [display,setDisplay]=useState("none")
  useEffect(() => {
    
   
      if (query.place == "Finland") {
        setPlace(stay.stays)
      }
      else {
        const arr = query.place.split(",");
        console.log(arr);
        
       const b= stay.stays.filter(m => {
          return (m.city==arr[0]&&m.country==arr[1])
         
       })
         console.log(b);
        setPlace(b);
      }
    
  },[display])
  
 
  return (
    <div className="App">
      <Wrapper>
        <SearchP state={query} setState={setQuery} display={display} setDisplay={setDisplay} />
        <Header state={query} stgetState={setQuery} display={setDisplay}></Header>
        <Grid>
         
           {
           
        
            places.length > 0 && places.map(m => {
              console.log(m)
              return <Container place={m} />
              
            })
}
         
        
        </Grid>
      </Wrapper>
    </div>
  );
}

export default App;
