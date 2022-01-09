import { DescriptionBanner, TextFooterTop, TitleDepoiments } from '../../assets/styles/texts';
import { Anchor } from '../Header/styles';
import { FooterS } from './styles';

export function Footer() {
    return(
      <FooterS data-aos="fade-out-up" data-aos-delay="100">
        <div className="top">
          <img src='logo.png' alt="ECNP" />
          <div className="social">
            <DescriptionBanner>Siga a gente:</DescriptionBanner>
            <a href="https://www.instagram.com/lfilipecorrea/">
              <img src="socials/insta.svg" />
            </a>
            <a href="https://www.youtube.com/channel/UC_I6ncJ_lbqL-YuthBUsMaQ">
              <img src="socials/youtube.svg" />
            </a>
          </div>
        </div>
        <div className="separator"></div>
        <div className="bottom">
          <div>
            <Anchor to='terms'>
              Termos
            </Anchor>
            <Anchor to='privacy'>
              Privacidade
            </Anchor>
          </div>
        </div>
      </FooterS>
    );
}