import styled from 'styled-components';

import { mediaMax } from '../../styles/MediaQuery.styles';

export const ModalRoot = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  opacity: 0.4;
`;

export const ModalDialog = styled.div`
  position: absolute;
  width: 40vw;
  max-height: 95vh;
  background: white;
  overflow: hidden;
  border-radius: 8px;
  overflow-y: auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.7);

  ${mediaMax('md')} {
    width: 95vw;
  }
`;
