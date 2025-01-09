import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import styles from "./Home.module.css";
import loading from "../../../assets/images/loading.png"

function NatureHomePage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/prosecutor");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.home}>
          <img src={loading} alt="Loading" className={styles.logo} />
          <h2>HEXACO 성격 유형 <br /> 검사를 시작 해볼까요?</h2>
        </div>
          <Button type="button" style={{ width: "100%" }} onClick={handleSubmit}>시작해요!</Button>
      </form>
    </div>
  );  
}

export default NatureHomePage;
