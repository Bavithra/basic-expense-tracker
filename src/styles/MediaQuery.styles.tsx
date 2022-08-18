export const BREAKPOINTS = {
  md: '768px',
  lg: '992px',
};

export const mediaMax = (key: keyof typeof BREAKPOINTS) => {
  return `@media only screen and (max-width: ${BREAKPOINTS[key]})`;
};
