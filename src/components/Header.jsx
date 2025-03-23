import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 z-50 ">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer border-2 border-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-all"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="sobre"
              smooth={true}
              duration={500}
              className="cursor-pointer border-2 border-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-all"
            >
              Nossa Equipe
            </Link>
          </li>
          <li>
            <Link
              to="resultados"
              smooth={true}
              duration={500}
              className="cursor-pointer border-2 border-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-all"
            >
              Resultados
            </Link>
          </li>
          <li>
            <Link
              to="contato"
              smooth={true}
              duration={500}
              className="cursor-pointer border-2 border-blue-900 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-all"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
