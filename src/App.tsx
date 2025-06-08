import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [text, setText] = useState("")
  useEffect(()=>{
    const config = {
    method: 'GET',
    url: 'https://script.google.com/macros/s/AKfycbx2gKw2Rh86TXHV_iut4nVIWsc8p1A7NFwhhVqO6AokGa5og-pHOS9tbFMhkXhvbE12fw/exec'
  }
  axios(config).then((res)=>{
    console.log("test");
    console.log(res.data[1][0]);
    setText(res.data[1][0])
  })


  }, []);

  
  return (
    <div>
      <h1>hello world!</h1>
      <p>{text}</p>
    </div>
  )
}

export default App
