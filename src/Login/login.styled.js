import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
`;

export const CredentialsContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const Credentials = styled.div`
  background: #fff;
  border: 1px solid #dbe3e7;
  padding: 40px 40px 30px;
`;

export const TitleContainer = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  margin: 20px 20px 20px 0;
  text-align: center;
`;

export const FieldTitle = styled.span`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-weight: 600;
  position: relative;
  height: 20px;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  color: #555252;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.45;
  background-color: #f7f9fa;
  border: 1px solid #dbe3e7;
  border-radius: 3px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
  margin: 10px 0 30px 0;
  :last-child {
    margin: 10px 0 0 0;
  }
  ::-webkit-input-placeholder {
    color: #b5b5b5;
    opacity: 1;
  }
  ::-moz-placeholder {
    color: #b5b5b5;
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: #b5b5b5;
    opacity: 1;
  }
  :-moz-placeholder {
    color: #b5b5b5;
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  margin: 30px auto;
`;
export const SubmitButton = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 7px;
  height: 25px;
  background: linear-gradient(0deg, #3c80cf 0%, #5b9fef 100%) no-repeat;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
`;

export const RegisterContainer = styled.div`
  margin: 20px 20px 20px 0;
  text-align: center;
`;
export const RegisterLink = styled.span`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 16px;
  font-weight: 400;
  margin: 20px 5px 0 0;
  text-align: center;
`;

export const NavigationLink = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  a {
    text-decoration: none !important;
    color: #1d82a1;
    :visited {
      color: #1d82a1;
    }
  }
`;
