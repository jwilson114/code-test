import React, {Component} from 'react';
// import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import Wrap from 'components/utils/wrap';

import {generateID} from 'utils/helpers';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
    };
  }

  componentDidUpdate(){
    console.log(this.state.fields)
  }

  handleFormSubmit(){
    JSON.stringify(this.state.fields);
  }

  handleAddField(){
    const type = document.getElementById('field_selector').value;
    const field = {
      type: type,
      id: generateID(),
      question: ''
    };

    if(type === "text"){
      field.long = false;
      field.answer = "";
    }

    if(type === "choice"){
      field.multi = false;
      field.choices = [{
        id: generateID(),
        label: 'Option 1',
      }];
      field.answer = '';
    }

    this.setState({fields: [...this.state.fields, field]});
  }

  updateFieldState(index, key, value){
    let fields = this.state.fields;
    fields[index][key] = value;
    this.setState({fields: fields});
  }

  destroyField(index){
    let fields = this.state.fields;
    fields.splice(index, 1)
    this.setState({fields: fields});
  }

  createChoice(index){

  }

  renderField(field, index){
    if(field.type === "text"){
      return(
        <div>
          <input type="text" name={field.id} id={field.id} value={field.question} onChange={({target}) => this.updateFieldState(index, 'question', target.value)} />
          <div>
          { field.long ?
            <textarea name={field.id} id={field.id} value={field.answer} onChange={({target}) => this.updateFieldState(index, 'answer', target.value)} readOnly />
            :
            <input type="text" name={field.id} id={field.id} value={field.answer} onChange={({target}) => this.updateFieldState(index, 'answer', target.value)} readOnly />
          }
          </div>
          <div>
            <label>
              <input type="checkbox" onChange={({target}) => this.updateFieldState(index, 'long', target.checked)} />
              Long Answer
            </label>
            <button type="button" onClick={() => this.destroyField(index)}>Delete Question</button>
          </div>
        </div>
      )
    }

    if(field.type === "choice"){
      return(
        <div>
          <input type="text" placeholder="Question" name={field.id} id={field.id} value={field.question} onChange={(event) => this.handleInputChange(event, index)} />
          {field.choices.map((choice, index) => {
            return(
              <div key={index}>
                <label>
                  {field.multi ?
                    <input type="checkbox" />
                  :
                    <input type="radio" />
                  }
                  {choice.label}
                </label>
              </div>
            )
          })}
          <div>
            <button type="button" onClick={() => this.createChoice(index)}>Add option</button>
          </div>
          <div>
            <label>
              <input type="checkbox" onChange={({target}) => this.updateFieldState(index, 'multi', target.checked)} />
              Allow multiple answers
            </label>
            <button type="button" onClick={() => this.destroyField(index)}>Delete Question</button>
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <Wrap>
        <Margin bottom={5}>
          <select id="field_selector">
            <option value="text">Text Question</option>
            <option value="choice">Choice Question</option>
          </select>
          <button type="button" onClick={this.handleAddField.bind(this)}>Add field</button>
        </Margin>

        <form onSubmit={this.handleFormSubmit.bind(this)}>
          { this.state.fields.map((field, index) => {
            return(
              <Margin key={index} bottom={3}>
                {this.renderField(field, index)}
              </Margin>
            )
          })}
          <button type="submit">Sumbit</button>
        </form>
      </Wrap>
    )
  }
}

export default Form;
