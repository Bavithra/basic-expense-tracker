import styled from "styled-components";

type ButtonProps = {
  isActive: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px;
`;

export const Button = styled.div`
  transition: all 200ms ease-out 0s;
  flex: 1;
  outline: none;
  border: none;
  padding: 6px;
  margin-right: 8px;
  font-size: 13px;
  font-family: Gilroy, sans-serif;
  text-align: center;
  cursor: pointer;
  background: ${(props: ButtonProps) =>
    props.isActive ? "#1890ff" : "#f6f7fa"};
  border-radius: 3px;
`;
