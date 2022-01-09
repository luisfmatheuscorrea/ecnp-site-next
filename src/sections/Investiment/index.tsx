
import { TitlesSections } from "../../assets/styles/texts";
import { InvestimentItem } from "../../components/InvestimentItem";
import { Button } from "../Banner/styles";
import { Section } from "./styles";

export function Investiment() {
  return (
    <>
      <Section className='investiment'>
        <div className="box">
          <TitlesSections data-aos="zoom-out-right" data-aos-delay="100">E quanto é o <strong>investimento</strong><br/> para o curso?</TitlesSections>
          <div className="grid">
            <InvestimentItem description="60 vídeos de aproximadamente 30 minutos" />
            <InvestimentItem description="4 aulas extras" />
            <InvestimentItem description="Facilidade de estudo a qualquer hora e em qualquer lugar" />
            <InvestimentItem description="Material didático" />
            <InvestimentItem description="Suporte de um semestre letivo" />
            <InvestimentItem description="Acesso ilímitado" />
          </div>
          <TitlesSections data-aos="zoom-out-right" data-aos-delay="200">Tudo isso por apenas<br/><strong>R$</strong><strong className="big">199</strong><strong>,95</strong> ou <strong className="big">5</strong><strong>x R$</strong><strong className="big">39</strong><strong>,99</strong></TitlesSections>
          <Button data-aos="zoom-out-right" data-aos-delay="250" extended>Inscrever-se</Button>
        </div>
        <div className="box-image">
          <img data-aos="zoom-out-left" data-aos-delay="300" src="images/pr-speaking.png" alt="Foto Pr. Luis Filipe" />
        </div>
      </Section>
    </>
  )
}