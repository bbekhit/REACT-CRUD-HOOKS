import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.scss";
import store from "../store";
import { Provider } from "react-redux";
import { Home } from "./Home";
import CrudEdit from "./CrudEdit";
import { Example } from "./Example";

export const CrudShow = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/example" component={Example} />
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={CrudEdit} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
