import React, {useState} from "react";
import mockNasaData from "./mockNasaData";

const App = () => {

  const [nasaData, setNasaData] = useState(mockNasaData)

  const apiKey = process.env.REACT_APP_NASA_API_KEY

  const displayPhotos = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${apiKey}`)
    .then(response => response.json())
    .then(payload => setNasaData(payload))
    .catch(error => console.log(error))
  }

  return(
    <>
      <h1>NASA API</h1>
      <button onClick={displayPhotos}>
        Click to see images from NASA spacecraft
      </button>
      {nasaData && 
        <img src={nasaData.photos[0].img_src} alt={`image provided by {nasaData.photos[0].rover.name}`}/>
      }
    </>
  )
}

export default App