import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
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
  width: 15px;
  height: 15px;
  margin-top: 3px;
  border-radius: 20px;
  transition: all 150ms;
  cursor: pointer;
  background: transparent;
  border: 1px solid;
  opacity: 1;
  margin-right: 3px;

  &:hover {
    border: 1px solid #555252;
  }
`;

export const SubmitButton = styled.button`
  float: left;
  background-color: green;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
`;
