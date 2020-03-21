import styled, { css } from "styled-components";

export const PopupWrapper = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 99999;
  background-color: transparent;
  display: flex;
  justify-content: center;
  @media (min-width: 576px) {
    height: initial;
    left: inherit;
  }
`;

export const PopupContainer = styled.div`
  padding: 20px;
  top: 0;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  position: fixed;
  background: #fff;

  @media (min-width: 576px) {
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: none;
    max-height: initial;
    max-width: 500px;
    min-width: 500px;
    top: 200px;
    height: initial;
  }
`;
export const IconContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  @media (min-width: 576px) {
    margin: 0 auto;
  }
`;

export const Icon = styled.img`
  height: 60px;
  width: 60px;
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
  cursor: pointer;
`;

export const CloseButton = styled.img`
  width: 35px;
  height: 35px;
`;

export const MessageTitle = styled.div`
  margin: 30px 0 20px 0;
  font-size: 25px;
  color: #555252;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export const MessageText = styled.div`
  font-size: 20px;
  color: #555252;
  text-align: center;
  white-space: normal;
  font-family: "Roboto", sans-serif;
`;
