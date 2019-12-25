import React, { Component } from "react";
import NavBar from "component/NavBar";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import "./index.less";
import Home from "pages/Home";
import Auction from "pages/Auction";
import Mall from "pages/Mall";
import Score from "pages/Score";
import Mine from "pages/Mine";

const routes = [
  {
    path: "/home",
    com: Home
  },
  {
    path: "/auction",
    com: Auction
  },
  {
    path: "/mall",
    com: Mall
  },
  {
    path: "/score",
    com: Score
  },
  {
    path: "/mine",
    com: Mine
  }
];

@connect(
  state => ({
    base: state.base
  }),
  null
)
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { isLogin } = this.props.base;
    console.log(isLogin);
    // if (!isLogin) {
    //   this.props.history.replace({ pathname: "/login" });
    // }
  }
  render() {
    console.log(this.props.base);
    return (
      <div className="cont">
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.com}
            ></Route>
          ))}
          <Redirect from="*" to="/home"></Redirect>
        </Switch>
        <NavBar />
      </div>
    );
  }
}

export default DashBoard;
