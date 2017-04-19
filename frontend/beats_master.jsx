import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/song_api_util';

window.getSongs = APIUtil.getSongs;

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
