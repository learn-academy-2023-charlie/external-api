import React, {useState} from "react";
import mockNasaData from "./mockNasaData";

const App = () => {

  const getIP = () => {
    console.log("Aloha, the getIP function is working")
  }

  return(
    <>
      <h1>External API</h1>
      <button onClick={getIP}>Click to see your IP info</button>
    </>
  )
}

export default App