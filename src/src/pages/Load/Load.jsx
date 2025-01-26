import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Load.module.css";
import sodiLogo from "../../assets/images/sodi-logo.png";

function LoadPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signin");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img src={sodiLogo} alt="sodiLogo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}

export default LoadPage;
