import * as React from "react";
import { Provider } from "react-redux";
import Stores from "./stores/super-credit.store";

import StartComponent from "./components/start.component";

export default class AppComponent extends React.Component<void, void> {
  public render() {
    return (
      <Provider store={Stores}>
        <StartComponent/>
      </Provider>
    );
  }
}
