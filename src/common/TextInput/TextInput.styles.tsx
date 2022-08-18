import styled from "styled-components";
import { Colors } from "../../styles/Colors";

type Props = {
  hasValue: boolean;
};

export const Label = styled.label`
  height: 12px;
  color: ${Colors.grey2};
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  padding-left: 4px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;

  ${(props: Props) =>
    props.hasValue
      ? `
      color: ${Colors.green1};
      opacity: 1;
      transform: scale(0.8) translate3d(0, -8px, 0);}`
      : ""}

`;

export const Input = styled.input`
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 36px;
  text-shadow: none;
  padding-left: 4px;

  border: 0;
  border: 1px solid ${Colors.grey4};
  color: #000;
  flex: 1 1 auto;
  order: 2;


  &:focus {
    outline: 0;
  }

  &:not(:focus) {
    color: ${(props: Props) => (props.hasValue ? "" : "transparent")};
  }

  &:focus + ${Label} {
    color: ${Colors.green1};
    opacity: 1;
    transform: scale(0.8) translate3d(0, -8px, 0);
  }
`;