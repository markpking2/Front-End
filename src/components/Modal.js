import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const StyledButton = styled(Button)`
  && {
    background-color: #24b4a5 !important;
    border-color: white !important;
  }

  &:hover {
    background: white !important;
    color: #24b4a5 !important;
    border-color: #24b4a5 !important;
  }
`;

function ModalComponent(props) {
  const [modal, setModal] = useState(true);

  const toggle = () => {
    console.log(props);
    setModal(!modal);
    props.deactivate();
    props.history.push(props.endPath);
  };

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={5000}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <Modal isOpen={modal} toggle={toggle} className="primary">
          <ModalHeader
            id="login-modal"
            className="styled-header"
            toggle={toggle}
          >
            {props.title}
          </ModalHeader>
          <ModalBody>{props.message}</ModalBody>
          <ModalFooter>
            <StyledButton onClick={() => toggle()}>OK</StyledButton>
          </ModalFooter>
        </Modal>
      </div>
    </CSSTransition>
  );
}

export default ModalComponent;
