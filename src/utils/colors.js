const colors = {
  white: "#FFFFFF",
  black: "#14171A"
};

const space = [0, 8, 16, 32, 64];

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export { colors, borders, font, scale };
