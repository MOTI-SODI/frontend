import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

const useNote = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const createnote = async (
    user_id, title, content, mood, year, month, day
  ) => {
    try {
      const response = await axiosInstance.post("/api/note/createnote", {
        user_id, title, content, mood, year, month, day
      });
      setMessage("노트가 성공적으로 생성되었습니다.")
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
      return response.data;
    } catch (error) {
      setMessage("노트 생성에 실패하였습니다.");
      throw error;
    }
  };

  const modifynote = async (
    user_id, title, content, mood, year, month, day
  ) => {
    try {
      const response = await axiosInstance.post("/api/note/modifynote", {
        user_id, title, content, mood, year, month, day
      });
      setMessage("노트가 성공적으로 수정되었습니다.")
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
      return response.data;
    } catch (error) {
      setMessage("노트 수정에 실패하였습니다.");
      throw error;
    }
  };

  const selectnote = async (
    user_id, year, month, day
  ) => {
    try {
      const response = await axiosInstance.post("/api/note/selectnote", {
        user_id, year, month, day
      });
      setMessage("노트가 성공적으로 조회되었습니다.")
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
      return response.data;
    } catch (error) {
      setMessage("노트 조회에 실패하였습니다.");
      throw error;
    }
  };

  return {
    message,
    createnote,
    modifynote,
    selectnote
  };
};

export default useNote;
