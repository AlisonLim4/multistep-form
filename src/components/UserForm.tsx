import React from "react";
import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <div className={styles.formControlContainer}>
      <div className={styles.formControl}>
        <input
          type="text"
          name="text"
          id="nome"
          placeholder="Digite seu nome"
          required
        />
      </div>

      <div className={styles.formControl}>
        <input
          type="text"
          name="text"
          id="email"
          placeholder="Digite seu email"
          required
        />
      </div>

      <div className={styles.formControl}>
        <input
          type="text"
          name="text"
          id="telefone"
          placeholder="Digite seu telefone"
          required
        />
      </div>
    </div>
  );
};

export default UserForm;
