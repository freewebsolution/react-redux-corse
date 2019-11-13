import React from 'react';
import Home from './home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTemplate from './mainLayout/template/mainTemplate';
import '../css/style.css'
function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
