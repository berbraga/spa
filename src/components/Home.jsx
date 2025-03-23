import doisAlunos from '/2-alunos-eisntain.png';
import Alunos from '/alunos-eistain.jpeg';

function Home() {
  return (
    <section
      id="home"
      className=" h-[498px] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${Alunos})` }}
    >

      {/* Conteúdo da seção */}
      <div className="relative z-10 flex  items-center">
        <p className="text-lg mt-2 max-w-xl">Seja um Voluntário!</p>
        <img src={doisAlunos} alt="Dois Alunos Einstein" className="w-120 mb-6" />
        <p className="text-lg mt-2 max-w-xl">
          Seja um Aluno!
        </p>
      </div>
    </section>
  );
}

export default Home;
