import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ControllerButton, PaginationButton } from './styles';
import { EmblaDiv, SliderDiv } from "./embla";
import { colors } from "../../assets/styles/global";
import { DescriptionDepoiment, DescriptionLeft, TitleDepoiment, TitleDepoiments, TitleTextYellow } from "../../assets/styles/texts";

interface DepoimentCarouselProps {
  slides: DepoimentSlides[],
}

interface DepoimentSlides {
  name: string,
  image?: string,
  depoiment: string,
}

export function DepoimentCarousel({ slides }:DepoimentCarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false, align: "center" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  function goToDepoiment(index: number) {
    scrollTo(index)
  }

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return(
    <>
      <SliderDiv className="embla">
        {/* <ControllerButton onClick={scrollPrev} enabled={prevBtnEnabled}>
          <FiChevronLeft className="icon" color={prevBtnEnabled ? colors.primaryYellow : colors.primaryGreyDark} />
        </ControllerButton> */}
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <EmblaDiv selected={index === selectedIndex} className="embla__slide" key={index}>
                <div data-aos="zoom-out-up" data-aos-delay={index === selectedIndex ? '200' : '250'} className="embla__slide__inner">
                  <div className="embla__slide__div">
                    <div className="text-box">
                      {slide.image ? <img
                        src={`images/depoiments/0.jpg`}
                        alt=""
                      /> : <div className="circle-initials">{slide.name.split(' ')[0].substring(0, 1) + slide.name.split(' ')[slide.name.split(' ').length - 1].substring(0, 1)}</div>}
                      <TitleDepoiments selected={index === selectedIndex}>{slide.name}</TitleDepoiments>
                    </div>
                    <p>{slide.depoiment}</p>
                  </div>
                </div>
              </EmblaDiv>
            ))}
          </div>
        </div>
        {/* <ControllerButton onClick={scrollNext} enabled={nextBtnEnabled}>
          <FiChevronRight className="icon" color={nextBtnEnabled ? colors.primaryYellow : colors.primaryGreyDark} />
        </ControllerButton> */}
        {/* <SliderDots>
          {scrollSnaps.map((_, index) => (
            <PaginationButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </SliderDots> */}
      </SliderDiv>
    </>
  );
}