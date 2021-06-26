import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { darken, lighten } from 'polished';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: ${(props) => (props.color ? props.color : Colors.primaryColor)};
  padding: 7px 15px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.color ? lighten(0.1, `${props.color}`) : lighten(0.1, Colors.primaryColor))};
  }
`;

const Modal = ({ title, children, confirmText, cancelText, setToggle }) => {
  // const [modalToggle, setModalToggle] = useState(false);

  const onConfirm = () => {
    setToggle(false);
  };
  const onCancel = () => {
    setToggle(false);
  };

  return (
    <DarkBackground>
      <ModalBlock>
        <Title>{title}</Title>
        <p>{children}</p>
        <ButtonGroup>
          <Button color='gray' onClick={onCancel}>
            {cancelText}
          </Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </ButtonGroup>
      </ModalBlock>
    </DarkBackground>
  );
};

export default React.memo(Modal);
