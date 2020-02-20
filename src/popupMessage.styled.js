import styled, { css } from "styled-components";

export const PopupWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  top:0;
  left: 0;
  right: 0;
  min-width: 200px;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* ${({ error }) =>
    error &&
    css`
      background-color: red;
    `} */
`;

export const IconContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;
export const Icon = styled.img`
  height: 60px;
  width: 60px;
`;
export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;
export const CloseButton = styled.img`
  width: 30px;
  height: 30px;
`;
export const MessageTitle = styled.div`
  margin: 30px 0 20px 0;
  font-size: 25px;
  color: #555252;
  text-align: center;
`;
export const MessageText = styled.div`
  font-size: 20px;
  color: #555252;
  text-align: center;
  white-space: normal;
`;
