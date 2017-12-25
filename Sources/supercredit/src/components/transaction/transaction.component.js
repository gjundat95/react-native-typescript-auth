import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text,
} from 'react-native';

import HeaderComoponent from '../../shared/components/header/header.component';


export class TransactionComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComoponent navigation={this.props.navigation}/>
        <Text> Transaction Component </Text>
      </View>
    );
  }
}

export default TransactionComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },  
});
