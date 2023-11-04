import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import offers from "./pages/offers";
import Signin from "./pages/Signin";
import Forgotpassword from "./pages/Forgotpassword";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/signup" element={<signup />} />
          <Route path="/posts" element={<posts />} />
          <Route path="/offers" element={<offers />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
