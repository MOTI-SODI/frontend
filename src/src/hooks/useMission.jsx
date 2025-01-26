import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

const useMission = () => {
  const [mission, setMission] = useState("");

  useEffect(() => {
    const getMission = async () => {
      try {
        const response = await axiosInstance.get("/api/mission/mission");
        if (!response.data.mission) {
          setMission("미션을 불러오는데 실패했습니다.");
        } else {
          setMission(response.data.mission);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMission();
  });

  return { mission };
};

export default useMission;
