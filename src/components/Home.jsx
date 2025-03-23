import doisAlunos from '/2-alunos-eisntain.png';

function Home() {
  return (
    <section id="home" className="home">
      <img src={doisAlunos} alt="Dois Alunos Einstein" />
      <h1>Prazer, nós somos o Einstein Floripa!</h1>
      <p>Uma equipe de universitários determinada a mudar vidas...</p>
    </section>
  );
}

export default Home;
