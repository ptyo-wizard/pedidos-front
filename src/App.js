import React from "react";
import { BrowserRouter as Rpouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/navbar/Navbar";
import ListOrders from "./pages/ListOrders";
import ListDetail from "./pages/ListDetail";
import Form from "./pages/Form";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Rpouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ListOrders />
          </Route>
          <Route path="/details/:id">
            <ListDetail />
          </Route>
          <Route path="/createorder">
            <Form />
          </Route>
        </Switch>
      </Rpouter>
    </Provider>
  );
}

export default App;
<div className="container">
  <Navbar></Navbar>
</div>;
