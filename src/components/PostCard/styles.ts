import { Link } from "react-router-dom";
import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PostCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme["base-label"]};
    transition: 0.5s;
  }
`;

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h1 {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const PostCardTime = styled.span`
  ${mixins.fonts.textS}
  color: ${(props) => props.theme["base-span"]};
  min-width: 6rem;
  text-align: right;
`;
