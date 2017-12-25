import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplashComponent from './start-screen/components/splash/splash.component';
import LoginComponent from './login/login.component';
import HomeComponent from './home/home.component';
import RootDrawer from '../routers/drawer-navigator/drawer-navigator.drawer';
import RootStack from '../routers/stack-navigator/root-stack.stack';



class StartComponent extends Component {
  render() {
    let { isLogin, isShowHome, isShowSplash } = this.props;
    if (isShowSplash) {
      return <SplashComponent/>;
    }
    if (isShowHome) {
      return <RootStack/>;
    }
    if (isLogin) {
      return <LoginComponent/>;
    }

    return <SplashComponent/>;

  }
}

export default connect(
  state => {
    return {
      isLogin: state.startState.isLogin,
      isShowSplash: state.startState.isShowSplash,
      isShowHome: state.startState.isShowHome,
    };
  },
  dispatch => {
    return {

    };
  },
)(StartComponent);

