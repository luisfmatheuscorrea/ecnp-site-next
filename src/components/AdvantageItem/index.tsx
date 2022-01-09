import { DescriptionLeft } from '../../assets/styles/texts';
import { AdvantageItemS, Container } from './styles';

interface AdvantageItemProps {
  index: number,
  description: string,
  image: string,
}

export function AdvantageItem({ description, index, image }:AdvantageItemProps) {
    return(
      <Container>
        <AdvantageItemS data-aos="fade-in-left" data-aos-delay="200" index={index}>
          <div className="circle-icon">
            <img src={image} alt="Icone" />
          </div>
          <DescriptionLeft>{description}</DescriptionLeft>
        </AdvantageItemS>
      </Container>
    );
}