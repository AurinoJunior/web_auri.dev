import styled from "styled-components";

import { primary, gray_900 } from "../../../styles/Tokens";

export const ButtonStyled = styled.button`
  background-color: ${primary};

  border-radius: 1rem;

  padding: 0.75rem;
  width: 30%;

  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  color: ${gray_900};
`;

export const LinkStyled = styled.a`
  background-color: ${primary};

  border-radius: 1rem;

  padding: 0.75rem;
  width: 30%;

  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: ${gray_900};
`;
