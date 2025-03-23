import alunos from '/conjunto-de-imagens.png';

function Sobre() {
  return (
    <section id="sobre" className="h-[500px] flex flex-col items-center justify-center text-center bg-white">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Prazer, nós somos o Einstein Floripa!</h2>
      <div className="flex">
        <img src={alunos} alt="Equipe reunida" className="w-[400px] h-[400px] rounded-lg mb-4" />
        <p className="text-lg text-gray-600 max-w-xl text-right">

Somos constituídos de uma equipe repleta de universitários determinados, imersos numa experiência de constante aprendizado, ampliando suas possibilidades pessoais e profissionais.<br/><br/>

Desse modo, voltamos nossos esforços para dar oportunidades aos alunos de baixa renda da região da Grande Florianópolis, fornecendo melhores oportunidades de acesso ao ensino superior de qualidade. <br/><br/>

Nossos primeiros resultados foram incríveis, 48% dos nossos alunos foram aprovados em 2015 e no ano de 2016 atingimos um índice ainda maior, foram aprovados em universidades públicas 70% dos nossos alunos. Neste ano e nos próximos, queremos ainda mais! <br/><br/>

</p>
      </div>
    </section>
  );
}

export default Sobre;
