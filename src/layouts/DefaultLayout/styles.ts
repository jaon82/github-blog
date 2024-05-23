import styled from "styled-components";

import headerBackground from "../../assets/headerBackground.svg";

export const LayoutContainer = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  background: ${(props) => props.theme["base-background"]};
`;

export const Header = styled.div`
  background-image: url(${headerBackground});
  background-size: contain;
  background-repeat: no-repeat;
  height: 0;
  padding-top: 20.56%; /* (img-height / img-width * container-width-percentage) (296 / 1440 * 100)*/
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
