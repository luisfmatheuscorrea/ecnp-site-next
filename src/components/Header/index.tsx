import { Button as ChakraButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import { Button } from '../../sections/Banner/styles';
import { Anchor, ContentBody, HeaderS } from './styles';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRef } from 'react';

export function Header() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  function goToHome() {
    router.push('/')
  }

  function goToAccess() {
    router.push('/access')
  }

  return(
    <HeaderS>
      <Link to="hero" spy={true} smooth={true} duration={500}>
        <img data-aos="zoom-out-right" data-aos-delay="150" src='logo.png' alt="ECNP Logo" />
      </Link>

      <nav data-aos="zoom-out-left" data-aos-delay="200">
        <Anchor activeClass="active" to="hero" spy={true} smooth={true} duration={500}>Início</Anchor>
        <Anchor activeClass="active" to="whats-is" spy={true} smooth={true} duration={500}>O que é?</Anchor>
        <Anchor activeClass="active" to="advantages" spy={true} smooth={true} duration={500}>Vantagens</Anchor>
        <Anchor activeClass="active" to="why" spy={true} smooth={true} duration={500}>Porque fazer?</Anchor>
        <Anchor activeClass="active" to="depoiments" spy={true} smooth={true} duration={500}>Depoimentos</Anchor>
        <div className="buttons">
          <Link to="investiment" activeClass="active-button" spy={true} smooth={true} duration={500}>
            <Button>
              Inscrever-se
            </Button>
          </Link>
        </div>
      </nav>

      <ChakraButton data-aos="zoom-out-left" data-aos-delay="200" px="1.2rem" py="1.5rem" className='menu-mobile' ref={btnRef} colorScheme="black" variant="outline" onClick={isOpen ? onClose : onOpen}>
        {isOpen ? <FiX fontSize="1.5rem" /> : <FiMenu fontSize="1.5rem" />}
      </ChakraButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ paddingTop: '6.3rem', backdropFilter: 'blur(10px)', backgroundColor: '#FFFFFF2F' }}>
          <DrawerBody>
            <ContentBody>
              <Anchor mobile activeClass="active" onClick={onClose} to="hero" spy={true} smooth={true} duration={500}>Início</Anchor>
              <Anchor mobile activeClass="active" onClick={onClose} to="whats-is" spy={true} smooth={true} duration={500}>O que é?</Anchor>
              <Anchor mobile activeClass="active" onClick={onClose} to="advantages" spy={true} smooth={true} duration={500}>Vantagens</Anchor>
              <Anchor mobile activeClass="active" onClick={onClose} to="why" spy={true} smooth={true} duration={500}>Porque fazer?</Anchor>
              <Anchor mobile activeClass="active" onClick={onClose} to="depoiments" spy={true} smooth={true} duration={500}>Depoimentos</Anchor>
            </ContentBody>
            <Link to="investiment" activeClass="active-button" spy={true} smooth={true} duration={500}>
              <Button extended>
                Inscrever-se
              </Button>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HeaderS>
  );
}