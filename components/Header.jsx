import styled from "styled-components";

import Logo from "assets/svg/lustLogo.svg";

const HeaderOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #110c1d;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 10;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  padding: 20px;
`;

const LogoContainer = styled.div``;

function Header() {
  return (
    <HeaderOuter>
      <HeaderContainer>
        <LogoContainer>
          <Logo width={"50px"} />
        </LogoContainer>
      </HeaderContainer>
    </HeaderOuter>
  );
}

export default Header;
