import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";
import home from "../../assets/images/components/32-home.png"
import calendar from "../../assets/images/components/32-calender.png"
import diary from "../../assets/images/components/32-diary.png"
import quest from "../../assets/images/components/32-quest.png"
import mypage from "../../assets/images/components/32-mypage.png"

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dummy");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.topLOGO}>
          <span className={styles.s}>S</span>
          <span className={styles.o}>O</span>
          <span className={styles.d}>D</span>
          <span className={styles.i}>I</span>
        </p>
        <div className={styles.topBar}>
          <h3>홈</h3>
        </div>
      </form>
    </div>

  );
}

export default Home;
