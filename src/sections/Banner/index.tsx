import { Link } from "react-scroll";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import { DescriptionBanner, TitleBanner } from "../../assets/styles/texts";
import { CountPagination } from "../../components/CountPagination";
import { Button, Section } from "./styles";

export function Banner() {
  return (
    <>
      <Section className='hero'>
        <div className="box">
          <TitleBanner data-aos="zoom-out-right" data-aos-delay="300">
            <strong>Pregar Expositivamente</strong> agora ficou muito mais fácil!
          </TitleBanner>
          <DescriptionBanner data-aos="zoom-out-right" data-aos-delay="400">
            Com o que é ensinado no curso você poderá compor pregações bíblicas e relevantes para o contexto atual de forma prática
          </DescriptionBanner>
          <Link data-aos="zoom-out-right" data-aos-delay="500" to="investiment" spy={true} smooth={true} duration={500}>
            <Button>
              Inscrever-se
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}