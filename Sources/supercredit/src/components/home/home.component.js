import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text, Button,
} from 'react-native';

import HeaderComponent from '../../shared/components/header/header.component';
import Colors from '../../shared/constants/color/colors.constant';

export class HomeComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent navigation={this.props.navigation}/>  
        <Text> Home Component </Text>
        <Button 
          onPress={this._onClick}
          title="Learn More"/>
      </View>
    );
  }

  _onClick = () => {
    console.log(this.props);
    this.props.navigation.navigate('Transfer');
  }

}

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: Colors.blue_medium,
  },
});

