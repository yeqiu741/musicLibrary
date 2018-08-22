import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import MusicLibrary from './containers/MusicLibrary';

const AppRoutes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={MusicLibrary} />
  </Route>
);

export default AppRoutes;
