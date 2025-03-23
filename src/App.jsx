import Header from './components/Header';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Resultados from './components/Resultados';
import Contato from './components/Contato';
import LogoBranca from '/logo-branca.png';

function App() {
  return (
    <div className="w-[1000px] h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory flex flex-col justify-center ">
      <Header />
      <Home />
      <div className="h-[100px] w-full  flex justify-center" style={{backgroundColor: '#CEEBF1'}}>
        <img src={LogoBranca} alt="logo do Einstain Floripa" className="w-[380px]  object-contain flex justify-center" />
      </div>
      <Sobre />
      <div className=" w-full  flex justify-center" style={{backgroundColor: '#CEEBF1'}}>
        <p className="h-[114px]"> &nbsp;</p>
      </div>

      <Resultados />
      <div className=" w-full  flex justify-center" style={{backgroundColor: '#CEEBF1'}}>
        <p className="h-[114px]"> &nbsp;</p>
      </div>
      <Contato /> 
      <div className=" w-full  flex justify-center" style={{backgroundColor: '#011E30'}}>
        <p className="h-[114px]"> &nbsp;</p>
      </div>
    </div>
  );

}


export default App;
