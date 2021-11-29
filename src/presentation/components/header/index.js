import Logo from "./images/logo.svg";
import { globalStyles } from "../../../application/styles/global";
import styled from "styled-components";
export const Header = () => {
  return (
    <HeaderStyle>
      <div style={globalStyles.defaultContainer}>
        <HeaderFlexStyle>
          <ImgLogoStyle src={Logo} />
          <MenuStyle>
            <a>Home</a>
            <a>Sobre</a>
            <a>Serviços</a>
            <a>Contato</a>
          </MenuStyle>
        </HeaderFlexStyle>
      </div>
    </HeaderStyle>
  );
};

const MenuStyle = styled.div`
  a {
    padding: 20px;
    color: #fff;
    font-weight: 100;
    cursor: pointer;
  }
`;
const HeaderFlexStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStyle = styled.div`
  background: #f8f9fa!important;
  padding-top:60px;
`;
const ImgLogoStyle = styled.img`
  width: 135px;
`;
