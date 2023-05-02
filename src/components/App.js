import { Signup } from "./Signup";
import { Login } from "./Login";
import {Homepage} from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path="/" element=<Homepage /> />
      <Route path="/signup" element=<Signup /> />
      <Route path="/login" element=<Login /> />
    </Routes>
   </Router>
  );
}

export default App;
