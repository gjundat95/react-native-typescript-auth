import * as React from 'react';
import {
  View, StyleSheet,
  Text, Image,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { setShowLogin, setShowSplash } from '../../../actions/start-screen/start-screen.action';

class SplashComponent extends React.Component<void,void> {

  constructor(props: any) {
    super(props);
    setTimeout(() => {
      this.props.setShowSplash(false);
      this.props.setShowLogin(true);
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top_section}>
        </View>
        <View style={styles.bottom_section}>
          <ActivityIndicator style={styles.loading_aroud} size="large" color="#000000"/>
          <Text style={styles.loading_text}>Loading...</Text>
        </View>
      </View>
    );
  }
}

export default connect(
  state => {
    return {

    };
  },
  dispatch => {
    return {
      setShowSplash: (isLoading) => dispatch(setShowSplash(isLoading)),
      setShowLogin: (isLogin) => dispatch(setShowLogin(isLogin)),
    };
  },
)(SplashComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_section: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image_splash: {
    width: '80%',
    height: '80%',
  },
  bottom_section: {
    flex: 1,
  },
  loading_aroud: {
    paddingTop: 20,
  },
  loading_text: {
    paddingTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
