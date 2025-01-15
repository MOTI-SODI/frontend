import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

const useInspection = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const result = async (
    user_id, emotionality, extraversion, agreeableness, honesty, conscientiousness, open
  ) => {
    try {
      const response = await axiosInstance.post("/api/inspection/result", {
        user_id, emotionality, extraversion, agreeableness, honesty, conscientiousness, open
      });
      setMessage("노래가 성공적으로 추천되었습니다.")
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
      return response.data;
    } catch (error) {
      setMessage("노트 추천에 실패하였습니다.");
      throw error;
    }
  };

      return {
        message,
        result
      };
    };
    
    export default useInspection;