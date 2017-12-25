import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { setShowLogin, setShowHome } from '../../actions/start-screen/start-screen.action';

import Icon from 'react-native-vector-icons/FontAwesome';


class LoginComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view_center}>
          <Icon.Button
            onPress={this._onPressLoginFB}
            name="facebook"
            backgroundColor="#3b5998">
            <Text style={{ fontFamily: 'Arial', fontSize: 15, color: 'white' }}>Login with Facebook</Text>
          </Icon.Button>
          <Icon.Button
            onPress={this._onPressLoginFB}
            name="google"
            backgroundColor="#ff0000">
            <Text style={{ fontFamily: 'Arial', fontSize: 15, color: 'white' }}>Login with Facebook</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }

  _onPressLoginFB = () => {
    this.props.setShowLogin(false);
    this.props.setShowHome(true);
  }

}

export default connect(
  state => {
    return {

    };
  },
  dispatch => {
    return {
      setShowLogin: (isLogin) => dispatch(setShowLogin(isLogin)),
      setShowHome: (isHome) => dispatch(setShowHome(isHome)),
    };
  },
)(LoginComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
