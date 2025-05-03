import { useState } from 'react'
import './App.css'

function App() {

 const[counter,setCounter] = useState(6)
  //let counter =15
  const addValue = ()=>{
    if(counter < 20)
      {
        setCounter(counter + 1);

      }
   // counter = counter + 1
   // console.log("clicked",counter)
    
  };
  const removeValue = ()=>{
    if(counter > 0)
      { 
        setCounter(counter -1);

      }
     
    // console.log("chinmoy",counter)
  };

  return (
    <>
      <h1>Chinmoy</h1>
      <h2>counter value:{counter}</h2>
     <button onClick={addValue}>Add Value </button> 
     <br />
     <button onClick={removeValue}>new value</button>
     <p>Footer:{counter}</p>
    </>
  )
}

export default App
