import { useState, useCallback } from "react";
import axiosInstance from "../api/axios";

const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const createCalendar = useCallback(async (userId, noteId, date) => {
    try {
      const response = await axiosInstance.post(
        "/api/calendar/createcalendar",
        {
          user_id: userId,
          note_id: noteId,
          year: date.year,
          month: date.month,
          day: date.day,
        }
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }, []);

  // 년도별 조회
  const getYearCalendar = useCallback(
    async (userId) => {
      try {
        const response = await axiosInstance.post("/api/calendar/year", {
          user_id: userId,
          year: selectedDate.year,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    [selectedDate.year]
  );

  // 월별 조회
  const getMonthCalendar = useCallback(
    async (userId) => {
      try {
        const response = await axiosInstance.post("/api/calendar/month", {
          user_id: userId,
          month: selectedDate.month,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    [selectedDate.month]
  );

  // 일별 조회
  const getDayCalendar = useCallback(
    async (userId) => {
      try {
        const response = await axiosInstance.post("/api/calendar/day", {
          user_id: userId,
          day: selectedDate.day,
        });

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    [selectedDate.day]
  );

  // 날짜 선택 핸들러
  const handleDateSelect = useCallback(
    (year, month, day) => {
      setSelectedDate({
        year: year || selectedDate.year,
        month: month || selectedDate.month,
        day: day || selectedDate.day,
      });
    },
    [selectedDate]
  );

  return {
    selectedDate,
    createCalendar,
    getYearCalendar,
    getMonthCalendar,
    getDayCalendar,
    handleDateSelect,
  };
};

export default useCalendar;
