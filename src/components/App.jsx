import { Signup } from "./Signup";
import { Login } from "./Login";
import {Homepage} from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CurrentUserProvider } from "../context/currentUser.context";

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
