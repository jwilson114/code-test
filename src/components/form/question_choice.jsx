import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';

//actions
import {updateField, createChoice, updateChoice, destroyChoice} from 'actions/action_fields';

//components
import { Margin } from 'styled-components-spacing';
import QuestionWrapper from 'components/form/question_wrapper';
import QuestionInput from 'components/form/question_input';
import Button from 'components/button/button';
import destroy from 'static/icons/delete.svg';


const Choice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

const ChoiceInput = styled.input`
  margin-left: 15px;
  max-width: 180px;
`;

const Delete = styled.button`
  background-image: url(${destroy});
  width: 18px;
  height: 18px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 20px;
  cursor: pointer;
`;

const QuestionChoice = ({field, updateField, destroyField, createChoice, updateChoice, destroyChoice}) => {
  return (
    <QuestionWrapper id={field.id}>
      <QuestionInput field={field} />
      <Margin top={3}>
        {field.choices.map((choice, index) => (
          <Choice key={index}>
              {field.multi ?
                <input type="checkbox" disabled checked/>
              :
                <input type="radio" disabled checked/>
              }
              <ChoiceInput type="text" name={choice.id} id={choice.id} placeholder={`Option ${index + 1}`} value={choice.answer} onChange={({target}) => updateChoice('answer', field.id, choice.id, target.value)} />
              <Delete onClick={() => destroyChoice(field.id, choice.id)} />
          </Choice>
        ))}
      </Margin>
      <Margin top={5}>
        <Button type="button" onClick={() => createChoice(field.id)}>Add option</Button>
      </Margin>
      <Margin top={3}>
        <label>
          <input type="checkbox" onChange={({target}) => updateField('multi', field.id, target.checked)} />
          <span>Allow multiple answers</span>
        </label>
      </Margin>
    </QuestionWrapper>
  )
};

QuestionChoice.propTypes = {
  field: PropTypes.object,
  updateField: PropTypes.func,
  destroyField: PropTypes.func,
  createChoice: PropTypes.func,
  updateChoice: PropTypes.func,
  destroyChoice: PropTypes.func,
};


export default connect(null, {updateField, createChoice, updateChoice, destroyChoice})(QuestionChoice);
