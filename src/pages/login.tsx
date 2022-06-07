import { motion } from 'framer-motion';
import { Bg, BoxLogin, Container } from '../assets/styles/pages/login';
import {
  DescriptionCenter,
  TitlesSections,
  TitlesSectionsCenter,
} from '../assets/styles/texts';
import InputField from '../components/InputField';
import { Advantages } from '../sections/Advantages';
import { Banner } from '../sections/Banner';
import { Depoiments } from '../sections/Depoiments';
import { Investiment } from '../sections/Investiment';
import { WhatsIs } from '../sections/WhatsIs';
import { Why } from '../sections/Why';

export default function Login() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Container>
        <Bg />
        <BoxLogin>
          <TitlesSections>Olá, seja bem-vindo!</TitlesSections>
          <DescriptionCenter>
            Para logar, preencha com suas informações.
          </DescriptionCenter>
          <InputField
            label="Email"
            name="email"
            placeholder="Digite seu email"
          />
          <InputField
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
          />
        </BoxLogin>
      </Container>
    </motion.main>
  );
}
