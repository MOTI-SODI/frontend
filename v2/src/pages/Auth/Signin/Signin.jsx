import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Button from "../../../components/Button/Button";
import styles from "./Signin.module.css";
import logo from "../../../assets/images/logo.png";

function SigninPage({ setIsLoggedIn }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { message, signin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(id, password, setIsLoggedIn);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" height="200px" width="200px" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            minLength={6}
            maxLength={50}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            placeholder="아이디"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            maxLength={20}
            pattern="^[a-zA-Z0-9]*$"
            placeholder="비밀번호"
          />
        </div>
        <Button type="submit" style={{ width: "100%" }}>
          로그인
        </Button>
        {message && <p className={styles.message}>{message}</p>}
        <p className={styles.signupLink}>
          <Link to="/signup">회원가입</Link>
        </p>
      </form>
    </div>
  );
}

export default SigninPage;
