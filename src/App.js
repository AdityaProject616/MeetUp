import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";
//Switch router -> only one of these pages should be rendered in Route
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>

        <Route path="/new-meetup">
          <NewMeetup />
        </Route>

        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
