import styles from "../Form/Input.module.css";

function Input({ type, placeholder, text, name, value, handleOnChange }) {
  return (
    <div className={styles.Form_controle}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        id={name}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
