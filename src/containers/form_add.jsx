import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';

//Actions
import {createField} from 'actions/action_fields';

//Components
import { Margin } from 'styled-components-spacing';
import Wrap from 'components/utils/wrap';
import Button from 'components/button/button';


const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  select {
    margin-right: 10px;
  }
`;

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'text',
    };
  }

  handleChange({target}){
    this.setState({type: target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createField(this.state.type);
  }

  render(){
    return (
      <Wrap>
        <Margin bottom={5}>
          <StyledForm onSubmit={this.handleSubmit.bind(this)}>
            <select onChange={this.handleChange.bind(this)}>
              <option value="text">Text Question</option>
              <option value="choice">Choice Question</option>
            </select>
            <Button type="submit" width={150}>Add field</Button>
          </StyledForm>
        </Margin>
      </Wrap>
    )
  }
}

FormAdd.propTypes = {
  createField: PropTypes.func
};


const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {createField})(FormAdd);
