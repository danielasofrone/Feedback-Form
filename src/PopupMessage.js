import React from "react";
import PropTypes from "prop-types";
import errorIcon from "./assets/error.svg";
import successIcon from "./assets/success.svg";
import closeIcon from "./assets/close.svg";
import * as S from "./popupMessage.styled.js";

const PopupMessage = ({ popupStatus, closeAction }) => {
  const errorMessageTitle = "Oh Snap!";
  const errorMessage = "Looks like you forgot to answer one of the questions!";
  const successTitle = " Thank you for your answers!";
  const successMessage = "Have a great day!";

  let icon = "";
  let title = "";
  let message = "";

  if (popupStatus === "success") {
    icon = successIcon;
    title = successTitle;
    message = successMessage;
  } else if (popupStatus === "error") {
    icon = errorIcon;
    title = errorMessageTitle;
    message = errorMessage;
  }

  return (
    <S.PopupWrapper>
      <S.PopupContainer>
        <S.IconContainer>
          <S.TextContainer>
            <S.Icon src={icon}></S.Icon>
            <S.MessageTitle>{title}</S.MessageTitle>
            <S.MessageText>{message}</S.MessageText>
          </S.TextContainer>
          <S.CloseButtonContainer>
            <S.CloseButton src={closeIcon} onClick={closeAction} />
          </S.CloseButtonContainer>
        </S.IconContainer>
      </S.PopupContainer>
    </S.PopupWrapper>
  );
};

PopupMessage.propTypes = {
  closeAction: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool
};
export default PopupMessage;
