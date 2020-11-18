import React from 'react';
import { func } from 'prop-types';
import { useRecoilValue } from 'recoil';

import { warningApplicationAtom } from '@presentation/atoms/atoms';
import { Box, Notification } from '@components';
import {
  Container,
  Header,
  Main,
  NetworkWarning,
} from '@presentation/pages/components';
import {
  CreateHeader,
  CreateForm,
} from '@presentation/pages/transaction/components';

const Create = ({ createTransaction }) => {
  const notification = useRecoilValue(warningApplicationAtom);

  return (
    <Container>
      <NetworkWarning />
      {notification.enable && <Notification message={notification.message} />}
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
};

Create.propTypes = {
  createTransaction: func.isRequired,
};

export default Create;
