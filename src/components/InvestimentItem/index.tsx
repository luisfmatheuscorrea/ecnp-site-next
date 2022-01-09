import { DescriptionLeft } from '../../assets/styles/texts';
import { InvestimentItemS, Container } from './styles';

interface InvestimentItemProps {
  description: string,
}

export function InvestimentItem({ description }:InvestimentItemProps) {
    return(
      <Container>
        <InvestimentItemS data-aos="fade-in-right" data-aos-delay="150">
          <div className="circle-icon">
            <img src="icons/check.svg" alt="Icone" />
          </div>
          <DescriptionLeft>{description}</DescriptionLeft>
        </InvestimentItemS>
      </Container>
    );
}