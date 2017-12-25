import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text, 
} from 'react-native';

class TransferComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> TransferComponent </Text>
      </View>
    );
  }
}

export default TransferComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
