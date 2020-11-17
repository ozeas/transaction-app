import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import { makeCreate, makeList } from '@main/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={makeList} />
        <Route path="/list" exact component={makeList} />
        <Route path="/create" exact component={makeCreate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
