/* eslint-disable prettier/prettier */
import {TextStyle, FlexStyle, ViewStyle} from 'react-native';

import createRestyleFunction from './createRestyleFunction';
import {BaseTheme, ResponsiveValue, RNStyleProperty} from './types';
import {getKeys} from './typeHelpers';

const spacingProperties = {
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  marginHorizontal: true,
  marginVertical: true,
  marginStart: true,
  marginEnd: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingHorizontal: true,
  paddingVertical: true,
  paddingStart: true,
  paddingEnd: true,
  columnGap: true,
  rowGap: true,
  gap: true,
};

const spacingPropertiesShorthand = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  ms: 'marginStart',
  me: 'marginEnd',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  ps: 'paddingStart',
  pe: 'paddingEnd',
  g: 'gap',
  rg: 'rowGap',
  cg: 'columnGap',
};

const typographyProperties = {
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  lineHeight: true,
  includeFontPadding: true,
  fontVariant: true,
  letterSpacing: true,
  textAlign: true,
  textAlignVertical: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textTransform: true,
  verticalAlign: true,
  writingDirection: true,
};

const heightProperties = {
  height: true,
  minHeight: true,
  maxHeight: true,
};

const widthProperties = {
  width: true,
  minWidth: true,
  maxWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStartWidth: true,
  borderTopWidth: true,
  borderEndWidth: true,
  borderWidth: true,
};

const layoutProperties = {
  overflow: true,
  aspectRatio: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  justifyContent: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
};

const positionProperties = {
  position: true,
  top: true,
  right: true,
  bottom: true,
  left: true,
  start: true,
  end: true,
};

const borderProperties = {
  borderStyle: true,
};

const borderRadiusProperties = {
  borderRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomStartRadius: true,
  borderBottomEndRadius: true,
  borderTopStartRadius: true,
  borderTopEndRadius: true,
};

const borderColorProperties = {
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderLeftColor: true,
  borderBottomColor: true,
  borderStartColor: true,
  borderEndColor: true,
};

const shadowProperties = {
  shadowOpacity: true,
  shadowOffset: true,
  shadowRadius: true,
  elevation: true,
};

const textShadowProperties = {
  textShadowOffset: true,
  textShadowRadius: true,
};

export const backgroundColor = createRestyleFunction({
  property: 'backgroundColor',
  themeKey: 'colors',
});

export const backgroundColorShorthand = createRestyleFunction({
  property: 'bg',
  styleProperty: 'backgroundColor',
  themeKey: 'colors',
});

export const color = [
  createRestyleFunction({
    property: 'color',
    themeKey: 'colors',
  }),
  createRestyleFunction({
    property: 'textDecorationColor',
    themeKey: 'colors',
  }),
];

export const opacity = createRestyleFunction({
  property: 'opacity',
});

export const visible = createRestyleFunction({
  property: 'visible',
  styleProperty: 'display',
  transform: ({value}) => (value === false ? 'none' : 'flex'),
});

export const spacing = getKeys(spacingProperties).map(property => {
  return createRestyleFunction({
    property,
    themeKey: 'spacing',
  });
});

export const spacingShorthand = getKeys(spacingPropertiesShorthand).map(
  property => {
    const styleProperty = spacingPropertiesShorthand[
      property
    ] as RNStyleProperty;

    return createRestyleFunction({
      property,
      styleProperty,
      themeKey: 'spacing',
    });
  },
);

export const typography = getKeys(typographyProperties).map(property => {
  return createRestyleFunction({
    property,
  });
});

export const width = getKeys(widthProperties).map(property => {
  return createRestyleFunction({
    property,
  });
});

export const height = getKeys(heightProperties).map(property => {
  return createRestyleFunction({
    property,
  });
});

export const layout = getKeys(layoutProperties).map(property => {
  return createRestyleFunction({
    property,
  });
});

export const position = [
  ...getKeys(positionProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'zIndex',
    themeKey: 'zIndices',
  }),
];

export const border = [
  ...getKeys(borderProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  ...getKeys(borderColorProperties).map(property => {
    return createRestyleFunction({
      property,
      themeKey: 'colors',
    });
  }),
  ...getKeys(borderRadiusProperties).map(property => {
    return createRestyleFunction({
      property,
      themeKey: 'borderRadii',
    });
  }),
];

export const shadow = [
  ...getKeys(shadowProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'shadowColor',
    themeKey: 'colors',
  }),
];

export const textShadow = [
  ...getKeys(textShadowProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'textShadowColor',
    themeKey: 'colors',
  }),
];

