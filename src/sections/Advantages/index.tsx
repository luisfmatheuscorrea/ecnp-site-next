import { useState } from "react";
import ReactPlayer from "react-player";
import { DescriptionCenter, TitlesSections, TitleTextBlue } from "../../assets/styles/texts";
import { AdvantageItem } from "../../components/AdvantageItem";
import { BoxThemes } from "../../components/BoxThemes";
import { VideoLayout } from "../../components/VideoLayout";
import { Section } from "./styles";

export function Advantages() {
  return (
    <>
      <Section className='advantages'>
        <VideoLayout url="https://youtu.be/WPuzeEAeIG0" />
        <div className="texts-box">
          <TitlesSections data-aos="zoom-out-left" data-aos-delay="100"><strong>Vantagens</strong> do Curso</TitlesSections>
          <AdvantageItem index={0} description="Tempo dedicado para pensar o ministério público da pregação no contexto das Sagradas Escrituras." image="icons/cronometro.svg"></AdvantageItem>
          <AdvantageItem index={1} description="Estudo de vários conceitos do que vem a ser um sermão bíblico centrado em Cristo e no evangelho, seja no Antigo ou no Novo Testamento." image="icons/book.svg"></AdvantageItem>
          <AdvantageItem index={2} description="Conhecimento das ferramentas básicas para a boa leitura, observação e interpretação de um texto bíblico, respeitando a instrumentalidade das línguas bíblicas." image="icons/brain.svg"></AdvantageItem>
          <AdvantageItem index={3} description="Assuntos como métodos de estudos bíblicos, processos de preparação de sermões bíblicos serão tratados em nosso treinamento." image="icons/pencil.svg"></AdvantageItem>
          <AdvantageItem index={4} description="Familiarização com os passos práticos necessários à boa e eficaz pregação bíblica." image="icons/cross.svg"></AdvantageItem>
        </div>
      </Section>
    </>
  )
}