import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drivers from 'components/Drivers/Drivers';

const MainRoutes = () => (
  <Switch>
    <Route path="/drivers" component={Drivers} />
  </Switch>
);
export default MainRoutes;
