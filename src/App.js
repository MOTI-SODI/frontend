import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import IndexPage from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFound/404";
import SignupPage from "./pages/Auth/Signup/Signup";
import SigninPage from "./pages/Auth/Signin/Signin";
import NatureHomePage from "./pages/Nature/Home/Home"
import NatureProsecutorPage from "./pages/Nature/Prosecutor/Prosecutor"
import NatureResultPage from "./pages/Nature/Result/Result"
import CalendarPage from "./pages/Calendar/Calendar"
import DiaryPage from "./pages/Diary/Diary"
import QuestPage from "./pages/Quest/Quest"
import ProfilePage from "./pages/Profile/Profile"
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Navigate to="/signin" />} />
              <Route
                  path="/signin"
                  element={<SigninPage setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<IndexPage />} />
              <Route path="/nature" element={<NatureHomePage />} />
              <Route path="/prosecutor" element={<NatureProsecutorPage />} />
              <Route path="/result" element={<NatureResultPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/diary" element={<DiaryPage />} />
              <Route path="/quest" element={<QuestPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </div>
  );
}

export default App;
