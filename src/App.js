import React, { createContext, useState }  from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Bookings from "./components/Dashboard/Bookings/Bookings";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/bookings">
          <Bookings></Bookings>
          </Route>
      </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
