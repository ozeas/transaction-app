import React from 'react';
import { string } from 'prop-types';
import propTypes from '@styled-system/prop-types';

import ICONS from './icons';
import SVG from './icon.style';
import { theme } from '@style-tokens';

const Icon = ({ name, titleAccess, path, ...rest }) => {
  const icon = path ?? ICONS[name];
  const hasTitle = !!titleAccess;

  return (
    <SVG
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden={hasTitle ? undefined : true}
      role={hasTitle ? 'img' : undefined}
      {...rest}
    >
      {hasTitle && <title>{titleAccess}</title>}
      <path d={icon} />
    </SVG>
  );
};

Icon.propTypes = {
  color: string,
  name: string.isRequired,
  path: string,
  size: propTypes.layout.size,
  titleAccess: string,
};

Icon.defaultProps = {
  color: 'purple20',
  path: null,
  size: theme.fontSizes[2],
  titleAccess: null,
};

export default Icon;
