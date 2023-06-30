## External API 6/29/23 Charlie
- Application Programming Interface (API) 
- fetch: allows for an asynchronous method to request data from the API
- promise: 
  - pending: action has not occurred yet
  - fulfilled: successful response, status code and payload
  - rejected: failure, status code and error message

- API key: a way to track who is consuming the API

## Making Fetch Happen

### API that does not require an API Key
1. locate an API website
  - website: https://api.chucknorris.io/
2. read documentation to acquire the data you want from the API
  - endpoint that I am using is the random joke
  - https://api.chucknorris.io/jokes/random
```js
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(payload => console.log(payload))
    .catch(error => console.log(error))
```
3. Assign payload as the value of the state variable
- `.then(payload => setChuckFacts(payload))`
4. Reference variable to display data on the UI 
- conditional rendering
```js
  // with logical AND operator
  {chuckFacts && }

  // with the ternary operator ?
  chuckFacts?
```

### API key

### .env configuration
- Create `.env` file at root of application
- Store the API key in a variable using the following naming convention `REACT_APP_NASA_API_KEY`
- Place `.env` in the .gitignore

### App.js
- Reference the api key in a variable using `process.env.REACT_APP_NASA_API_KEY`

- website: https://api.nasa.gov/
- Generate account to get API key
- Make sure you are referencing the correct key for the data you want from the API
```js
  return(
    <>
      <h1>NASA API</h1>
      <button onClick={displayPhotos}>
        Click to see images from NASA spacecraft
      </button>
      {nasaData && 
        <img 
          src={nasaData.photos[0].img_src} 
          alt={`image provided by {nasaData.photos[0].rover.name}`}
        />
      }
    </>
  )
```

### Reference API within the endpoint
- `"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY"`
- Replace DEMO_KEY with the variable storing the api key
- ensure the .env is stored within the .gitignore
- ensure the API key is not stored in the README
