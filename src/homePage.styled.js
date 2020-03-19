import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  right: 0;
  left: 0;
`;

export const Navigation = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  margin-bottom: 60px;
`;

export const PageTitleContainer = styled.div`
  border: 2px solid #555252;
  border-style: solid;
  width: 90px;
  height: 70px;
  padding: 5px;
  margin: 0 20px 0 10px;
`;

export const PageTitle = styled.div`
  font-family: "Roboto", sans-serif;
  white-space: normal;
  font-size: 20px;
  color: #555252;
  a {
    text-decoration: none !important;
    :visited {
      color: #555252;
    }
  }
`;

export const NavigationLink = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #555252;
  line-height: 24px;
  margin: 65px 10px 0 0;
  cursor: pointer;

  a {
    text-decoration: none !important;
    :visited {
      color: #555252;
    }
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 27px;
  color: #555252;
  max-width: 320px;
  white-space: normal;
  padding: 0 0 0 5px;
  display: flex;
  flex-direction: column;
  animation-name: transitionIn;
  animation-duration: 1s;
  animation-fill-mode: both;

  @keyframes transitionIn {
    from {
      transform: translateX(-200px);
      visibility: visible;
    }
    to {
      transform: translateX(30px);
      visibility: visible;
    }
  }

  ${({ questionTransition }) =>
    questionTransition &&
    `
    animation-name: transitionOut;
    animation-duration: 1s;
    animation-fill-mode: both;

  @keyframes transitionOut {
    from {
      transform: translateX(100px);
      visibility: visible;
    }
    to {
      transform: translateX(2000px);
      visibility: visible;
    }
    `};
`;

export const SelectableOption = styled.div`
  display: flex;
  margin-bottom: 10px;

  .labelStyle {
    margin-left: 10px;
  }
`;

export const StyledRadioButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: 3px;
  border-radius: 20px;
  transition: all 150ms;
  cursor: pointer;
  background: transparent;
  opacity: 1;
  margin-right: 3px;

  &:active {
    border: 1px solid green;
  }
`;

export const SubmitButton = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 7px;
  width: 70px;
  height: 25px;
  background-color: #6bae52;
  color: #ecf6e8;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  margin: 30px 0 20px 50px;
  right: 0;
  left: 0;
  border-radius: 25px;
`;
