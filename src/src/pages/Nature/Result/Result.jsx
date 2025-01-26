import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import styles from "./Result.module.css";
import right_button from "../../../assets/images/components/24-right.png";

function NatureProsecutorPage() {
  const [isEmotionalityOpen, setIsEmotionalityOpen] = useState(false);
  const [isExtraversionOpen, setIsExtraversionOpen] = useState(false);
  const [isAgreeablenessOpen, setIsAgreeablenessOpen] = useState(false);
  const [isHonestyOpen, setIsHonestyOpen] = useState(false);
  const [isConscientiousnessOpen, setIsConscientiousnessOpen] = useState(false);
  const [isOpenOpen, setIsOpenOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const number = Math.floor(Math.random() * 5) + 1;
    setRandomNumber(number);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "300px",
      height: "200px",
      margin: "auto",
      borderRadius: "25px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "20px",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.topBar}>
          <h2>모티님의 검사결과는?</h2>
          <div className={styles.right_button} onClick={handleSubmit}>
            <img src={right_button} alt="right_button" height="30px" width="30px" />
          </div>
        </div>

        <div className={styles.middleBar}>
          {randomNumber === 1 && (
            <>
          <div className={styles.emotionality}>
            <button className={styles.emotionalityCircleOne} onClick={() => setIsEmotionalityOpen(true)}>감정성</button>
            <Modal isOpen={isEmotionalityOpen} onRequestClose={() => setIsEmotionalityOpen(false)} style={customStyles}>
              <h4 style={{ color: "#E69A00" }}>감정성</h4>
              <br />
              <p> 감정적으로 민감하고 스트레스와 위험에 신중히 반응하는 성향입니다. 강한 공감 능력과 정서적 연결을 중요시합니다. 안정과 보호를 추구하며 관계에서 깊은 애착을 보입니다. 하위요인은 두려움, 불안, 의존성, 감수성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.extraversion}>
            <button className={styles.extraversionCircleOne} onClick={() => setIsExtraversionOpen(true)}>외향성</button>
            <Modal isOpen={isExtraversionOpen} onRequestClose={() => setIsExtraversionOpen(false)} style={customStyles}>
              <h4 style={{ color: "#FF6F61" }}>외향성</h4>
              <br />
              <p> 사회적이고 활발하며 타인과의 상호작용을 즐기는 성향입니다. 긍정적인 에너지와 자신감으로 대인관계를 형성합니다. 주목받는 상황에서 편안함을 느끼고 활력을 발산합니다. 하위요인은 표현성, 사회적 대담성, 사회성, 활력성으로 구성되어 있습니다. </p>
            </Modal>
          </div>

          <div className={styles.agreeableness}>
            <button className={styles.agreeablenessCircleOne} onClick={() => setIsAgreeablenessOpen(true)}>우호성</button>
            <Modal isOpen={isAgreeablenessOpen} onRequestClose={() => setIsAgreeablenessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#3EB489" }}>우호성</h4>
              <br />
              <p> 친절하고 타인과 협력하며 갈등을 조화롭게 해결하려는 성향입니다. 관용적이고 배려심이 많아 타인에게 호감을 줍니다. 대인관계에서 신뢰와 존중을 중시합니다. 하위요인은 관용성, 온유성, 융통성, 인내심으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.honesty}>
            <button className={styles.honestyCircleOne} onClick={() => setIsHonestyOpen(true)}>진솔성</button>
            <Modal isOpen={isHonestyOpen} onRequestClose={() => setIsHonestyOpen(false)} style={customStyles}>
              <h4 style={{ color: "#676767" }}>진솔성</h4>
              <br />
              <p> 정직성과 도덕성을 중시하며 타인을 속이거나 조종하지 않는 성향입니다. 공정하고 겸손한 태도로 윤리적 기준을 중요하게 여깁니다. 타인에게 신뢰받으며 진실된 관계를 유지합니다. 하위요인은 진실성, 도덕성, 청렴성, 겸손성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.conscientiousness}>
            <button className={styles.conscientiousnessCircleOne} onClick={() => setIsConscientiousnessOpen(true)}>신중성</button>
            <Modal isOpen={isConscientiousnessOpen} onRequestClose={() => setIsConscientiousnessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#00BFFF" }}>신중성</h4>
              <br />
              <p> 책임감 있고 체계적이며 목표를 성실히 달성하려는 성향입니다. 계획적이고 꼼꼼하며 실수를 최소화하기 위해 노력합니다. 시간 관리와 업무 수행에서 높은 효율성을 보입니다. 하위요인은 치밀성, 근면성, 완벽성, 신중성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.open}>
            <button className={styles.openCircleOne} onClick={() => setIsOpenOpen(true)}>개방성</button>
            <Modal isOpen={isOpenOpen} onRequestClose={() => setIsOpenOpen(false)} style={customStyles}>
              <h4 style={{ color: "#AA00FF" }}>개방성</h4>
              <br />
              <p> 새로운 아이디어와 경험을 탐구하고 창의적인 접근을 선호하는 성향입니다. 예술적 감수성과 호기심이 강하며 독창적인 사고를 지닙니다. 전통적 관습을 넘어 혁신과 변화를 추구합니다. 하위요인은 심미성, 지적 호기심, 창조성, 비관 습성으로 구성되어 있습니다.</p>
            </Modal>
          </div>
          </>
          )}
          {randomNumber === 2 && (
            <>
          <div className={styles.emotionality}>
            <button className={styles.emotionalityCircleTwo} onClick={() => setIsEmotionalityOpen(true)}>감정성</button>
            <Modal isOpen={isEmotionalityOpen} onRequestClose={() => setIsEmotionalityOpen(false)} style={customStyles}>
              <h4 style={{ color: "#E69A00" }}>감정성</h4>
              <br />
              <p> 감정적으로 민감하고 스트레스와 위험에 신중히 반응하는 성향입니다. 강한 공감 능력과 정서적 연결을 중요시합니다. 안정과 보호를 추구하며 관계에서 깊은 애착을 보입니다. 하위요인은 두려움, 불안, 의존성, 감수성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.extraversion}>
            <button className={styles.extraversionCircleTwo} onClick={() => setIsExtraversionOpen(true)}>외향성</button>
            <Modal isOpen={isExtraversionOpen} onRequestClose={() => setIsExtraversionOpen(false)} style={customStyles}>
              <h4 style={{ color: "#FF6F61" }}>외향성</h4>
              <br />
              <p> 사회적이고 활발하며 타인과의 상호작용을 즐기는 성향입니다. 긍정적인 에너지와 자신감으로 대인관계를 형성합니다. 주목받는 상황에서 편안함을 느끼고 활력을 발산합니다. 하위요인은 표현성, 사회적 대담성, 사회성, 활력성으로 구성되어 있습니다. </p>
            </Modal>
          </div>

          <div className={styles.agreeableness}>
            <button className={styles.agreeablenessCircleTwo} onClick={() => setIsAgreeablenessOpen(true)}>우호성</button>
            <Modal isOpen={isAgreeablenessOpen} onRequestClose={() => setIsAgreeablenessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#3EB489" }}>우호성</h4>
              <br />
              <p> 친절하고 타인과 협력하며 갈등을 조화롭게 해결하려는 성향입니다. 관용적이고 배려심이 많아 타인에게 호감을 줍니다. 대인관계에서 신뢰와 존중을 중시합니다. 하위요인은 관용성, 온유성, 융통성, 인내심으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.honesty}>
            <button className={styles.honestyCircleTwo} onClick={() => setIsHonestyOpen(true)}>진솔성</button>
            <Modal isOpen={isHonestyOpen} onRequestClose={() => setIsHonestyOpen(false)} style={customStyles}>
              <h4 style={{ color: "#676767" }}>진솔성</h4>
              <br />
              <p> 정직성과 도덕성을 중시하며 타인을 속이거나 조종하지 않는 성향입니다. 공정하고 겸손한 태도로 윤리적 기준을 중요하게 여깁니다. 타인에게 신뢰받으며 진실된 관계를 유지합니다. 하위요인은 진실성, 도덕성, 청렴성, 겸손성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.conscientiousness}>
            <button className={styles.conscientiousnessCircleTwo} onClick={() => setIsConscientiousnessOpen(true)}>신중성</button>
            <Modal isOpen={isConscientiousnessOpen} onRequestClose={() => setIsConscientiousnessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#00BFFF" }}>신중성</h4>
              <br />
              <p> 책임감 있고 체계적이며 목표를 성실히 달성하려는 성향입니다. 계획적이고 꼼꼼하며 실수를 최소화하기 위해 노력합니다. 시간 관리와 업무 수행에서 높은 효율성을 보입니다. 하위요인은 치밀성, 근면성, 완벽성, 신중성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.open}>
            <button className={styles.openCircleTwo} onClick={() => setIsOpenOpen(true)}>개방성</button>
            <Modal isOpen={isOpenOpen} onRequestClose={() => setIsOpenOpen(false)} style={customStyles}>
              <h4 style={{ color: "#AA00FF" }}>개방성</h4>
              <br />
              <p> 새로운 아이디어와 경험을 탐구하고 창의적인 접근을 선호하는 성향입니다. 예술적 감수성과 호기심이 강하며 독창적인 사고를 지닙니다. 전통적 관습을 넘어 혁신과 변화를 추구합니다. 하위요인은 심미성, 지적 호기심, 창조성, 비관 습성으로 구성되어 있습니다.</p>
            </Modal>
          </div>
          </>
          )}
          {randomNumber === 3 && (
            <>
          <div className={styles.emotionality}>
            <button className={styles.emotionalityCircleThree} onClick={() => setIsEmotionalityOpen(true)}>감정성</button>
            <Modal isOpen={isEmotionalityOpen} onRequestClose={() => setIsEmotionalityOpen(false)} style={customStyles}>
              <h4 style={{ color: "#E69A00" }}>감정성</h4>
              <br />
              <p> 감정적으로 민감하고 스트레스와 위험에 신중히 반응하는 성향입니다. 강한 공감 능력과 정서적 연결을 중요시합니다. 안정과 보호를 추구하며 관계에서 깊은 애착을 보입니다. 하위요인은 두려움, 불안, 의존성, 감수성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.extraversion}>
            <button className={styles.extraversionCircleThree} onClick={() => setIsExtraversionOpen(true)}>외향성</button>
            <Modal isOpen={isExtraversionOpen} onRequestClose={() => setIsExtraversionOpen(false)} style={customStyles}>
              <h4 style={{ color: "#FF6F61" }}>외향성</h4>
              <br />
              <p> 사회적이고 활발하며 타인과의 상호작용을 즐기는 성향입니다. 긍정적인 에너지와 자신감으로 대인관계를 형성합니다. 주목받는 상황에서 편안함을 느끼고 활력을 발산합니다. 하위요인은 표현성, 사회적 대담성, 사회성, 활력성으로 구성되어 있습니다. </p>
            </Modal>
          </div>

          <div className={styles.agreeableness}>
            <button className={styles.agreeablenessCircleThree} onClick={() => setIsAgreeablenessOpen(true)}>우호성</button>
            <Modal isOpen={isAgreeablenessOpen} onRequestClose={() => setIsAgreeablenessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#3EB489" }}>우호성</h4>
              <br />
              <p> 친절하고 타인과 협력하며 갈등을 조화롭게 해결하려는 성향입니다. 관용적이고 배려심이 많아 타인에게 호감을 줍니다. 대인관계에서 신뢰와 존중을 중시합니다. 하위요인은 관용성, 온유성, 융통성, 인내심으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.hThreesty}>
            <button className={styles.honestyCircleThree} onClick={() => setIsHonestyOpen(true)}>진솔성</button>
            <Modal isOpen={isHonestyOpen} onRequestClose={() => setIsHonestyOpen(false)} style={customStyles}>
              <h4 style={{ color: "#676767" }}>진솔성</h4>
              <br />
              <p> 정직성과 도덕성을 중시하며 타인을 속이거나 조종하지 않는 성향입니다. 공정하고 겸손한 태도로 윤리적 기준을 중요하게 여깁니다. 타인에게 신뢰받으며 진실된 관계를 유지합니다. 하위요인은 진실성, 도덕성, 청렴성, 겸손성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.conscientiousness}>
            <button className={styles.conscientiousnessCircleThree} onClick={() => setIsConscientiousnessOpen(true)}>신중성</button>
            <Modal isOpen={isConscientiousnessOpen} onRequestClose={() => setIsConscientiousnessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#00BFFF" }}>신중성</h4>
              <br />
              <p> 책임감 있고 체계적이며 목표를 성실히 달성하려는 성향입니다. 계획적이고 꼼꼼하며 실수를 최소화하기 위해 노력합니다. 시간 관리와 업무 수행에서 높은 효율성을 보입니다. 하위요인은 치밀성, 근면성, 완벽성, 신중성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.open}>
            <button className={styles.openCircleThree} onClick={() => setIsOpenOpen(true)}>개방성</button>
            <Modal isOpen={isOpenOpen} onRequestClose={() => setIsOpenOpen(false)} style={customStyles}>
              <h4 style={{ color: "#AA00FF" }}>개방성</h4>
              <br />
              <p> 새로운 아이디어와 경험을 탐구하고 창의적인 접근을 선호하는 성향입니다. 예술적 감수성과 호기심이 강하며 독창적인 사고를 지닙니다. 전통적 관습을 넘어 혁신과 변화를 추구합니다. 하위요인은 심미성, 지적 호기심, 창조성, 비관 습성으로 구성되어 있습니다.</p>
            </Modal>
          </div>
          </>
          )}
          {randomNumber === 4 && (
            <>
          <div className={styles.emotionality}>
            <button className={styles.emotionalityCircleFour} onClick={() => setIsEmotionalityOpen(true)}>감정성</button>
            <Modal isOpen={isEmotionalityOpen} onRequestClose={() => setIsEmotionalityOpen(false)} style={customStyles}>
              <h4 style={{ color: "#E69A00" }}>감정성</h4>
              <br />
              <p> 감정적으로 민감하고 스트레스와 위험에 신중히 반응하는 성향입니다. 강한 공감 능력과 정서적 연결을 중요시합니다. 안정과 보호를 추구하며 관계에서 깊은 애착을 보입니다. 하위요인은 두려움, 불안, 의존성, 감수성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.extraversion}>
            <button className={styles.extraversionCircleFour} onClick={() => setIsExtraversionOpen(true)}>외향성</button>
            <Modal isOpen={isExtraversionOpen} onRequestClose={() => setIsExtraversionOpen(false)} style={customStyles}>
              <h4 style={{ color: "#FF6F61" }}>외향성</h4>
              <br />
              <p> 사회적이고 활발하며 타인과의 상호작용을 즐기는 성향입니다. 긍정적인 에너지와 자신감으로 대인관계를 형성합니다. 주목받는 상황에서 편안함을 느끼고 활력을 발산합니다. 하위요인은 표현성, 사회적 대담성, 사회성, 활력성으로 구성되어 있습니다. </p>
            </Modal>
          </div>

          <div className={styles.agreeableness}>
            <button className={styles.agreeablenessCircleFour} onClick={() => setIsAgreeablenessOpen(true)}>우호성</button>
            <Modal isOpen={isAgreeablenessOpen} onRequestClose={() => setIsAgreeablenessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#3EB489" }}>우호성</h4>
              <br />
              <p> 친절하고 타인과 협력하며 갈등을 조화롭게 해결하려는 성향입니다. 관용적이고 배려심이 많아 타인에게 호감을 줍니다. 대인관계에서 신뢰와 존중을 중시합니다. 하위요인은 관용성, 온유성, 융통성, 인내심으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.hFoursty}>
            <button className={styles.honestyCircleFour} onClick={() => setIsHonestyOpen(true)}>진솔성</button>
            <Modal isOpen={isHonestyOpen} onRequestClose={() => setIsHonestyOpen(false)} style={customStyles}>
              <h4 style={{ color: "#676767" }}>진솔성</h4>
              <br />
              <p> 정직성과 도덕성을 중시하며 타인을 속이거나 조종하지 않는 성향입니다. 공정하고 겸손한 태도로 윤리적 기준을 중요하게 여깁니다. 타인에게 신뢰받으며 진실된 관계를 유지합니다. 하위요인은 진실성, 도덕성, 청렴성, 겸손성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.conscientiousness}>
            <button className={styles.conscientiousnessCircleFour} onClick={() => setIsConscientiousnessOpen(true)}>신중성</button>
            <Modal isOpen={isConscientiousnessOpen} onRequestClose={() => setIsConscientiousnessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#00BFFF" }}>신중성</h4>
              <br />
              <p> 책임감 있고 체계적이며 목표를 성실히 달성하려는 성향입니다. 계획적이고 꼼꼼하며 실수를 최소화하기 위해 노력합니다. 시간 관리와 업무 수행에서 높은 효율성을 보입니다. 하위요인은 치밀성, 근면성, 완벽성, 신중성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.open}>
            <button className={styles.openCircleFour} onClick={() => setIsOpenOpen(true)}>개방성</button>
            <Modal isOpen={isOpenOpen} onRequestClose={() => setIsOpenOpen(false)} style={customStyles}>
              <h4 style={{ color: "#AA00FF" }}>개방성</h4>
              <br />
              <p> 새로운 아이디어와 경험을 탐구하고 창의적인 접근을 선호하는 성향입니다. 예술적 감수성과 호기심이 강하며 독창적인 사고를 지닙니다. 전통적 관습을 넘어 혁신과 변화를 추구합니다. 하위요인은 심미성, 지적 호기심, 창조성, 비관 습성으로 구성되어 있습니다.</p>
            </Modal>
          </div>
          </>
          )}
          {randomNumber === 5 && (
            <>
          <div className={styles.emotionality}>
            <button className={styles.emotionalityCircleFive} onClick={() => setIsEmotionalityOpen(true)}>감정성</button>
            <Modal isOpen={isEmotionalityOpen} onRequestClose={() => setIsEmotionalityOpen(false)} style={customStyles}>
              <h4 style={{ color: "#E69A00" }}>감정성</h4>
              <br />
              <p> 감정적으로 민감하고 스트레스와 위험에 신중히 반응하는 성향입니다. 강한 공감 능력과 정서적 연결을 중요시합니다. 안정과 보호를 추구하며 관계에서 깊은 애착을 보입니다. 하위요인은 두려움, 불안, 의존성, 감수성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.extraversion}>
            <button className={styles.extraversionCircleFive} onClick={() => setIsExtraversionOpen(true)}>외향성</button>
            <Modal isOpen={isExtraversionOpen} onRequestClose={() => setIsExtraversionOpen(false)} style={customStyles}>
              <h4 style={{ color: "#FF6F61" }}>외향성</h4>
              <br />
              <p> 사회적이고 활발하며 타인과의 상호작용을 즐기는 성향입니다. 긍정적인 에너지와 자신감으로 대인관계를 형성합니다. 주목받는 상황에서 편안함을 느끼고 활력을 발산합니다. 하위요인은 표현성, 사회적 대담성, 사회성, 활력성으로 구성되어 있습니다. </p>
            </Modal>
          </div>

          <div className={styles.agreeableness}>
            <button className={styles.agreeablenessCircleFive} onClick={() => setIsAgreeablenessOpen(true)}>우호성</button>
            <Modal isOpen={isAgreeablenessOpen} onRequestClose={() => setIsAgreeablenessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#3EB489" }}>우호성</h4>
              <br />
              <p> 친절하고 타인과 협력하며 갈등을 조화롭게 해결하려는 성향입니다. 관용적이고 배려심이 많아 타인에게 호감을 줍니다. 대인관계에서 신뢰와 존중을 중시합니다. 하위요인은 관용성, 온유성, 융통성, 인내심으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.hFivesty}>
            <button className={styles.honestyCircleFive} onClick={() => setIsHonestyOpen(true)}>진솔성</button>
            <Modal isOpen={isHonestyOpen} onRequestClose={() => setIsHonestyOpen(false)} style={customStyles}>
              <h4 style={{ color: "#676767" }}>진솔성</h4>
              <br />
              <p> 정직성과 도덕성을 중시하며 타인을 속이거나 조종하지 않는 성향입니다. 공정하고 겸손한 태도로 윤리적 기준을 중요하게 여깁니다. 타인에게 신뢰받으며 진실된 관계를 유지합니다. 하위요인은 진실성, 도덕성, 청렴성, 겸손성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.conscientiousness}>
            <button className={styles.conscientiousnessCircleFive} onClick={() => setIsConscientiousnessOpen(true)}>신중성</button>
            <Modal isOpen={isConscientiousnessOpen} onRequestClose={() => setIsConscientiousnessOpen(false)} style={customStyles}>
              <h4 style={{ color: "#00BFFF" }}>신중성</h4>
              <br />
              <p> 책임감 있고 체계적이며 목표를 성실히 달성하려는 성향입니다. 계획적이고 꼼꼼하며 실수를 최소화하기 위해 노력합니다. 시간 관리와 업무 수행에서 높은 효율성을 보입니다. 하위요인은 치밀성, 근면성, 완벽성, 신중성으로 구성되어 있습니다.</p>
            </Modal>
          </div>

          <div className={styles.open}>
            <button className={styles.openCircleFive} onClick={() => setIsOpenOpen(true)}>개방성</button>
            <Modal isOpen={isOpenOpen} onRequestClose={() => setIsOpenOpen(false)} style={customStyles}>
              <h4 style={{ color: "#AA00FF" }}>개방성</h4>
              <br />
              <p> 새로운 아이디어와 경험을 탐구하고 창의적인 접근을 선호하는 성향입니다. 예술적 감수성과 호기심이 강하며 독창적인 사고를 지닙니다. 전통적 관습을 넘어 혁신과 변화를 추구합니다. 하위요인은 심미성, 지적 호기심, 창조성, 비관 습성으로 구성되어 있습니다.</p>
            </Modal>
          </div>
          </>
          )}
        </div>
        <div className={styles.description}>
          <h4>검사 설명</h4>
          <br />
          <p>
            {randomNumber === 1 && "감정성과 성실성이 높은 모티님은 정서적으로 민감하고 타인과 깊은 공감 능력을 가지며, 동시에 꼼꼼하고 책임감 있게 행동할 가능성이 높습니다. 혹시 스트레스나 위험에 신중하게 반응하며, 친밀한 관계에서 강한 애착과 보호 본능을 보이지는 않으신가요? 성향에 대한 추가적인 설명을 원하신다면 위에 보이는 성향을 선택해주세요."}
            {randomNumber === 2 && "외향성, 우호성, 개방성이 높은 모티님은 사회적이고 활발하며, 타인과의 관계에서 친절하고 협력적인 동시에, 새로운 경험과 아이디어에 열려 있는 성향을 가질 가능성이 높습니다. 갈등 상황에서도 유연하고 관용적인 태도로 조화를 이루려고 하진 않으신가요? 성향에 대한 추가적인 설명을 원하신다면 위에 보이는 성향을 선택해주세요."}
            {randomNumber === 3 && "진솔성과 개방성이 높은 모티님은 정직하고 공정하며 도덕성을 중시하면서도, 새로운 아이디어와 다양한 경험에 열려 있을 가능성이 있습니다. 타인에 대한 진실된 태도와 윤리적인 기준을 굉장히 중요시 여기진 않으신가요? 성향에 대한 추가적인 설명을 원하신다면 위에 보이는 성향을 선택해주세요."}
            {randomNumber === 4 && "신중성과 개방성이 높은 모티님은 신중하게 판단하고 행동하며, 동시에 새로운 아이디어와 경험을 탐구하는 데 열려 있는 성향일 가능성이 높습니다.  결정을 내릴 때 깊이 숙고하고, 섣부른 행동을 피하는 것을 선호하진 않으신가요? 성향에 대한 추가적인 설명을 원하신다면 위에 보이는 성향을 선택해주세요."}
            {randomNumber === 5 && "우호성과 성실성이 높은 모티님은 타인에게 친절하고 협력적인 태도를 보이면서도, 책임감 있고 꼼꼼하게 자신의 목표를 성실히 수행하는 성향일 가능성이 높습니다. 타인의 의견과 감정을 존중하면서도 자신의 역할과 업무를 훌륭하게 수행하기 위해 노력하시진 않나요? 성향에 대한 추가적인 설명을 원하신다면 위에 보이는 성향을 선택해주세요."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NatureProsecutorPage;
