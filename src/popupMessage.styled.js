import styled, { css } from "styled-components";

export const PopupWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  min-width: 250px;
  max-width: 550px;
  padding: 20px;
  ${({ error }) =>
    error &&
    css`
      background-color: red;
    `}
`;

export const TextContainer = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const ConfirmButton = styled.div`
  padding: 3px;
  width: 70px;
  height: 25px;
  background-color: white;
  color: black;
  font-size: 20px;
  margin: 0 auto;
  cursor: pointer;
  border: 1px solid black;
  text-align: center;
`;
