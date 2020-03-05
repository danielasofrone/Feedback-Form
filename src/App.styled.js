import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightblue;
  background-image: url(https://images.typeform.com/images/eDDxzXVeMFKd);
  /* background-repeat: repeat; */
  background-size: cover;
`;
export const InputContainer = styled.div`
  right: 0;
  left: 0;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  color: #555252;
  line-height: 24px;
  padding: 0 0 0 5px;
  display: flex;
  flex-direction: column;
  animation-name: slideButton;
  animation-duration: 2s;
  animation-fill-mode: both;
  @keyframes slideButton {
    from {
      transform: translateX(-200px);
      visibility: visible;
    }
    to {
      transform: translateX(100px);
    }
  }
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
  /* border: 1px solid ${({ checked }) => (checked ? "green" : "grey")}; */
  opacity: 1;
  margin-right: 3px;

  &:active {
    border: 1px solid green;
  }
`;

export const SubmitButton = styled.div`
  padding: 7px;
  width: 70px;
  height: 25px;
  background-color: #6bae52;
  color: #ecf6e8;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  text-align: center;
  margin: 20px 0 50px 10px;
  border-radius: 25px;
`;
