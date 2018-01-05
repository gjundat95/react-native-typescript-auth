import * as React from "react";
import { connect } from "react-redux";
import HomeComponent from "./home/home.component";
import LoginComponent from "./login/login.component";
import SplashScreenComponent from "./start-screen/splash-screen/splash-screen.component";

class StartComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    if (this.props.isSplash) {
      return <SplashScreenComponent/>;
    }
    if (this.props.isLogin) {
      return <LoginComponent/>;
    }
    if (this.props.isHome) {
      return <HomeComponent/>;
    }

    return <LoginComponent/>;
  }
}

export default connect(
  (state: any) => {
    return {
      isHome: state.startState.isHome,
      isLogin: state.startState.isLogin,
      isSplash: state.startState.isSplash,
    };
  },
  (dispatch: any) => {
    return {

    };
  },
)(StartComponent);
