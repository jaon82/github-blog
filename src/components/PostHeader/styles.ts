import { Link } from "react-router-dom";
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: calc(-5rem);

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

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
  border-bottom: solid 1px transparent;

  &:hover {
    border-bottom: solid 1px;
    transition: 0.5s;
  }
`;

export const PostHeaderLinks = styled.div`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-span"]};

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
