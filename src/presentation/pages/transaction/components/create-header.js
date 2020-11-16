import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Flex, Text, Icon } from '@components';

const CreateHeader = () => (
  <Flex ml={3} height="80px" justifyContent="center" width="328px">
    <Flex alignItems="center" width={1}>
      <Box width="20px">
        <Link to="/list">
          <Icon name="arrow-left-outline" color="purple100" />
        </Link>
      </Box>
      <Flex width={1} justifyContent="center">
        <Text color="purple800" fontWeight="regular">
          Nova transação
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default CreateHeader;
