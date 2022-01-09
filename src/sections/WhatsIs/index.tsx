import { DescriptionCenter, TitlesSections } from "../../assets/styles/texts";
import { BoxThemes } from "../../components/BoxThemes";
import { Section } from "./styles";

export function WhatsIs() {
  return (
    <>
      <Section className='whats-is'>
        <div className="box-title">
          <TitlesSections data-aos="zoom-out-right" data-aos-delay="100">O que é o <strong>ECNP</strong>?</TitlesSections>
          <DescriptionCenter data-aos="zoom-out-up" data-aos-delay="150">Neste curso iremos da preparação à entrega do sermão, considerando passo a passo cada etapa importante para a composição de pregações bíblicas e relevantes para o contexto atual. Parafraseando John Stott, pregar é construir pontes entre o mundo bíblico e o mundo contemporâneo, respondendo as perguntas de hoje com as respostas bíblicas.</DescriptionCenter>
        </div>
        <div className="box-boxs">
          <BoxThemes image="icons/reading.svg" title="Teologia Bíblica da Pregação" description="O modo como enxergamos as Escrituras determina a maneira como a proclamamos. Tanto a leitura, como a interpretação e a pregação precisam ser feitas no temor do Senhor." />
          <BoxThemes image="icons/person_brain.svg" title="Princípios de Interpretação e Exposição Bíblica" description="O modo como enxergamos as Escrituras determina a maneira como a proclamamos. Tanto a leitura, como a interpretação e a pregação precisam ser feitas no temor do Senhor." />
          <BoxThemes image="icons/speaking.svg" title="Pregações Relevantes e Transformadoras" description="Se os pregadores são os responsáveis por comunicar Cristo em todos os momentos, de muitas maneiras e a todas as pessoas, é urgente que tais discípulos se reciclem para que seus sermões sejam mais bíblicos, relevantes e transformadores." />
        </div>
      </Section>
    </>
  )
}