import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import styled from 'styled-components';

//Actions
import {updateField} from 'actions/action_fields';

import { Margin } from 'styled-components-spacing';
import QuestionWrapper from 'components/form/question_wrapper';
import QuestionInput from 'components/form/question_input';

const QuestionText = ({field, destroyField, updateField}) => {
  return (
    <QuestionWrapper id={field.id}>
      <QuestionInput field={field} />
      <Margin top={2}>
      { field.long ?
        <textarea name={field.id} id={field.id} value={field.answer} onChange={({target}) => updateField('answer', field.id, target.value)} readOnly />
        :
        <input type="text" name={field.id} id={field.id} value={field.answer} onChange={({target}) => updateField('answer', field.id, target.value)} readOnly />
      }
      </Margin>
      <Margin top={2}>
        <label>
          <input type="checkbox" onChange={({target}) => updateField('long', field.id, target.checked)} />
          <span>Long Answer</span>
        </label>
      </Margin>
    </QuestionWrapper>
  )
};

QuestionText.propTypes = {
  field: PropTypes.object,
  index: PropTypes.number,
  updateField: PropTypes.func,
  destroyField: PropTypes.func
};



export default connect(null, {updateField})(QuestionText);
