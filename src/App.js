import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import IndexPage from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/404";
import SignupPage from "./pages/Auth/Signup/Signup";
import SigninPage from "./pages/Auth/Signin/Signin";
import TopNav from "./components/TopNav/TopNav";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <div className="App">
      <TopNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <IndexPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/signin"
          element={<SigninPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
