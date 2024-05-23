import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const PostsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme["base-span"]};
    }

    span:first-child {
      ${mixins.fonts.titleS}
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
