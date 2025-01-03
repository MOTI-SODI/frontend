import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

const useAuth = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const signin = async (email, password, setIsLoggedIn) => {
    try {
      const response = await axiosInstance.post("/api/user/signin", {
        email,
        password,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      setMessage(response.data.message);
      setIsLoggedIn(true);
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
    } catch (error) {
      setMessage("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const signup = async (email, name, password) => {
    try {
      const response = await axiosInstance.post("/api/user/signup", {
        email,
        name,
        password,
      });
      setMessage(response.data.message);
      setTimeout(() => {
        setMessage("");
        navigate("/signin");
      }, 1000);
    } catch (error) {
      setMessage("이미 존재하는 이메일입니다.");
    }
  };

  const changePassword = async (
    email,
    currentPassword,
    newPassword,
    confirmPassword
  ) => {
    try {
      const response = await axiosInstance.post("/api/user/password", {
        email,
        current_password: currentPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      });
      setMessage("비밀번호가 성공적으로 변경되었습니다.");
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
      return response.data;
    } catch (error) {
      setMessage("비밀번호 변경에 실패했습니다.");
      throw error;
    }
  };

  const refreshToken = async () => {
    try {
      const refresh_token = localStorage.getItem("refreshToken");
      const response = await axiosInstance.post("/api/token/refresh", {
        refresh_token,
      });

      localStorage.setItem("accessToken", response.data.Access_Token);
      return response.data;
    } catch (error) {
      setMessage("토큰 갱신에 실패했습니다.");
      // 토큰 갱신 실패시 로그아웃 처리
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/signin");
      throw error;
    }
  };

  return {
    message,
    signin,
    signup,
    changePassword,
    refreshToken,
  };
};

export default useAuth;
