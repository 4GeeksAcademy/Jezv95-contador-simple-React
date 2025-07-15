import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'


// components
import Home from './components/Home';
import SecCounter from './components/SecCounter';
 
let seconds = 0

setInterval(() =>{

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <SecCounter sec={seconds} />
  </React.StrictMode>,
)
seconds++
},1000);