import logo from './logo.svg';
import React, {useEffect} from 'react'
import './App.css';

function App() {

  useEffect(() => {
    //const url = 'ws://localhost:3019/echo/'
    const url='wss://adrian-mergegaming.sandbox.env.zone/ws'
    const exampleSocket = new WebSocket(url, 'protol1');

    exampleSocket.onopen = function() {
      console.log('open')
    }
    exampleSocket.onerror = function(e) {
      console.log('error', e)
    }

    exampleSocket.onclose = function(e) {
      console.log('close', e)
    }
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
