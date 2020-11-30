import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {theme} from 'styles/theme';

const StyledWrap = styled.div`
  position: ${({position}) => position ? 'relative' : 'static'};
  max-width: ${({maxWidth}) => `${maxWidth + 30 }px`};
  width: 100%;
  margin: ${({center}) => center ? '0 auto' : 0};
  padding-left: ${({padding}) => padding ? "15px" : 0 };
  padding-right: ${({padding}) => padding ? "15px" : 0 };
`;

const Wrap = (props) => {
  return (
    <StyledWrap {...props}>
      {props.children}
    </StyledWrap>
  )
};

Wrap.propTypes = {
  relative: PropTypes.bool,
  children: PropTypes.any,
  padding: PropTypes.bool,
  maxWidth: PropTypes.number,
  center: PropTypes.bool
};

Wrap.defaultProps = {
  relative: false,
  padding: true,
  maxWidth: theme.wrap.max,
  center: true
};

export default Wrap;
