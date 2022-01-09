import { DescriptionLeft, TitlesSections } from "../../assets/styles/texts";
import { Section } from "./styles";

export function Why() {
  return (
    <>
      <Section className='why'>
        <div className="box-title">
          <TitlesSections data-aos="zoom-out-right" data-aos-delay="100">Sabe o <strong>porque</strong> de fazer o curso?</TitlesSections>
          <DescriptionLeft data-aos="zoom-out-right" data-aos-delay="150">O curso visa auxiliar a todos os estudantes de Bíblia, experientes e iniciantes, em seus estudos e pregações, para que possam desenvolver e distribuir sermões fielmente baseados na Bíblia, de um modo claro e aplicado aos dias atuais.</DescriptionLeft>
        </div>
        <div className="box-image">
          <img data-aos="zoom-in-left" data-aos-delay="200" src="images/happy-man.png" alt="Foto de um Homem Aprovando" />
        </div>
      </Section>
    </>
  )
}