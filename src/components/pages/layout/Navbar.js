import { Link } from "react-router-dom";
import Container from "../layout/Container";
import logo from "../../../img/logo2.jpg";
import styles from "../layout/Container.module.css";

function NavBar() {
  return (
    <nav>
      <Container className={styles.Container}>
        <Link to="/">
          <img src={logo} className={styles.navbar_img} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/Empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default NavBar;
