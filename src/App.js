import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";

//Pages
import Home from "./pages/Home";
import Badges from "./containers/Badges";
import BadgeNew from "./containers/BadgeNew";
import BadgeEdit from "./containers/BadgeEdit";
import BadgeDetails from "./containers/BadgeDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/edit/:badgeId" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}
