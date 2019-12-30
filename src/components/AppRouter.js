import React from "react";
import { Route, Switch } from 'react-router-dom'

import Users from "./../pages/Users";

const AppRouter = () => (  
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="/articles" component={Users} />
    <Route path="/stock" />
    <Route path="/tags" />
  </Switch>
);

export default AppRouter;