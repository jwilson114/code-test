import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';


//Actions
import {createField} from 'actions/action_fields';

//Components
import { Margin } from 'styled-components-spacing';
import Wrap from 'components/utils/wrap';
import QuestionText from 'components/form/question_text';
import QuestionChoice from 'components/form/question_choice';
import Button from 'components/button/button';


//Containers
import FormAdd from 'containers/form_add';
import FormImport from 'containers/form_import';


const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Export = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      export: '',
    };
  }

  handleFormSubmit(e){
    e.preventDefault();
    this.setState({export: JSON.stringify(this.props.fields)});
  }

  render(){
    return (
      <Wrap>
        <FormImport/>
        <FormAdd />
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          { this.props.fields.map((field, index) => (
            <Margin key={index} bottom={3}>
              { field.type === "text" &&
                <QuestionText field={field} />
              }

              { field.type === "choice" &&
                <QuestionChoice field={field} />
              }
            </Margin>
          ))}
          <Actions>
            <Button type="submit">Submit</Button>
          </Actions>
          { this.state.export &&
            <Margin top={8}>
              <h2>Export JSON</h2>
              <Export value={this.state.export} readOnly/>
            </Margin>
          }
        </form>
      </Wrap>
    )
  }
}

Form.propTypes = {
  fields: PropTypes.array
};


const mapStateToProps = (state) => {
  return {
    fields: state.questionnaire.fields
  }
}

export default connect(mapStateToProps, {createField})(Form);
