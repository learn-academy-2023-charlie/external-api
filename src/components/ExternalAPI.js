// import React, {useState} from "react";

// const App = () => {

//   const [chuckFacts, setChuckFacts] = useState(null)

//   const displayFacts = () => {
//     fetch("https://api.chucknorris.io/jokes/random")
//     .then(response => response.json())
//     .then(payload => setChuckFacts(payload))
//     .catch(error => console.log(error))
//   }

//   return(
//     <>
//       <h1>External API</h1>
//       <h2>Guess what I heard about Chuck Norris aka Walker Texas Ranger</h2>
//       <button onClick={displayFacts}>Click for facts</button>
//       <br />
//       {chuckFacts?.value}
//     </>
//   )
// }

// export default App