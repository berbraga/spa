import { Link } from 'react-scroll';
// import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Início</Link></li>
          <li><Link to="sobre" smooth={true} duration={500}>Nossa Equipe</Link></li>
          <li><Link to="resultados" smooth={true} duration={500}>Resultados</Link></li>
          <li><Link to="contato" smooth={true} duration={500}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
