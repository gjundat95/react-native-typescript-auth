import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerNavigator } from 'react-navigation';

import MessageComponent from '../../components/message/message.component';
import TransactionComponent from '../../components/transaction/transaction.component';
import HomeComponent from '../../components/home/home.component';

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeComponent,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Transaction: {
    screen: TransactionComponent,
    navigationOptions: {
      drawerLabel: 'Transaction',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Message: {
    screen: MessageComponent,
    navigationOptions: {
      drawerLabel: 'Message',
      drawerIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={20}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootDrawer;
