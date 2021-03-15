import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Home from "./Component/Home";
import Slider from "./Component/Slider";
import Msg from "./Component/Msg";
import Footer from "./Component/Footer";
import Flowchart from "./Component/Flowchart";
import Test from "./Component/test";
import Navbar from "./Component/Navbar";
function App(props) {
  return (
    <Router>
      <Route
        exact
        strict
        component={Navbar}
        path="/Navbar"
        history={props.history}
      />
      <Route
        exact
        strict
        component={Test}
        path="/Test"
        history={props.history}
      />
      <Route
        exact
        strict
        component={Footer}
        path="/Footer"
        history={props.history}
      />
      <Route
        exact
        strict
        component={Flowchart}
        path="/Flowchart"
        history={props.history}
      />
      <Route exact strict component={Msg} path="/Msg" history={props.history} />
      <Route
        exact
        strict
        component={Home}
        path="/Home"
        history={props.history}
      />
      <Route
        exact
        strict
        component={Slider}
        path="/Slider"
        history={props.history}
      />
    </Router>
  );
}

export default App;
