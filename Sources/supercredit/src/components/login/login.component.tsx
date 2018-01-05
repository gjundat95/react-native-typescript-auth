import * as React from "react";
import {
  StyleSheet,
  View, TouchableOpacity,
  Text, Image,
  Linking,
} from "react-native";
import Colors from "../../shareds/constant/colors.constant";
import { connect } from "react-redux";
import { setShowLogin, setShowHome } from "../../actions/start-screen/start-screen.action";

export interface LoginProps {
}

class LoginComponent extends React.Component<LoginProps, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    Linking.addEventListener("url", (event) => {
      // var facebookToken = event.url.split('#')[1].split('=')[1].split('&')[0];
      console.warn(event);
    });
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._facebookAuth}
          style={styles.button_fb_login}>
          <Image
          resizeMode="contain"
            style={styles.icon_fb_login}
            source={require("../../../../assets/img/icons/fb-transparent-icon.png")}/>
          <Text style={styles.text_fb_login}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._googleAuth}
          style={styles.button_google_login}>
          <Image
          resizeMode="contain"
            style={styles.icon_google_login}
            source={require("../../../../assets/img/icons/google-transparent-icon.png")}/>
          <Text style={styles.text_google_login}>Login with Google</Text>
        </TouchableOpacity>

      </View>
    );
  }

  private _facebookAuth = () => {
    Linking.openURL([
      "https://graph.facebook.com/oauth/authorize",
      "?response_type=token",
      "&scope=email",
      "&client_id=" + "978659365579905",
      "&redirect_uri=fb978659365579905://authorize",
    ].join(""));
  }

  private _googleAuth() {
    Linking.openURL([
      "https://accounts.google.com/o/oauth2/v2/auth",
      "?client_id=920496582675-nh5c20bgl93biotq2dlr9jeqp5ulp9d4.apps.googleusercontent.com",
      "&response_type=code",
      "&scope=openid%20email",
      "&redirect_uri=com.supercredit:/oauth2redirect",
      "&state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2-login-demo.example.com/myHome",
      "&nonce=0394852-3190485-2490358",
    ].join(""));
  }

  public _onClickLogin = () => {
    setTimeout(() => {
      this.props.setShowLogin(false);
      this.props.setShowHome(true);
    }, 1000);

  }

}

export default connect(
  (state) => {
    return {

    };
  },
  (dispatch) => {
    return {
      setShowLogin: (isLogin: any) => dispatch(setShowLogin(isLogin)),
      setShowHome: (isHome: any) => dispatch(setShowHome(isHome)),
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
