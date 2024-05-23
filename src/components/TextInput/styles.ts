import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: solid 1px ${(props) => props.theme["base-border"]};
  border-radius: 0.375rem;
  flex: 1;

  &:focus-within {
    border-color: ${(props) => props.theme.blue};
  }

  > input {
    width: 100%;
    background-color: transparent;
    border: none;
    ${mixins.fonts.textM}
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
