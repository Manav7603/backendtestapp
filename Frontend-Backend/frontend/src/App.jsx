import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const [jokes,setjokes]=useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <div>
      <h1>Lets connect</h1>
      <p>JOKES: {jokes.length}</p>
    

      {
        jokes.map((joke,index)=> (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
            </div>
        ))
      }

      </div>
      
    </>
  )
}

export default App
