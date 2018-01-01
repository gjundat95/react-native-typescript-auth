import * as React from 'react';
import {
  StyleSheet,
  View, TouchableOpacity,
  Text, Image,
} from 'react-native';
import Colors from '../../shareds/constant/colors.constant';
import { connect } from 'react-redux';
import { setShowLogin, setShowHome } from '../../actions/start-screen/start-screen.action';

export interface LoginProps {
}

class LoginComponent extends React.Component<LoginProps, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onClickLogin}
          style={styles.button_fb_login}>
          <Image
          resizeMode='contain'
            style={styles.icon_fb_login}
            source={require('../../../../assets/img/icons/fb-transparent-icon.png')}/>
          <Text style={styles.text_fb_login}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._onClickLogin}
          style={styles.button_google_login}>
          <Image
          resizeMode='contain'
            style={styles.icon_google_login} 
            source={require('../../../../assets/img/icons/google-transparent-icon.png')}/>
          <Text style={styles.text_google_login}>Login with Google</Text>
        </TouchableOpacity>

      </View>
    );
  }

  public _onClickLogin = () => {

    setTimeout(() => {
      this.props.setShowLogin(false);
      this.props.setShowHome(true);
    }, 1000);

  };

}

export default connect(
  (state) => {
    return {

    };
  },
  (dispatch) => {
    return {
      setShowLogin: (isLogin) => dispatch(setShowLogin(isLogin)),
      setShowHome: (isHome) => dispatch(setShowHome(isHome)),
    };
  }
)(LoginComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button_fb_login: {
    flexDirection: "row",
    backgroundColor: Colors.fb_login_button,
    width: "90%",
    height: 50,
    alignSelf: "center",
    alignItems: "center",
  },
  icon_fb_login: {
    width: 30,
    height: 30,
  },
  text_fb_login: {
    flex: 1,
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 18,
  },
  button_google_login: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: Colors.google_login_background,
    width: "90%",
    height: 50,
    alignSelf: "center",
    alignItems: "center",
  },
  icon_google_login: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  text_google_login: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
