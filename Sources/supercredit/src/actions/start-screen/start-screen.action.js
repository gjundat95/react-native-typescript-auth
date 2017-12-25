import StartScreenTypes from './start-screen.type';

export const setShowSplash = (isShowPlash) => {
  return {
    type: StartScreenTypes.SET_SHOW_SPLASH,
    isShowPlash: isShowPlash,
  };
};

export const setShowLogin = (isLogin) => {
  return {
    type: StartScreenTypes.SET_SHOW_LOGIN,
    isLogin: isLogin,
  };
};

export const setShowHome = (isShowHome) => {
  return {
    type: StartScreenTypes.SET_SHOW_HOME,
    isShowHome: isShowHome,
  };
};