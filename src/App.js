import React, {useState}from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/HomePage"
import DriverPage from "./Pages/DriverPage"
import GaragePage from "./Pages/GaragePage"
import VehiclePage from "./Pages/VehiclePage";
import Footer from "./Components/Footer"
import Login from "./Components/Login";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/drivers'>
          <DriverPage />
        </Route>
        <Route path='/garages'>
          <GaragePage />
        </Route>
        <Route path='/vehicles'>
          <VehiclePage />
        </Route>


      </Switch>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
