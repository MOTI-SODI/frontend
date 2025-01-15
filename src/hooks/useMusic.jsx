import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

const useMusic = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const recommend = async (
    user_id, content
  ) => {
    try {
      const response = await axiosInstance.post("/api/music/recommend", {
        user_id, content
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

  const createnote = async (
    user_id, title, content, mood, year, month, day
  ) => {
    try {
      const response = await axiosInstance.post("/api/music/createmusic", {
        user_id, artist, song_title, thumbnail, music_url, year, month, day
      });
      setMessage("노래가 성공적으로 생성되었습니다.")
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
      return response.data;
    } catch (error) {
      setMessage("노래 생성에 실패하였습니다.");
      throw error;
    }
  };

  const selectmusic = async (
    user_id, year, month, day
  ) => {
    try {
      const response = await axiosInstance.post("/api/music/selectmusic", {
        user_id, year, month, day
      });
      setMessage("노래가 성공적으로 조회되었습니다.")
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 1000);
      return response.data;
    } catch (error) {
      setMessage("노래 조회에 실패하였습니다.");
      throw error;
    }
  };

  return {
    message,
    recommend,
    createnote,
    selectmusic
  };
};

export default useMusic;
