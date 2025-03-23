
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const depoimentos = [
  {
    nome: "EVELIN BASQUES",
    texto:
      "Eu era bem desorganizada antigamente, trabalhava, ia para o cursinho e estudava no dia seguinte, por isso não absorvia o conteúdo. Quando entrei no Einstein, logo fui apadrinhada, mas sempre tive vergonha de pedir ajuda para as pessoas. Porém, quando meu padrinho ajudou a fazer meu cronograma de estudos, comecei a ver os resultados.",
    curso: "CIÊNCIAS BIOLÓGICAS UFSC",
    imagem: "/evelin.png",
  },
  {
    nome: "CAROL DIAS",
    texto:
      "Uma das lições que vou levar do Einstein é sobre praticar a generosidade. Eu sou uma pessoa que se preocupa muito com os outros e ver isso do Einstein se preocupando com a gente, pra mim, é a parte mais importante.",
    curso: "ECONOMIA UFSC",
    imagem: "/carol-dias-pessoa.png",
  },
  {
    nome: "SINDY DE FREITAS",
    texto:
      "Entrar no Einstein significou que as minhas chances de realizar o sonho de passar na faculdade aumentaram. E que há sim uma luz no fim do túnel. Hoje tenho uma relação de amizade e companheirismo com boa parte do pessoal e de respeito por toda turma.",
    curso: "RELAÇÕES INTERNACIONAIS UFSC",
    imagem: "/sidney-pessoa.png",
  },
];

export default function CarrosselDepoimentos() {
  return (
    <section id="contato" className="w-full h-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        loop
      >
        {depoimentos.map((dep, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center bg-blue-100 p-6 rounded-lg shadow-lg">
              <img
                src={dep.imagem}
                alt={dep.nome}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md mb-4"
              />
              <h2 className="text-xl font-bold">{dep.nome}</h2>
              <p className="text-gray-700 mt-2">{dep.texto}</p>
              <h3 className="font-semibold text-blue-600 mt-4">{dep.curso}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
