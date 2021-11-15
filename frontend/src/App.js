import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddPet from "./components/addPet";
import EditPet from "./components/editPet";
import React from "react";
import PetList from "./components/petList";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/add-pet">
          <AddPet />
        </Route>
        <Route path="/edit-pet">
          <EditPet />
        </Route>
        <Route path="/">
          <PetList />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
