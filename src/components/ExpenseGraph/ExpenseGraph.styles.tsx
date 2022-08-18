import styled from "styled-components";

import { FontSizes } from "../../styles/FontSizes";
import { mediaMax } from "../../styles/MediaQuery.styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 0;
  box-sizing: border-box;
  border-radius: 24px;
  box-shadow: rgb(0 0 0 / 10%);
`;

export const NewsTitle = styled.h1`
  margin-bottom: 60px;
  font-size: 24px;
  color: #3c1053;
  margin: 12px;

  ${mediaMax("md")} {
    font-size: ${FontSizes.size6};
  }
`;
