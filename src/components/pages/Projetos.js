import { useLocation } from "react-router-dom";
import Message from "../pages/layout/Message";
import styles from "../pages/Projeto.module.css";
import Loading from "./layout/Loading";
import LinkButton from "./layout/linkButton";
import ProjetoCard from "../project/ProjetoCard";
import { useState, useEffect } from "react";

function Projetos() {
  const [projeto, setprojeto] = useState([]);
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const[projetoMensagem,setProjetoMensagem] =useState('')

  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
  setTimeout(() => {
    fetch("http://localhost:5000/projetos", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
        setprojeto(data);
        setLoading(true);
      })
      .catch((e) => console.log(e));
    
  },1000);
  }, []);

 function RemoverProjeto(id){
  fetch(`http://localhost:5000/projetos/${id}`,{
    method:"DELETE",
    headers:{
      "Content-type":"application/json"
    }
  })
  .then(resposta => resposta.json())
  .then(() =>{
    setprojeto(projeto.filter((projeto) => projeto.id !== id))
    setProjetoMensagem("Projeto removido com sucesso!")
  }).catch((e) => console.log(e))
 }

  return (
    <div className={styles.projeto}>
      <div>
        <h1>Meus projetos </h1>
      </div>
      <LinkButton to="/NovoProjeto" text="Criar Projeto" />
      {message && <Message type="sucesso" msg={message} />}
      {projetoMensagem && <Message type="sucesso" msg={projetoMensagem} />}
      
      {projeto.length > 0 &&
        projeto.map((projeto) => (
          <ProjetoCard
            id={projeto.id}
            name={projeto.name}
            budget={projeto.budget}
            categorias={projeto.categorias.name}
            key={projeto.id}
            handleRemove={RemoverProjeto}
          />
          
        ))}
        {!loading && <Loading/>}
        {loading && projeto.length === 0 &&(
          <h3>Não há projetos cadastrados</h3>
        )}
    </div>
  );
}

export default Projetos;
