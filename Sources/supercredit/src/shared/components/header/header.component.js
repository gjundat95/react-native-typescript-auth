import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text, 
  StatusBar, Platform,
} from 'react-native';
import Colors from '../../constants/color/colors.constant';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.status_bar, { backgroundColor }]}>
    <StatusBar
      backgroundColor={backgroundColor} {...props}
    />
  </View>
);

class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={Colors.blue_lighter} barStyle="light-content"/>
        <View style={styles.app_bar}>
          <Icon.Button 
            onPress={this._onClickButtonBar}
            style={{ marginLeft: 5 }} 
            name="bars" size={20} 
            backgroundColor={'transparent'}
            color={Colors.white}/>
          <Text style={styles.title_text}>Home Component</Text>
        </View>
      </View>
    );
  }

  _onClickButtonBar = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

}

HeaderComponent.PropTypes = {

};

HeaderComponent.defaultProps = {

};

export default HeaderComponent;

const StatusBar_Height = Platform.OS === 'ios' ? 20 : 0;
const AppBar_Height = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
  },
  status_bar: {
    height: StatusBar_Height,
  },
  app_bar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: AppBar_Height,
    backgroundColor: Colors.blue,
  },
  title_text: {
    color: Colors.white,
    fontSize: 15,
  },
});


