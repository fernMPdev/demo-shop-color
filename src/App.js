import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./container/Layout/Layout";

import Shop from "./container/Shop/Shop";
import Checkout from "./container/Checkout/Checkout";
import Order from "./container/Order/Order";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/order" component={Order} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={Shop} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
