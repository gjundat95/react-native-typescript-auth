import StartScreenTypes from '../../actions/start-screen/start-screen.type';

let startScreenState = {
  isLogin: false,
  isShowSplash: true,
  isShowHome: false,
};

export const StartScreenReducer = (state = startScreenState, action) => {
  switch (action.type) {
    case StartScreenTypes.SET_SHOW_SPLASH :
      return { ...state, isShowSplash: action.isShowSplash };
    case StartScreenTypes.SET_SHOW_LOGIN :
      return { ...state, isLogin: action.isLogin };
    case StartScreenTypes.SET_SHOW_HOME :
      return { ...state, isShowHome: action.isShowHome };
    default :
      return state;
  }
};
