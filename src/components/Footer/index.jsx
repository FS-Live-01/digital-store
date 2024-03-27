import { styled } from 'styled-components';
import logo from './assets/logo.png'
import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';



const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  padding: 70px 100px;
  padding-bottom: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Coluna = styled.div`
  flex: 1;
  color: white;
  &:first-of-type{
    width: 45%;
    flex: initial;
    & img{
      height: 44px;
      margin-bottom: 35px;
    }
    & p{
      line-height: 26px;
      font-size: 16px;
      margin-bottom: 40px;
      padding-right: 150px;
    }
    & .redes{
      display: flex;
      align-items: center;
      gap: 35px;
      & svg:hover{
        fill: #C92071;
      }
    }
  }
  &:last-of-type{
    width: 100%;
    flex: initial;
    margin-top: 26px;
    & h5{
      line-height: 70px;
      text-align: center;
      border-top: 1px solid #FFFFFF30;
      font-size: 13px;
      font-weight: normal;
    }
  }
  & a{
    color: #FFF;
    font-size: 14px;
    line-height: 38px;
    &:hover{
      color: #C92071;
    }
  }
  & h6{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 28px;
  }
  & address{
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 8px;
    font-style: normal;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Coluna>
        <img src={logo} alt="Digital store" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae et quo temporibus ratione laudantium.</p>
        <div className="redes">
          <Link to={''}>
            <FacebookLogo size={24} />
          </Link>
          <Link to={''}>
            <InstagramLogo size={24} />
          </Link>
          <Link to={''}>
            <TwitterLogo size={24} />
          </Link>
        </div>
      </Coluna>
      <Coluna>
        <h6>Informação</h6>
        <ul>
          <li>
            <Link to={''}>Sobre Drip store</Link>
          </li>
          <li>
            <Link to={''}>Segurança</Link>
          </li>
          <li>
            <Link to={''}>Wishlist</Link>
          </li>
          <li>
            <Link to={''}>Blog</Link>
          </li>
          <li>
            <Link to={''}>Trabalhe conosco</Link>
          </li>
          <li>
            <Link to={''}>Meus Pedidos</Link>
          </li>
        </ul>
      </Coluna>
      <Coluna>
      <h6>Categorias</h6>
        <ul>
          <li>
            <Link to={''}>Camisetas</Link>
          </li>
          <li>
            <Link to={''}>Calças</Link>
          </li>
          <li>
            <Link to={''}>Bonés</Link>
          </li>
          <li>
            <Link to={''}>Headphones</Link>
          </li>
          <li>
            <Link to={''}>Tênis</Link>
          </li>
        </ul>
      </Coluna>
      <Coluna>
        <h6>Contato</h6>
        <address>Av. Santos dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</address>
        <a href="tel:+8530513411">(85) 3051-3411</a>
      </Coluna>
      <Coluna>
        <h5>&copy; 2022 Digital College</h5>
      </Coluna>
    </FooterContainer>
  );
}

export default Footer;