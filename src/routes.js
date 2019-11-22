import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./components/Auth";
import Home from "./components/Home";
import Onboarding from "./components/Onboarding";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:path" component={Auth} />
      <Route exact path="/onboarding/:path" component={Onboarding} />
    </Switch>
  );
};

export default Routes;
