
import { css } from 'styled-components';

const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 480,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const accumulatorObj = Object.assign({}, accumulator);
  const emSize = sizes[label] / 16;
  accumulatorObj[label] = (...args) => css` @media (max-width: ${emSize}em) { ${css(...args)} }`;
  return accumulatorObj;
}, {});
