import { useEffect, useState } from "react";
import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";
import styles from "../project/ProjectForm.module.css";

function Formulario({ btnText, handleSubmit, projetoData }) {
  const [categoria, setCategoria] = useState([]);
  const [projeto, setprojeto] = useState(projetoData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setCategoria(data);
      })

      .catch((e) => console.log(e));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    //console.log(projeto)
    handleSubmit(projeto);
  };
  function HandleChange(e){
    e.preventDefault()
    setprojeto({...projeto,[e.target.name]:e.target.value})
    console.log(projeto)
  }
  function HandleCategorias(e){
    e.preventDefault()
    setprojeto({
      ...projeto,categorias:{id:e.target.value,name:e.target.options[e.target.selectedIndex].text}
    })
  }
  return (
    <form onSubmit={submit} className={styles.Form}>
      <Input
        type="text"
        name="name"
        text="Nome do Projeto"
        placeholder="Insira o nome do projeto"
        handleOnChange ={HandleChange}
        value={projeto.name?projeto.name.id:''}
      />
      <Input
        type="number"
        name="budget"
        text="Orçamento do Projeto"
        placeholder="Insira o orçamento total do projeto"
        handleOnChange ={HandleChange}
        value={projeto.budget?projeto.budget.id:''}
      />
      <Select
        name="categoria_id"
        text="Selecione a categoria"
        options={categoria}
        handleOnChange={HandleCategorias}
        value={projeto.categorias?projeto.categorias.id:''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default Formulario;
