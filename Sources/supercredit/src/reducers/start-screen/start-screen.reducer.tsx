import StartScreenType from '../../actions/start-screen/start-screen.type';

const startScreenState = {
    isSplash: true,
    isLogin: false,
    isHome: false,
};

export default (state: any = startScreenState, actions: any) => {
    switch (actions.type) {
        case StartScreenType.SET_SHOW_SPLASH :
            return { ...state, isSplash: actions.isSplash };
        case StartScreenType.SET_SHOW_LOGIN :
            return { ...state, isLogin: actions.isLogin };
        case StartScreenType.SET_SHOW_HOME :
            return { ...state, isHome: actions.isHome };
        default:
            return state;
    }
};
