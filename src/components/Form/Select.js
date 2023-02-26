import styles from "../Form/Select.module.css";

function Select({ text, name, value, handleOnChange, options }) {
  return (
    <div className={styles.Form_select}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value }>
        <option>Selecione uma opção</option>
        {options.map((option)=>(
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
