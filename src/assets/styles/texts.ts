import styled from "styled-components";
import { colors } from "./global";

export const TitleBanner = styled.h1`
  font-weight: 800;
  font-size: 2.625rem;
  color: ${colors.secondary};
  line-height: 3.125rem;

  strong {
    color: ${colors.primary};
  }
`

export const TitleBoxs = styled.h4`
  font-weight: 800;
  font-size: 1.063rem;
  color: ${colors.secondary};
  line-height: 1.25rem;
  text-align: center;

  strong {
    color: ${colors.primary};
  }
`

interface DepoimentsProps {
  selected?: boolean,
}

export const InitialsDepoiments = styled.h4<DepoimentsProps>`
  font-weight: 800;
  font-size: ${props => props.selected ? '1.875rem' : '1.25rem'};
  color: ${colors.secondary};
  line-height: 2.281rem;
`

export const TitleDepoiments = styled.h4<DepoimentsProps>`
  font-weight: 800;
  font-size: ${props => props.selected ? '1rem' : '0.688rem'};
  margin-top: ${props => props.selected ? '0.5rem' : '0'};
  text-align: ${props => props.selected ? 'left' : 'center'};
  color: ${colors.secondary};
  line-height: 1.25rem;
`

export const DescriptionBanner = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: ${colors.secondary};
  line-height: 1.219rem;

  strong {
    color: ${colors.primary};
  }
`

export const TextButton = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  color: ${colors.secondary};
  line-height: 1.375rem;
`

export const DescriptionCenter = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: ${colors.secondary};
  line-height: 1.25rem;
  text-align: center;
`

export const DescriptionLeft = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: ${colors.secondary};
  line-height: 1.25rem;
  text-align: left;
`

export const TitlesSections = styled.h3`
  font-weight: 800;
  font-size: 2rem;
  color: ${colors.secondary};
  line-height: 2.438rem;

  strong {
    color: ${colors.primary};
    
    .big {
      font-size: 2.25rem;
    }
  }
`

export const TitlesSectionsCenter = styled.h3`
  font-weight: 800;
  font-size: 2rem;
  color: ${colors.secondary};
  line-height: 2.438rem;
  text-align: center;

  strong {
    color: ${colors.primary};
  }
`

export const DescriptionBox = styled.h4``;
export const DescriptionCarousel = styled.h4``;
export const DescriptionDepoiment = styled.h4``;
export const TextFooterTop = styled.h4``;
export const TitleCarousel = styled.h4``;
export const TitleDepoiment = styled.h4``;
export const TitleSectionBlue = styled.h4``;
export const TitleSectionWhite = styled.h4``;
export const TitleTextBlue = styled.h4``;
export const TitleTextYellow = styled.h4``;
