import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//Actions
import {updateField} from 'actions/action_fields';

const QuestionInput = ({field, updateField}) => {
  return (
    <input type="text" placeholder="Question" name={field.id} id={field.id} value={field.question} onChange={({target}) => updateField('question', field.id, target.value)} />
  )
};

QuestionInput.propTypes = {
  field: PropTypes.object,
  updateField: PropTypes.func,
};



export default connect(null, {updateField})(QuestionInput);
