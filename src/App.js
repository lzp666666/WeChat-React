import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import index from './pages/index'
import Bottom from './pages/bottom'
import mailList from './pages/mailList'
import friend from './pages/friend'
import my from './pages/my'

function App() {
  return (
    <BrowserRouter>
      <Route path="/index" exact component={index} />
      <Route path="/mailList"  component={mailList} />
      <Route path="/friend"  component={friend} />
      <Route path="/my"  component={my} />
      <Bottom />
    </BrowserRouter>
  );
}

export default App;
