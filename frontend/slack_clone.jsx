import React from 'react';
import ReactDOM from 'react-dom';
// import * as SessionUtil from './util/session_api_util';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            // TODO: add back in when entities reducer is setup
            // entities: {
            //     users: { [window.currentUser.id]: window.currentUser }
            // }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById('root');

    //Testing
    // window.signup = SessionUtil.signup;
    // window.login = SessionUtil.login;
    // window.logout = SessionUtil.logout;
    window.getState = store.getState;
    //Testing

    ReactDOM.render(<Root store={store}/>, root)
});
