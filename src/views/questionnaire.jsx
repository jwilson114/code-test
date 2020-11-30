import React from 'react';
import Layout from 'containers/layout';
// import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

import Form from 'containers/form';


const Questionnaire = (props) => {
  return (
    <Layout>
      <Margin bottom={3}>
        <h1 className="text-center">Questionnaire Builder</h1>
      </Margin>
      <Form />
    </Layout>
  )
};

export default Questionnaire;
