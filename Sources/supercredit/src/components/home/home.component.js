import React, { Component } from 'react';
import {
  View, StyleSheet,
  Text, ScrollView,
} from 'react-native';

import HeaderComponent from '../../shared/components/header/header.component';
import Colors from '../../shared/constants/color/colors.constant';

const CellComponent = () => (
  <View style={styles.cell_content}>
    <Text>Title</Text>
  </View>
);


export class HomeComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent navigation={this.props.navigation}/>  
        <ScrollView>
          <CellComponent/>
          <CellComponent/>
          <CellComponent/>
          <CellComponent/>
          <CellComponent/>
          <CellComponent/>
        </ScrollView>
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
  },
  cell_content: {
    height: 300,
    margin: 10,
    backgroundColor: Colors.blue_lightest,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    elevation: 5,
  },
});

