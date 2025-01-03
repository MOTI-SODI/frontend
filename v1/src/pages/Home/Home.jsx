import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button/Button";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dummy");
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="SODI" className={styles.image} />
      <h1 className={styles.header}>SODI</h1>
      <p className={styles.description}>
        하루를 정리하고, 나만의 음악으로 완성하는, SODI
        <br />
        오늘의 감정과 순간들을 음악으로 기록해보세요. SODI가 함께합니다.
      </p>
      <Button onClick={handleButtonClick}>시작하기</Button>
    </div>
  );
}

export default Home;
