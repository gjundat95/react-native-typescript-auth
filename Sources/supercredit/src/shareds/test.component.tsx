import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface TestProps {
}

export interface TestState {
}

export default class TestComponent extends React.Component<TestProps, TestState> {
  constructor(props: TestProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>
           Test Component
         </Text>
      </View>
    );
  }
}
