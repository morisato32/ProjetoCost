import styles from "../pages/Home.module.css";
import logo from "../../img/cost.avif";
import LinkButton from "./layout/linkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Cost</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <img src={logo} className={styles.img_home} alt="logo" />
      <LinkButton to="/NovoProjeto" text="Criar Projeto" />
    </section>
  );
}

export default Home;
