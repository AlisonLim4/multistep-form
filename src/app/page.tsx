"use client";
// Components
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "@/components/UserForm";
import ReviewForm from "@/components/ReviewForm";
import Thanks from "@/components/Thanks";

// Hooks
import { useForm } from "../hooks/useForm";

// CSS
import styles from "./page.module.css";
import Steps from "@/components/Steps";

export default function Home() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className={styles.page}>
      <main>
        <div className={styles.header}>
          <h2>Briefing</h2>
          <p>Deixe me saber mais para que e possa te ajudar</p>
        </div>
        <div className={styles.formContainer}>
          <Steps currentStep={currentStep} maxSteps={formComponents.length} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className={styles.inputsContainer}>{currentComponent}</div>
            <div className={styles.actions}>
              {!isFirstStep && (
                <button
                  className={styles.buttonWithIcon}
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}

              {!isLastStep ? (
                <button className={styles.buttonWithIcon} type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button className={styles.buttonWithIcon} type="submit">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
