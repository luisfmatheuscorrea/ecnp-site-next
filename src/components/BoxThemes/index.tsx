import { DescriptionCenter, TitleBoxs, TitleTextYellow } from '../../assets/styles/texts';
import { BoxThemesS, Container } from './styles';

interface BoxThemesProps {
  title: string,
  description: string,
  image: string,
}

export function BoxThemes({ title, description, image }:BoxThemesProps) {
    return(
      <Container>
        <BoxThemesS data-aos="zoom-out-up" data-aos-delay="200" image={image}>
          <div className="circle-icon">
            <img src={image} alt="Icone" />
          </div>
          <TitleBoxs>{title}</TitleBoxs>
          <DescriptionCenter>{description}</DescriptionCenter>
        </BoxThemesS>
      </Container>
    );
}