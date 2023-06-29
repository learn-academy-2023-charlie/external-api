## External API 6/29/23 Charlie
- Application Programming Interface (API) 
- fetch: allows for an asynchronous method to request data from the API
- promise: 
  - pending: action has not occurred yet
  - fulfilled: successful response, status code and payload
  - rejected: failure, status code and error message

- API key: a way to track who is consuming the API

## matching fetch happen
- locate an API website
  - website: https://api.chucknorris.io/
- read documentation to acquire the data you want from the API
  - endpoint that I am using is the random joke
    - https://api.chucknorris.io/jokes/random
```js
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => console.log(response.json()))
```

- conditional rendering
```js
// with logical operator
{chuckFacts && }

// with the ternary ?
chuckFacts?
```

## API key
### .env
- create `.env` 
- store the API key in a variable using the following naming convention `REACT_APP_NASA_API_KEY`
- place `.env` in the .gitignore
### App.js
- reference the api key in a variable using the process.env.REACT_APP_NASA_API_KEY

- website https://api.nasa.gov/

- make sure you are referencing the correct key for the data you want
```js
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
```