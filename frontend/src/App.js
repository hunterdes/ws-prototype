import logo from './logo.svg';
import React, {useEffect, useRef, useState} from 'react'
import './App.css';

//const path = 'ws://localhost:3019'
const path = 'wss://adrian-mergegaming.sandbox.env.zone'

function App() {

  const ref = useRef();
  const [value, setValue] = useState('/echo')

  useEffect(() => {

  }, [])

  const handleSubmit = () => {
    //const url = 'ws://localhost:3019/echo/'
    const exampleSocket = new WebSocket(path + ref.current.value, 'protol1');

    exampleSocket.onopen = function() {
      console.log('open')
    }
    exampleSocket.onerror = function(e) {
      console.log('error', e)
    }

    exampleSocket.onclose = function(e) {
      console.log('close', e)
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <input ref={ref} value={value} onChange={handleChange}/>
      <button onClick={handleSubmit}>run</button>
    </div>
  );
}

export default App;
