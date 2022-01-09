import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoLayoutS, Container } from './styles';

interface VideoLayoutProps {
  url: string,
}

export function VideoLayout({ url }:VideoLayoutProps) {
  const [isPlaying, setIsPlaying] = useState(false);  
  
  return(
    <Container>
      <VideoLayoutS data-aos="zoom-out-up" data-aos-delay="100">
        <div className="orange-ball" data-aos="zoom-out-up" data-aos-delay="200"></div>
        <div className="tab-bar" data-aos="zoom-out-up" data-aos-delay="100">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="maximize"></div>
        </div>
        <div className="window" data-aos="zoom-out-up" data-aos-delay="100">
          <ReactPlayer className="react-player" playing={isPlaying} url={url} width='99.5%' height='18.7rem' pip />
          <div className="controls">
            <img src="play-button.svg" alt="Play" />
            <Slider colorScheme='orange' defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </div>
        <div className="blue-ball" data-aos="zoom-out-up" data-aos-delay="200"></div>
      </VideoLayoutS>
    </Container>
  );
}