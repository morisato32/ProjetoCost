//usado para fazer redirect método post
import { useNavigate } from "react-router-dom";
//folha de estilo dá pagina novoprojeto
import styles from "../pages/NovoProjeto.module.css";
//importando o formulario
import Formulario from "../project/ProjectForm";

function NovoProjeto() {
  const history = useNavigate();

  function createPost(projeto) {
    //inicializando o cost e o servico
    projeto.cost = 0;
    projeto.servico = [];

    fetch("http://localhost:5000/projetos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //mandando os dados para o servidor no body
      body:JSON.stringify(projeto)
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
        //history redireciona para a página projetos
        history('/projetos',{state:{message:"Projeto criado com sucesso!"}})
      })
      .catch((e) => console.log(e));
  }
  return (
    <div className={styles.novoProjeto}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços</p>
      <Formulario handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NovoProjeto;
