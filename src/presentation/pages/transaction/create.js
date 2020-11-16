import React from 'react';

import { Box } from '@components';
import { Container, Header, Main } from '@presentation/pages/components';
import {
  CreateHeader,
  CreateForm,
} from '@presentation/pages/transaction/components';

const Create = () => (
  <Container>
    <Header>
      <CreateHeader />
    </Header>
    <Main>
      <Box mx={3}>
        <CreateForm />
      </Box>
    </Main>
  </Container>
);

export default Create;
