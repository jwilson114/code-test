import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';

//Actions
import {destroyField} from 'actions/action_fields';

const StyledQuestion = styled.div`
  position: relative;
  background-color: #f8f9f8;
  padding: 20px 20px 10px;
`;

const Delete = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: red;
  cursor: pointer;
`;

const Question = ({children, id, destroyField}) => {
  return (
    <StyledQuestion>
      {children}
      <Delete type="button" onClick={() => destroyField(id)}>Delete Question</Delete>
    </StyledQuestion>
  )
};

Question.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  destroyField: PropTypes.func
};

export default connect(null, {destroyField})(Question);
