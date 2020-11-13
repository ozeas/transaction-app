import { themeGet } from '@styled-system/theme-get';
import propTypes from '@styled-system/prop-types';
import { Box } from 'reflexbox';
import { string } from 'prop-types';
import styled from 'styled-components';
import { color, typography } from 'styled-system';

const Text = styled(Box)`
  font-size: ${themeGet('fontSizes.1')}px;
  color: ${themeGet('colors.gray800')};

  ${color}
  ${typography}
`;

Text.propTypes = {
  ...propTypes.color,
  ...propTypes.typography,
  as: string,
};

export default Text;
