import React from "react";
import styles from "./Steps.module.css";

import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

interface StepsProps {
  currentStep: number;
  maxSteps: number;
}
const Steps = ({ currentStep, maxSteps }: StepsProps) => {
  return (
    <div className={styles.steps}>
      <div className={styles.step}>
        <AiOutlineUser />
     
      </div>
      <div className={styles.step}>
        <AiOutlineStar />
       
      </div>
      <div className={styles.step}>
        <FiSend />
       
      </div>
    </div>
  );
};

export default Steps;
