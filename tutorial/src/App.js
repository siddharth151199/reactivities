import { configure } from 'mobx';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react-lite';
import React from 'react'
configure({
  enforceActions: true
})
const App = observer(props=> (
    <div>
    <h1>hello</h1>
    <h1>{props.appState.count}</h1>
    <button onClick={props.appState.increaseCount}>Increase</button>
    <button onClick={props.appState.decreaseCounter}>Decrease</button>
  </div>
  ))
export default App