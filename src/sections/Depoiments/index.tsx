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
      name: 'Patrícia Viana',
      depoiment: 'Muito útil para montar uma pregação sem sair da verdade bíblica.  Esclarecedor e muito diferente do que aprendi no seminário. Recomendo para que mais pregadores proclamem a Palavra de Deus com segurança, verdade e dedicação.',
    },
    {
      name: 'Patrícia Viana',
      depoiment: 'Muito útil para montar uma pregação sem sair da verdade bíblica.  Esclarecedor e muito diferente do que aprendi no seminário. Recomendo para que mais pregadores proclamem a Palavra de Deus com segurança, verdade e dedicação.',
    },
    {
      name: 'Patrícia Viana',
      depoiment: 'Muito útil para montar uma pregação sem sair da verdade bíblica.  Esclarecedor e muito diferente do que aprendi no seminário. Recomendo para que mais pregadores proclamem a Palavra de Deus com segurança, verdade e dedicação.',
    },
    {
      name: 'Patrícia Viana',
      depoiment: 'Muito útil para montar uma pregação sem sair da verdade bíblica.  Esclarecedor e muito diferente do que aprendi no seminário. Recomendo para que mais pregadores proclamem a Palavra de Deus com segurança, verdade e dedicação.',
    },
    {
      name: 'Patrícia Viana',
      depoiment: 'Muito útil para montar uma pregação sem sair da verdade bíblica.  Esclarecedor e muito diferente do que aprendi no seminário. Recomendo para que mais pregadores proclamem a Palavra de Deus com segurança, verdade e dedicação.',
    },
  ];

  return (
    <>
      <Section className='depoiments'>
        <div className="box-texts">
          <TitlesSectionsCenter data-aos="zoom-out-right" data-aos-delay="100">O que os <strong>nossos alunos</strong> tem a<br/>dizer sobre o curso?</TitlesSectionsCenter>
          <DescriptionCenter data-aos="zoom-out-up" data-aos-delay="150">Veja o depoimento de alguns dos nosso alunos</DescriptionCenter>
        </div>
        <DepoimentCarousel slides={slides} />
      </Section>
    </>
  )
}