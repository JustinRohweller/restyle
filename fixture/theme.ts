/* eslint-disable prettier/prettier */
import {createTheme} from './restyle';

const palette = {
  purple: '#5A31F4',
  green: '#099C77',
  black: '#101010',
  white: '#FFF',
};

export const theme = createTheme({
  colors: {
    background: palette.white,
    cardPrimaryBackground: palette.purple,
    cardSecondaryBackground: palette.green,
    title: palette.black,
    text: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  // breakpoints: {
  //   phone: 0,
  //   tablet: 768,
  // },
  textVariants: {
    defaults: {
      color: 'text',
    },
    header: {
      fontSize: 48,
      fontWeight: 'bold',
      color: 'title',
    },
    body: {
      fontSize: 16,
    },
  },
  cardVariants: {
    defaults: {
      padding: 'm',
      borderRadius: 10,
    },
    primary: {
      backgroundColor: 'cardPrimaryBackground',
    },
    secondary: {
      backgroundColor: 'cardSecondaryBackground',
    },
  },

  borderRadii: SpacingKeysNumber;
  zIndices: ZIndicesKeys;
  width: SpacingKeysString;
  heights: SpacingKeysString;
  borders: SpacingKeysString;
  // variants:
  // button
  buttonStatusVariants: ButtonStatusVariantKeys;
  buttonVariants: ButtonVariantKeys;
  // textinput
  textInputStatusVariants: TextInputStatusVariantKeys;
  textInputVariants: TextInputVariantKeys;
  // text, button
  buttonTextVariants: ButtonTextVariantKeys;
  textVariants: TextVariantKeys;
  // view + button + touchable. (prefer button stuff if using a button.)
  sizeVariants: SizeVariants;
  viewVariants: ViewVariantKeys;
  shadowVariants: ShadowVariantKeys;
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    title: palette.white,
  },
};

export type Theme = typeof theme;
