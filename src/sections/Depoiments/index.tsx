import { DescriptionCenter, TitlesSectionsCenter } from "../../assets/styles/texts";
import { DepoimentCarousel } from "../../components/DepoimentCarousel";
import { Section } from "./styles";

interface DepoimentSlides {
  name: string,
  depoiment: string,
}

export function Depoiments() {
  const slides:DepoimentSlides[] = [
    {
      name: 'Valéria Passos',
      depoiment: 'Foi útil pra mim no sentido de me ensinar a organizar um texto bíblico e apontar a ideia central do texto. Por que neste curso a pessoa irá aprender as formas básicas de organização de um texto e vai aprimorar seus conhecimentos.',
    },
    {
      name: 'Pr. Antônio Paulo da Costa',
      depoiment: 'Foi útil para mim, porque despertou o que está no meu coração, o priorizar essa graça salvadora, coisa rara em nossos dias. Eu recomendo esse curso, porque através dele quem participar terá a noção de que quem prega a Palavra deve ter conhecimento Dela, e que nunca deve ser fundamentada em conceitos humanos.',
    },
    {
      name: 'Patrícia Viana',
      depoiment: 'Muito útil para montar uma pregação sem sair da verdade bíblica.  Esclarecedor e muito diferente do que aprendi no seminário. Recomendo para que mais pregadores proclamem a Palavra de Deus com segurança, verdade e dedicação.',
    },
    {
      name: 'Enezir Velasco de Oliveira',
      depoiment: 'O curso me ajudou a compreender a necessidade de conhecer, com profundidade, o conteúdo bíblico, como me inteirar da situação vivida na época, pelos homens que a escreveram, e ainda por aqueles que vivenciaram e testemunharam os feitos de Jesus. Além disso, a importância de transmitirmos com fidelidade, hoje, a verdadeira história bíblica, de Genesis à Apocalipse: "o homem foi criado para... glorificar o Criador. Com a queda, anunciar a vinda de Jesus para resgatar o homem à voltar-se para o Criador". Em Resumo, essa é a verdadeira mensagem a ser pregada. Isso é pregar o verdadeiro evangelho. Eu recomendo o curso "Eu Creio na Pregação", porque é apresentado ferramentas necessárias para um melhor entendimento e aprofundamento;  abre novos horizontes; é claro; temos a liberdade de fazer perguntas e sanar dúvidas; as aulas  são gravadas, recebemos os links, e no final ficamos com um vasto material para consulta sempre que necessário; além dos exemplos através de videos e pregações que nos ajudam na compreensão do que está sendo ensinado. Para mim trouxe, também, edificação espiritual.',
    },
    {
      name: 'Wolney Miranda',
      depoiment: 'É um curso bastante relevante. Me ajudou a entender e a desenvolver,  principalmente, a Pregação Expositiva. Recomendo. Porque é um curso sério, preocupado em ensinar  os alunos em uma cosmovisão bíblica e atualizada. O valor do curso é acessível a todos que interessar, o estudo aplicado é de fácil entendimento , por mais que foi on-line, não apresentou nenhuma dificuldade de entendimento e interação, professor/pastor é conhecedor do assunto e tem muito manejo em ensinar, tornando as aulas prazerosas e compreensíveis e por fim, para aqueles que querem aprender para ensinar, não perca tempo. Inscrevam-se e aproveitem o máximo que puder.',
    },
    {
      name: 'Bruno Urubatan Rangel Da Silva',
      depoiment: 'O curso eu creio na pregação mudou a minha maneira de ler as escrituras e de montar o meu sermão, hoje tenho uma visão mais aprofundada e consigo ser mais fiel as escrituras Eu recomendo o curso, pois, a palavra de Deus é verdadeira e o anunciador desse evangelho precisa saber o que está pregando, e aí fazer o curso você terá um divisor de águas e será mais eficiente na pregação.',
    },
    {
      name: 'Célia Aparecida Alvarez Cota',
      depoiment: 'O Curso ECNP foi um grande desafio, impactante, e tremendamente didático e contemporâneo aprendi muito sempre que possível revejo o material. Recomendo o curso, tanto que 2 irmãos já estão matriculados para serem poderosamente abençoados A razão é que este curso além de ser extremamente esclarecedor será um divisor de águas àqueles que se dispuserem para tanto. Louvo a Deus pela vida do Pr. Luis Filipe.',
    },
    {
      name: 'Marco Antônio Pires de Carvalho',
      depoiment: 'O curso Creio na Pregação caiu na minha vida pôr misericórdia do senhor, e pela grande irmã Enezir. O curso foi e está sendo  muito importante e útil, não só pôr ler a palavra do Senhor, mais também para entender e passar a diante o real sentindo do texto, dentro da palavra do Senhor, a Bíblia Sagrada. Não só recomendo, como já passei para vários amigos e irmãos. A forma com que o Pr. Felipe coloca as aulas é muito interessante e prática. Quando paramos para analisar, surge o esclarecimento do Espírito Santo.',
    },
    {
      name: 'Ana Cláudia Marins',
      depoiment: 'Foi útil pelo conhecimento de técnicas e da organização do pensamento diante do texto bíblico. Foi como que cortinas abrindo me permitindo contemplar como a pregação requer muitos detalhes, cuidado, sensibilidade, temor e tremor. Pela responsabilidade em pregar a Palavra, penso que quem almeja ou vislumbra esse chamado em sua caminhada, não terá condições de faze-lo sem chamado e preparo. O chamado é com Deus. O preparo, nós providenciamos.',
    },
  ];

  return (
    <>
      <Section className='depoiments'>
        <div className="box-texts">
          <TitlesSectionsCenter data-aos="zoom-out-right" data-aos-delay="100">O que os <strong>nossos alunos</strong> tem a<br/>dizer sobre o curso?</TitlesSectionsCenter>
          <DescriptionCenter data-aos="zoom-out-up" data-aos-delay="150">Arraste para o lado e veja o depoimento<br/>de alguns dos nosso alunos</DescriptionCenter>
        </div>
        <DepoimentCarousel slides={slides} />
      </Section>
    </>
  )
}