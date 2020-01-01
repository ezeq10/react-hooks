import React from "react";
import { Route, Switch } from 'react-router-dom'

import Users from "./../pages/Users";
import Articles from "./../pages/Articles";

const AppRouter = () => (  
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="/articles" component={Articles} />
    <Route path="/stock" />
    <Route path="/tags" />
  </Switch>
);

export default AppRouter;