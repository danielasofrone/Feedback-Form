import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageTitleContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const SubtitleContainer = styled.div`
  display: flex;
`;

export const Subtitle = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  margin: 0;

  p {
    float: left;
  }
`;

export const Icon = styled.img`
  height: 150px;
  width: 150px;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const QuestionContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.07) 0 7px 50px 0;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 27px;
  color: #555252;
  white-space: normal;
  padding: ${({ isPreviousPage }) =>
    isPreviousPage ? isPreviousPage : "5px 5px 10px 15px"};
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
  width: 20px;
  height: 20px;
  margin-top: 3px;
  border-radius: 20px;
  transition: all 150ms;
  cursor: pointer;
  background: transparent;
  opacity: 1;
  margin-right: 3px;
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
  margin: 30px auto;
  border-radius: 25px;
`;

export const Element = styled.div`
  display: flex;
`;

export const Question = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const IconContainer = styled.div`
  margin-right: 15px;
`;

export const ElementIcon = styled.img`
  height: 25px;
  width: 25px;
`;

export const DateContainer = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 20px;
  margin-bottom: 20px;
`;
