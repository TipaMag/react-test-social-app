import React from 'react'
import { Route } from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/News' component={News} />
        <Route path='/Music' component={Music} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/Settings' component={Settings} />
      </div>
    </div>
  )
}

export default App
