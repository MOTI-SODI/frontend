import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Button from "../../../components/Button/Button";
import styles from "./Signup.module.css";
import left_button from "../../../assets/images/components/24-left.png"

function SignupPage({ setIsLoggedIn }) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneAddress, setPhoneAddress] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");
  const { message, signup } = useAuth();
  const navigate = useNavigate();

  const formatBirthDate = (value) => {
    let formattedValue = value.replace(/[^\d]/g, '');
    if (formattedValue.length <= 4) {
      return formattedValue;
    }
    if (formattedValue.length <= 6) {
      return `${formattedValue.slice(0, 4)}.${formattedValue.slice(4)}`;
    }
    return `${formattedValue.slice(0, 4)}.${formattedValue.slice(4, 6)}.${formattedValue.slice(6, 8)}`;
  };

  const formatPhoneNumber = (value) => {
    let formattedValue = value.replace(/[^\d]/g, '');
    if (formattedValue.length <= 3) {
      return formattedValue;
    }
    if (formattedValue.length <= 7) {
      return `${formattedValue.slice(0, 3)}-${formattedValue.slice(3)}`;
    }
    return `${formattedValue.slice(0, 3)}-${formattedValue.slice(3, 7)}-${formattedValue.slice(7, 11)}`;
  };

  const handleBirthDateChange = (e) => {
    const value = e.target.value;
    setBirthDate(formatBirthDate(value));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneAddress(formatPhoneNumber(value));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const validateForm = () => {
    if (!email || !password) {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 4) {
      if (!validateForm()) return;

      signup(email, password, name, phoneAddress, birthDate, gender, job, setIsLoggedIn);

      navigate("/signin");
    } else {
      nextStep();
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        <div className={styles.left_button} onClick={prevStep}>
          <img src={left_button} alt="left_button" height="30px" width="30px" />
        </div>
        {step === 1 && (
          <div className={styles.steps}>
            <h2>개인정보를 입력해요</h2>
            <div className={styles.inputGroup}>
              <p>이름</p>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={2}
                maxLength={20}
              />
            </div>
            <div className={styles.inputGroup}>
              <p>생년월일</p>
              <input
                type="text"
                id="birthdate"
                value={birthDate}
                onChange={handleBirthDateChange}
                required
                pattern="^\d{4}\.\d{2}\.\d{2}$"
              />
            </div>
            <div className={styles.inputGroup}>
              <p>전화번호</p>
              <input
                type="text"
                id="phoneaddress"
                value={phoneAddress}
                onChange={handlePhoneNumberChange}
                required
                pattern="^\d{3}\-\d{4}\-\d{4}$"
              />
            </div>
            <div className={styles.comfirmButton}>
              <Button type="submit" style={{ width: "100%" }}>다 적었어요!</Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={styles.steps}>
            <h2>성별은 무엇인가요?</h2>
            <button className={styles.clickbutton} onClick={() => { setGender("남자"); nextStep(); }}>남자</button>
            <button className={styles.clickbutton} onClick={() => { setGender("여자"); nextStep(); }}>여자</button>
            <button className={styles.clickbutton} onClick={() => { setGender("기타"); nextStep(); }}>기타</button>
          </div>
        )}
        {step === 3 && (
          <div className={styles.steps}>
            <h2>직업은 무엇인가요?</h2>
            <button className={styles.clickbutton} onClick={() => { setJob("학생"); nextStep(); }}>학생</button>
            <button className={styles.clickbutton} onClick={() => { setJob("취업준비생"); nextStep(); }}>취업준비생</button>
            <button className={styles.clickbutton} onClick={() => { setJob("직장인/프리랜서"); nextStep(); }}>직장인/프리랜서</button>
            <button className={styles.clickbutton} onClick={() => { setJob("무직"); nextStep(); }}>무직</button>
            <button className={styles.clickbutton} onClick={() => { setJob("기타"); nextStep(); }}>기타</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2>계정을 만들어요</h2>
            <div className={styles.inputGroup}>
              <p>이메일</p>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              />
            </div>
            <div className={styles.inputGroup}>
              <p>비밀번호</p>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                maxLength={20}
              />
            </div>
            <Button type="submit" style={{ width: "100%" }}>다 적었어요!</Button>
            {message && <p className={styles.message}>{message}</p>}
          </div>
        )}
      </form>
    </div>
  );
}

export default SignupPage;