export const all = [
  color,
  opacity,
  backgroundColor,
  backgroundColorShorthand,
  ...spacing,
  ...spacingShorthand,
  ...typography,
  ...width,
  ...height,
  ...layout,
  ...position,
  ...border,
  ...shadow,
  ...textShadow,
];

export interface ColorProps<Theme extends BaseTheme> {
  color?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
  textDecorationColor?: ResponsiveValue<
    keyof Theme['colors'],
    Theme['breakpoints']
  >;
}
export interface OpacityProps<Theme extends BaseTheme> {
  opacity?: ResponsiveValue<number, Theme['breakpoints']>;
}

export interface VisibleProps<Theme extends BaseTheme> {
  visible?: ResponsiveValue<boolean, Theme['breakpoints']>;
}

export interface BackgroundColorProps<Theme extends BaseTheme> {
  backgroundColor?: ResponsiveValue<
    keyof Theme['colors'],
    Theme['breakpoints']
  >;
}

export interface BackgroundColorShorthandProps<Theme extends BaseTheme> {
  bg?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
}

export type SpacingProps<Theme extends BaseTheme> = {
  [Key in keyof typeof spacingProperties]?: ResponsiveValue<
    keyof Theme['spacing'],
    Theme['breakpoints']
  >;
};

export type SpacingShorthandProps<Theme extends BaseTheme> = {
  [Key in keyof typeof spacingPropertiesShorthand]?: ResponsiveValue<
    keyof Theme['spacing'],
    Theme['breakpoints']
  >;
};

export type TypographyProps<Theme extends BaseTheme> = {
  [Key in keyof typeof typographyProperties]?: ResponsiveValue<
    Theme['typography'] extends object
      ? keyof Theme['typography']
      : TextStyle[Key],
    Theme['breakpoints']
  >;
};

export type LayoutProps<Theme extends BaseTheme> = {
  [Key in keyof typeof layoutProperties]?: ResponsiveValue<
    Theme['layout'] extends object ? keyof Theme['layout'] : FlexStyle[Key],
    Theme['breakpoints']
  >;
};

export type WidthProps<Theme extends BaseTheme> = {
  [Key in keyof typeof widthProperties]?: ResponsiveValue<
    keyof Theme['widths'],
    Theme['breakpoints']
  >;
};

export type HeightProps<Theme extends BaseTheme> = {
  [Key in keyof typeof heightProperties]?: ResponsiveValue<
    keyof Theme['heights'],
    Theme['breakpoints']
  >;
};

export type PositionProps<Theme extends BaseTheme> = {
  [Key in keyof typeof positionProperties]?: ResponsiveValue<
    Theme['layout'] extends object ? keyof Theme['layout'] : FlexStyle[Key],
    Theme['breakpoints']
  >;
} & {
  zIndex?: ResponsiveValue<
    Theme['zIndices'] extends object ? keyof Theme['zIndices'] : number,
    Theme['breakpoints']
  >;
};

export type BorderProps<Theme extends BaseTheme> = {
  [Key in keyof typeof borderProperties]?: ResponsiveValue<
    Theme['borders'] extends object ? keyof Theme['borders'] : ViewStyle[Key],
    Theme['breakpoints']
  >;
} & {
  [Key in keyof typeof borderColorProperties]?: ResponsiveValue<
    keyof Theme['colors'],
    Theme['breakpoints']
  >;
} & {
  [Key in keyof typeof borderRadiusProperties]?: ResponsiveValue<
    Theme['borderRadii'] extends object ? keyof Theme['borderRadii'] : number,
    Theme['breakpoints']
  >;
};

export type ShadowProps<Theme extends BaseTheme> = {
  [Key in keyof typeof shadowProperties]?: ResponsiveValue<
    Theme['shadows'] extends object ? keyof Theme['shadows'] : ViewStyle[Key],
    Theme['breakpoints']
  >;
} & {
  shadowColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
};

export type TextShadowProps<Theme extends BaseTheme> = {
  [Key in keyof typeof textShadowProperties]?: ResponsiveValue<
    Theme['textShadows'] extends object
      ? keyof Theme['textShadows']
      : TextStyle[Key],
    Theme['breakpoints']
  >;
} & {
  textShadowColor?: ResponsiveValue<
    keyof Theme['colors'],
    Theme['breakpoints']
  >;
};

export type AllProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  ColorProps<Theme> &
  OpacityProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  TypographyProps<Theme> &
  LayoutProps<Theme> &
  WidthProps<Theme> &
  HeightProps<Theme> &
  PositionProps<Theme> &
  BorderProps<Theme> &
  ShadowProps<Theme> &
  TextShadowProps<Theme>;
