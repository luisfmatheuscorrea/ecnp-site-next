
import { TitlesSections } from "../../assets/styles/texts";
import { InvestimentItem } from "../../components/InvestimentItem";
import { Button } from "../Banner/styles";
import { Section } from "./styles";

export function Investiment() {
  function goToSubscription() {
    window.open('https://api.whatsapp.com/send?1=pt_br&phone=5524999134517&text=%22Ol%C3%A1,%20vim%20pelo%20site%20e%20estou%20interessado%20em%20me%20inscrever%20no%20curso%20de%20prega%C3%A7%C3%A3o!%22', 'blank')
  }

  return (
    <>
      <Section className='investiment'>
        <div className="box">
          <TitlesSections data-aos="zoom-out-right" data-aos-delay="100">E quanto é o <strong>investimento</strong><br/> para o curso?</TitlesSections>
          <div className="grid">
            <InvestimentItem description="Video aulas" />
            <InvestimentItem description="Tutoria Online" />
            <InvestimentItem description="Facilidade de estudo a qualquer hora e em qualquer lugar" />
            <InvestimentItem description="Material didático" />
          </div>
          {/* <TitlesSections data-aos="zoom-out-right" data-aos-delay="200">Preço promocional<br/><strong>R$</strong><strong className="big">200</strong><strong>,00</strong> ou <strong className="big">5</strong><strong>x R$</strong><strong className="big">40</strong><strong>,00</strong></TitlesSections> */}
          <Button data-aos="zoom-out-right" data-aos-delay="250" extended onClick={goToSubscription}>Inscrever-se</Button>
        </div>
        <div className="box-image">
          <img data-aos="zoom-out-left" data-aos-delay="300" src="images/pr-speaking.png" alt="Foto Pr. Luis Filipe" />
        </div>
      </Section>
    </>
  )
}