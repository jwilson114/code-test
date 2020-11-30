import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid blue;
  min-width: 100px;
  max-width: 300px;
  width: ${({width}) => width ? `${width}px` : '100%'};
  padding: 0.6em 0.7em;
  color: blue;
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

const Button = ({type, children, width, onClick}) => (
  <StyledButton type={type} width={width} onClick={onClick}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number
};



export default Button;
