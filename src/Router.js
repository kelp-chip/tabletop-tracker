import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/";
import Home from "./scenes/Home/";
import Game from "./scenes/Game/";
import PageNotFound from "./scenes/404";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/game/:id" component={Game} exact />
      <Route path="/*" component={PageNotFound} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
