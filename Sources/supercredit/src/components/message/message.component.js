import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text,
} from 'react-native';

export class MessageComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Message Component </Text>
      </View>
    );
  }
}

export default MessageComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
