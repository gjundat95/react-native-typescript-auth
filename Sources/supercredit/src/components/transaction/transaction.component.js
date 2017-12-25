import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text,
} from 'react-native';

export class TransactionComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Transaction Component </Text>
      </View>
    );
  }
}

export default TransactionComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
});
