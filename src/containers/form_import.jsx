import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {isJSON} from 'utils/helpers';

//Actions
import {importData} from 'actions/action_fields';

//Components
import { Margin } from 'styled-components-spacing';
import Wrap from 'components/utils/wrap';
import Button from 'components/button/button';


const Container = styled.div`
  display: flex;
  justify-content: center;
`;

class FormImport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: '',
      error: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if(isJSON(this.state.value)){
      this.props.importData(JSON.parse(this.state.value));
      this.setState({error: '', active: false, value: ''});
    } else {
      this.setState({error: "Invalid Json"});
    }
  }

  render(){
    return (
      <Wrap>
        <Margin bottom={10}>
          <Container>
            { !this.state.active &&
              <Button width={150} type="button" onClick={() => this.setState({active: true})}>JSON Import</Button>
            }
            { this.state.active &&
              <form onSubmit={this.handleSubmit.bind(this)}>
                { this.state.error &&
                  <Margin bottom={2}>{this.state.error}</Margin>
                }
                <Margin bottom={3}>
                  <textarea placeholder="Paste json here.." onChange={({target}) => this.setState({value: target.value})} value={this.state.value}/>
                </Margin>
                <Container>
                  <Button width={150} type="submit" onClick={() => this.setState({active: true})}>Import</Button>
                </Container>
              </form>
            }
          </Container>
        </Margin>
      </Wrap>
    )
  }
}

FormImport.propTypes = {
  importData: PropTypes.func
};

export default connect(null, {importData})(FormImport);
