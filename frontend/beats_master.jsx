import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as Action from './actions/user_actions';
// import * as APIUtil from './util/user_api_util'

window.fetchUser = Action.fetchUser;
// window.fetchSongs = Action.fetchSongs
// window.fetchSong = Action.fetchSong


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser} };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    //remove later
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
