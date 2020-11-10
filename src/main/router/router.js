import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import { MakeCreate, MakeList } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MakeList} />
        <Route path="/list" exact component={MakeList} />
        <Route path="/create" exact component={MakeCreate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
