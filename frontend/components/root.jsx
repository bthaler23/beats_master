import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Stream from './stream/stream';
import LandingPageContainer from './landing_page/landing_page_container';
import SongPageContainer from './song/song_page_container';
import UploadContainer from './upload/upload_container';
import UserPageContainer from './user_pages/user_page_container';


const Root = ({ store }) => {

  const checkLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/stream');
    }
  }

  const authenticateUser = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={LandingPageContainer} onEnter={ checkLoggedIn } />
          <Route path="stream" component={ Stream } onEnter={ authenticateUser }/>
          <Route path="upload" component={UploadContainer} />
          <Route path="users/:user_id" component={UserPageContainer} />
          <Route path="songs/:song_id" component={SongPageContainer} />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
