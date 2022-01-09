import { Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoLayoutS, Container } from './styles';
import { FiPause, FiPlay } from 'react-icons/fi'

interface VideoLayoutProps {
  url: string,
}

export function VideoLayout({ url }:VideoLayoutProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const player = useRef<ReactPlayer>();

  const [elapsedTime, setElapsedTime] = useState('')
  const [duration, setDuration] = useState('')
  const [showTooltip, setShowTooltip] = useState(false)

  function handleSetProgress(state) {
    var minutes = (state.playedSeconds / 60).toFixed(2).split('.')[0];
    var seconds = (state.playedSeconds / 60).toFixed(2).split('.')[1];

    setProgress(state.played * 100);
    setElapsedTime(`${minutes}:${seconds}`);
  }

  function handleSetDuration(value) {
    var minutes = (value / 60).toFixed(2).split('.')[0];
    var seconds = (value / 60).toFixed(2).split('.')[1];

    setDuration(`${minutes}:${seconds}`);
  }

  function handleChange(value) {
    // setIsPlaying(false);
    player.current.seekTo(value / 100, 'fraction');
    setProgress(value);
  }
  
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
          <ReactPlayer
            ref={player} 
            className="react-player" 
            onPlay={() => setIsPlaying(true)} 
            onPause={() => setIsPlaying(false)}
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  controls: 0,
                  modestbranding: 1,
                  rel: 0,
                }
              }
            }}
            progressInterval={10} 
            onDuration={handleSetDuration}
            onProgress={handleSetProgress} 
            playing={isPlaying} 
            url={url} 
            width='99.5%' 
            height='18.7rem' 
            pip 
          />
          <div className="controls">
            {isPlaying ? <FiPause onClick={() => setIsPlaying(false)} fontSize="2rem" className='icon-player' /> : <FiPlay onClick={() => setIsPlaying(true)} fontSize="2rem" className='icon-player' />}
            <Slider className='slider-player' focusThumbOnChange={false} onChange={handleChange} colorScheme='orange' defaultValue={0} value={progress}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg='orange.500'
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`${elapsedTime}`}
              >
                <SliderThumb />
              </Tooltip>
              {/* <p className='elapsed'>{elapsedTime}</p>
              <p className='duration'>{duration}</p> */}
            </Slider>
          </div>
        </div>
        <div className="blue-ball" data-aos="zoom-out-up" data-aos-delay="200"></div>
      </VideoLayoutS>
    </Container>
  );
}