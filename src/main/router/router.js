import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { makeCreate, makeList } from '@main/pages';

const Router = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeList} />
          <Route path="/list" exact component={makeList} />
          <Route path="/create" exact component={makeCreate} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Router;
