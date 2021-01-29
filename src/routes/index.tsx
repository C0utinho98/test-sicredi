import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes';

import SignIn from '../pages/signIn';
import Main from '../pages/main';
import NotFound from '../pages/notFound';
import CreateOrUpdate from '../pages/createOrUpdate';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} isPrivate={false} />
    <Route path="/main" exact component={Main} isPrivate />
    <Route path="/create" exact component={CreateOrUpdate} isPrivate />
    <Route path="/update/:id" exact component={CreateOrUpdate} isPrivate />
    <Route path="*" component={NotFound} isPrivate />
  </Switch>
);

export default Routes;
