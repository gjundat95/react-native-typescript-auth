import { combineReducers } from "redux";
import StartScreenReducer from "./start-screen/start-screen.reducer";

export default combineReducers({
    startState: StartScreenReducer,
});
