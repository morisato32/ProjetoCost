import styles from "../Form/Submit.module.css";

function SubmitButton({ text}) {
  return (
    <div>
      <button className={styles.Form_btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;
