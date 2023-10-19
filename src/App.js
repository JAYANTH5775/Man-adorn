import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Profile from "./pages/Profile";

//import signup from "./pages/signup";

import Signin from "./pages/Signin";

import Forgotpassword from "./pages/Forgotpassword";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/signup" element={<signup />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
