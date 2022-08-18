import styled from "styled-components";

import { Colors } from "../styles/Colors";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #f1f7fc;
  padding: 10px 18px;
`;

export const ComponentContainer = styled.div`
  padding: 10px 18px;
`;

export const Text = styled.div`
  color: rgba(19, 23, 32, 0.5);
  margin: 8px;
  color: ${Colors.grey4};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  position: relative;
`;