import React from "react";
import PropTypes from "prop-types";
import errorIcon from "./assets/error.svg";
import successIcon from "./assets/success.svg";
import closeIcon from "./assets/close.svg";

import {
  PopupWrapper,
  IconContainer,
  Icon,
  TextContainer,
  CloseButtonContainer,
  CloseButton,
  MessageTitle,
  MessageText
} from "./popupMessage.styled";

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
    <PopupWrapper>
      <IconContainer>
        <TextContainer>
          <Icon src={icon}></Icon>
          <MessageTitle>{title}</MessageTitle>
          <MessageText>{message}</MessageText>
        </TextContainer>
      </IconContainer>
      <CloseButtonContainer>
        <CloseButton src={closeIcon} onClick={closeAction} />
      </CloseButtonContainer>
    </PopupWrapper>
  );
};

PopupMessage.propTypes = {
  closeAction: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool
};
export default PopupMessage;
