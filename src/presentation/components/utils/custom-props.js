import { system } from 'styled-system';

const colorHover = (properties) =>
  system({
    colorHover: {
      properties,
      scale: 'colors',
    },
  });

const iconColor = system({
  color: {
    property: 'fill',
    scale: 'colors',
  },
});

export { colorHover, iconColor };
