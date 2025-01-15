import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import styles from "./Prosecutor.module.css";
import left_button from "../../../assets/images/components/24-left.png"
import loading_success from "../../../assets/images/loading_success.png"
import loading from "../../../assets/images/loading.gif"

function NatureProsecutorPage({ setIsProsecutor }) {
  const [step, setStep] = useState(1);
  const totalSteps = 31;

  const [emotionality, setEmotionality] = useState("");
  const [extraversion, setExtraversion] = useState("");
  const [agreeableness, setAgreeableness] = useState("");
  const [eonesty, setEonesty] = useState("");
  const [eonscientiousness, setEonscientiousness] = useState("");
  const [open, setOpen] = useState("");
  const navigate = useNavigate();

  const handleClickEmotionality = (value) => {
    setEmotionality(prevValue => prevValue + value);
    nextStep();
  };
  
  const handleClickExtraversion = (value) => {
    setExtraversion(prevValue => prevValue + value);
    nextStep();
  };

  const handleClickAgreeableness = (value) => {
    setAgreeableness(prevValue => prevValue + value);
    nextStep();
  };
  
  const handleClickEonesty= (value) => {
    setEonesty(prevValue => prevValue + value);
    nextStep();
  };

  const handleClickEonscientiousness = (value) => {
    setEonscientiousness(prevValue => prevValue + value);
    nextStep();
  };
  
  const handleClickOpen = (value) => {
    setOpen(prevValue => prevValue + value);
    nextStep();
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => {
    setStep((prev) => {
      if (prev === 1) {
        navigate('/nature');
        return prev;
      }
      return Math.max(prev - 1, 1);
    });
  };
  
  const prosecutor = (emotionality, extraversion, agreeableness, eonesty, eonscientiousness, open, setIsProsecutor) => {};

  const [loadingText, setLoadingText] = useState("로딩중.");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingText((prevText) => {
          if (prevText === "로딩중.") return "로딩중..";
          if (prevText === "로딩중..") return "로딩중...";
          return "로딩중.";
        });
      }, 500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (step === 31) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(32);
      }, 3000);
    }
  }, [step]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 32) {
      prosecutor(emotionality, extraversion, agreeableness, eonesty, eonscientiousness, open, setIsProsecutor);
      navigate("/result");
    } else {
      nextStep();
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        <div className={styles.left_button} onClick={prevStep} style={{ display: step === 31 || step === 32? 'none' : 'block' }}>
          <img src={left_button} alt="left_button" height="30px" width="30px" />
        </div>

        {step === 1 && (
          <div className={styles.steps}>
            <h3>위험한 상황에 처하면 다른 <br /> 사람보다 무서움을 많이 탄다</h3>
            <div className={styles.inputGroup}> 
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={styles.steps}>
            <h3>내가 고통스럽고 힘들 때 <br /> 나를 위로해 줄 수 있는 사람이 꼭 필요하다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className={styles.steps}>
            <h3>다른 사람이 우는 것을 <br /> 보면 나도 울고 싶어진다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className={styles.steps}>
            <h3>친한 사람과 오랫동안 떨어져 <br /> 있어야 한다면 이별의 순간에 <br /> 매우 슬픈 감정을 느낄 것이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className={styles.steps}>
            <h3>불행한 사람들을 <br /> 보면 동정과 연민을 느낀다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEmotionality(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className={styles.steps}>
            <h3>나는 같이 얘기할 수 있는 사람이 <br /> 주변에 많이 있는 것을 좋아한다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className={styles.steps}>
            <h3>주로 혼자 하는 일보다는 <br /> 다른 사람들과 적극적으로 <br /> 상호작용하는 일을 더 좋아한다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 8 && (
          <div className={styles.steps}>
            <h3>여러 사람 앞에서 <br /> 발표하는 것에 자신 있다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 9 && (
          <div className={styles.steps}>
            <h3>나는 종종 사람들로부터 좀 더 <br /> 할달해질 필요가 있다는 소리를 듣는다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 10 && (
          <div className={styles.steps}>
            <h3>새로운 환경에서 내가 제일 <br /> 먼저하는 일은 친구를 사귀는 것이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickExtraversion(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 11 && (
          <div className={styles.steps}>
            <h3>나를 부당하게 대우한 사람에게도 <br /> 큰 원한을 품지 않는 편이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 12 && (
          <div className={styles.steps}>
            <h3>나는 다른 사람의 실수를 <br /> 불평없이 그냥 받아들이는 편이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 13 && (
          <div className={styles.steps}>
            <h3>다른 사람이 나를 괴롭혔더라도 <br /> 신경쓰지 않고 그냥 용서해주는 편이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 14 && (
          <div className={styles.steps}>
            <h3>다른 사람을 판단하는데 <br /> 있어서 나는 매우 관대한 편이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 15 && (
          <div className={styles.steps}>
            <h3>나는 도움이 필요한 사람을 <br /> 위해 서스럼 없이 도움을 준다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(4)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(3)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(2)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickAgreeableness(1)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 16 && (
          <div className={styles.steps}>
            <h3>내가 돈을 훔친 사실을 나만 안다면, <br /> 남의 돈 몇 천만원쯤은 훔칠 수 있다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 17 && (
          <div className={styles.steps}>
            <h3>어떤 사람에게서 얻어낼 것이 있으면, <br /> 싫더라도 나의 속마음과 반대되는 <br /> 말을 할 수 있다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 18 && (
          <div className={styles.steps}>
            <h3>무언가를 청탁하기 위해 그 사람을 <br /> 좋아하는 척 할 수 있다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 19 && (
          <div className={styles.steps}>
            <h3>내가 한 사실이 드러나지 않는다면, <br /> 싫어하는 사람에게 해를 입힐 수 있다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 20 && (
          <div className={styles.steps}>
            <h3>사람들은 내가 <br /> 매정하고 차갑다고 이야기한다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonesty(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 21 && (
          <div className={styles.steps}>
            <h3>일을 할 때 사소한 부분에는 <br /> 크게 신경을 쓰지 않는 편이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 22 && (
          <div className={styles.steps}>
            <h3>계획을 수행하는데 있어서, <br /> 마지막까지 미루는 편이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 23 && (
          <div className={styles.steps}>
            <h3>정확하게 마무리하기 위해 <br /> 많은 시간을 쏟는 것이 어렵다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 24 && (
          <div className={styles.steps}>
            <h3>사람들은 종종 <br /> 내가 덜렁거린다고 한다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 25 && (
          <div className={styles.steps}>
            <h3>정한 목표를 해결하기 위해 <br /> 내 자신을 다그치지 않는다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickEonscientiousness(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 26 && (
          <div className={styles.steps}>
            <h3>나는 닫힌 결말이 좋다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 27 && (
          <div className={styles.steps}>
            <h3>창의성을 요구하는 직업보다는 <br /> 그냥 일상적 일과를 수행하는 <br /> 직업을 갖고 싶다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 28 && (
          <div className={styles.steps}>
            <h3> 영화나 예술 작품을 보고 <br /> 느낀 이야기 나누는 것은 귀찮은 일이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 29 && (
          <div className={styles.steps}>
            <h3>과학과 철학에 대한 <br /> 이야기를 듣는 것은 지루한 일이다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 30 && (
          <div className={styles.steps}>
            <h3>다른 나라 사람들과의 교류를 통해 <br /> 그들의 문화를 알아가는 것보다 <br /> 내가 속한 문화에 머무는 것이 편하다</h3>
            <div className={styles.inputGroup}>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(1)}>매우 그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(2)}>그렇다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(3)}>그렇지 않다</button>
              <button className={styles.clickbutton} onClick={() => handleClickOpen(4)}>매우 그렇지 않다</button>
            </div>
          </div>
        )}
        {step === 31 && (
          <div>
            <div className={styles.steploading}>
              <p>{loadingText}</p>
              <img src={loading} alt="loading" className={styles.loadingImage} />
              <div className={styles.turn}></div>
              <button className={styles.closeButton}>결과 확인해요!</button>
            </div>
          </div>
        )}
        {step === 32 && (
          <div className={styles.stepResult}>
            <h2>검사 결과를 확인해 볼까요?</h2>
            <img src={loading_success} alt="loading_success" className={styles.loadingImageSuccess} />
            <div className={styles.turn}></div>
            <Button type="button" style={{ width: "100%" }} onClick={handleSubmit}>결과 확인해요!</Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default NatureProsecutorPage;