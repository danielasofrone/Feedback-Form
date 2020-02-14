import React from "react";
import PropTypes from "prop-types";
import {
  PopupWrapper,
  TextContainer,
  ConfirmButton
} from "./popupMessage.styled";

const PopupMessage = ({ children, error, closeAction }) => {
  return (
    <PopupWrapper error={error}>
      <TextContainer>{children}</TextContainer>
      <ConfirmButton onClick={closeAction}>OK</ConfirmButton>
    </PopupWrapper>
  );
};

PopupMessage.propTypes = {
  children: PropTypes.node,
  error: PropTypes.bool,
  closeAction: PropTypes.func
};
export default PopupMessage;
