import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import LoginView from 'pages/Login'
import DashBoard from 'component/DashBoard'
// const logo = require('./assets/image/logo.png')


function App() {


  console.log('%c只是个 首页路由页面', "color: white;font-size:20px; font-style: italic; background-color: red;padding: 2px")
  return (
    <Switch >
      {/* <Route path='/login' component={LoginView}></Route> */}
      <Route component={DashBoard}></Route>
    </Switch>
  )

}





export default App;
