import alunos from '/alunos-eistain.jpeg';

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <h2>Nossa Equipe</h2>
      <img src={alunos} alt="Equipe reunida" />
      <p>Somos uma equipe de universitários...</p>
    </section>
  );
}

export default Sobre;
