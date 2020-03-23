import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 27px;
  color: #555252;
  max-width: 320px;
  white-space: normal;
  padding: 5px 5px 10px 15px;
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
  margin: 30px auto;
  border-radius: 25px;
`;
