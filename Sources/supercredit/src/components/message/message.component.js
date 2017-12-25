import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text,
} from 'react-native';

import HeaderComoponent from '../../shared/components/header/header.component';

export class MessageComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComoponent navigation={this.props.navigation}/>
        <Text> Message Component </Text>
      </View>
    );
  }
}

export default MessageComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
