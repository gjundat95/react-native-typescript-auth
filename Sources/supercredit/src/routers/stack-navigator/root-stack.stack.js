import { StackNavigator } from "react-navigation";
import RootDrawer from '../drawer-navigator/drawer-navigator.drawer';
import TransferComponent from "../../components/transfer/transfer.component";

const RootStack = StackNavigator({
  RootDrawer: {
    screen: RootDrawer,
    navigationOptions: {
      title: 'Root Drawer',
      header: null,
    },
  },
  Transfer: {
    screen: TransferComponent,
    navigationOptions: {
      title: 'Transfer',
      header: null,
    },
  },
});

export default RootStack;