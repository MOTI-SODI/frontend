import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import IndexPage from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/404";
import SignupPage from "./pages/Auth/Signup/Signup";
import SigninPage from "./pages/Auth/Signin/Signin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <div className="App">
      <Routes>
        {/* 기본 경로에서 /signin으로 리디렉션 */}
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SigninPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
