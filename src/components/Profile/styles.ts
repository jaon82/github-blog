import { Link } from "react-router-dom";
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: calc(-13.25rem / 2);
`;

export const ProfileAvatar = styled.div`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
  ${mixins.fonts.link}
  text-transform: uppercase;
  text-decoration: none;
  height: fit-content;

  &:hover {
    border-bottom: solid 1px;
  }
`;

export const ProfileDescription = styled.div`
  ${mixins.fonts.textM}
`;

export const ProfileLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
