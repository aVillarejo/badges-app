import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";

//Pages
import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route path="/badges/new" component={BadgeNew} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}
