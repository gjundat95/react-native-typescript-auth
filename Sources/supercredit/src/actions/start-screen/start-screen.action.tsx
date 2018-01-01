import StartScreenType from "./start-screen.type";

export const setShowSplash = (isSplash: boolean) => {
    return {
        type: StartScreenType.SET_SHOW_SPLASH,
        isSplash: isSplash,
    };
}

export const setShowLogin = (isLogin: boolean) => {
    return {
        type: StartScreenType.SET_SHOW_LOGIN,
        isLogin: isLogin,
    };
}

export const setShowHome = (isHome: boolean) => {
    return {
        type: StartScreenType.SET_SHOW_HOME,
        isHome: isHome,
    };
}
