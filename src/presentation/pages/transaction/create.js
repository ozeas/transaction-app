import React from 'react';
import { func } from 'prop-types';

import { Box } from '@components';
import { Container, Header, Main } from '@presentation/pages/components';
import {
  CreateHeader,
  CreateForm,
} from '@presentation/pages/transaction/components';

const Create = ({ createTransaction }) => (
  <Container>
    <Header>
      <CreateHeader />
    </Header>
    <Main>
      <Box mx={3}>
        <CreateForm createTransaction={createTransaction} />
      </Box>
    </Main>
  </Container>
);

Create.propTypes = {
  createTransaction: func.isRequired,
};

export default Create;
