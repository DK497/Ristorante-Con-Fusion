import React, { Component } from 'react'
import Maincom from './components/Maincom'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configstore'

const store=ConfigureStore()
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
           <Maincom/>
          </div>
        </BrowserRouter>
      </Provider>
      
    )
  }
}

export default App
