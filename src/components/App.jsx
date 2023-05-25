import { Signup } from "./Signup";
import { Login } from "./Login";
import {Homepage} from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CurrentUserProvider } from "../context/currentUser.context";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<PrivateRoute><Homepage /></PrivateRoute>} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
