import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import index from './pages/index'
import chat from './pages/index/chat'
import Bottom from './pages/bottom'
import mailList from './pages/mailList'
import friend from './pages/friend'
import my from './pages/my'

function App() {
  return (
    <BrowserRouter>
     <Route path="/" exact component={index} />
      <Route path="/index" exact component={index} />
      <Route path="/mailList"  component={mailList} />
      <Route path="/friend"  component={friend} />
      <Route path="/my"  component={my} />
      <Route path="/chat" exact component={chat} />
      <Bottom />
    </BrowserRouter>
  );
}

export default App;
