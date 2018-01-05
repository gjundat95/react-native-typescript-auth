import * as React from "react";
import {
  StyleSheet, Text,
  View,
} from "react-native";

export interface HomeProps {
}

export default class HomeComponent extends React.Component<HomeProps, any> {

  public render() {
    return (
      <View style={styles.container}>
         <Text>
           Home Component
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
