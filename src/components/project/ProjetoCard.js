import styles from "../project/ProjetoCard.module.css";
import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjetoCard({ id, name, budget, categorias, handleRemove }) {

  const remove =(e) =>{
    e.preventDefault()
    handleRemove(id)
  }
  return (
    <div className={styles.projetoCard}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento: R${budget}</span>
      </p>
      <p>
        <span className={`${styles[categorias]}`}></span>
        {categorias}
      </p>
      <di>
       <Link to="/">Editar
        <BsPencil/>
        </Link>
        <button onClick={remove}>
            Excluir<BsFillTrashFill/>
        </button>
      </di>
    </div>
  );
}

export default ProjetoCard;
