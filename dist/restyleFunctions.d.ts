import { TextStyle, FlexStyle, ViewStyle } from 'react-native';
import { BaseTheme, ResponsiveValue, RNStyleProperty } from './types';
declare const spacingProperties: {
    margin: boolean;
    marginTop: boolean;
    marginRight: boolean;
    marginBottom: boolean;
    marginLeft: boolean;
    marginHorizontal: boolean;
    marginVertical: boolean;
    marginStart: boolean;
    marginEnd: boolean;
    padding: boolean;
    paddingTop: boolean;
    paddingRight: boolean;
    paddingBottom: boolean;
    paddingLeft: boolean;
    paddingHorizontal: boolean;
    paddingVertical: boolean;
    paddingStart: boolean;
    paddingEnd: boolean;
    columnGap: boolean;
    rowGap: boolean;
    gap: boolean;
};
declare const spacingPropertiesShorthand: {
    m: string;
    mt: string;
    mr: string;
    mb: string;
    ml: string;
    mx: string;
    my: string;
    ms: string;
    me: string;
    p: string;
    pt: string;
    pr: string;
    pb: string;
    pl: string;
    px: string;
    py: string;
    ps: string;
    pe: string;
    g: string;
    rg: string;
    cg: string;
};
declare const typographyProperties: {
    fontFamily: boolean;
    fontSize: boolean;
    fontStyle: boolean;
    fontWeight: boolean;
    lineHeight: boolean;
    includeFontPadding: boolean;
    fontVariant: boolean;
    letterSpacing: boolean;
    textAlign: boolean;
    textAlignVertical: boolean;
    textDecorationLine: boolean;
    textDecorationStyle: boolean;
    textTransform: boolean;
    verticalAlign: boolean;
    writingDirection: boolean;
};
declare const heightProperties: {
    height: boolean;
    minHeight: boolean;
    maxHeight: boolean;
};
declare const widthProperties: {
    width: boolean;
    minWidth: boolean;
    maxWidth: boolean;
    borderBottomWidth: boolean;
    borderLeftWidth: boolean;
    borderRightWidth: boolean;
    borderStartWidth: boolean;
    borderTopWidth: boolean;
    borderEndWidth: boolean;
    borderWidth: boolean;
};
declare const layoutProperties: {
    overflow: boolean;
    aspectRatio: boolean;
    alignContent: boolean;
    alignItems: boolean;
    alignSelf: boolean;
    justifyContent: boolean;
    flex: boolean;
    flexBasis: boolean;
    flexDirection: boolean;
    flexGrow: boolean;
    flexShrink: boolean;
    flexWrap: boolean;
};
declare const positionProperties: {
    position: boolean;
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
    start: boolean;
    end: boolean;
};
declare const borderProperties: {
    borderStyle: boolean;
};
declare const borderRadiusProperties: {
    borderRadius: boolean;
    borderBottomLeftRadius: boolean;
    borderBottomRightRadius: boolean;
    borderTopLeftRadius: boolean;
    borderTopRightRadius: boolean;
    borderBottomStartRadius: boolean;
    borderBottomEndRadius: boolean;
    borderTopStartRadius: boolean;
    borderTopEndRadius: boolean;
};
declare const borderColorProperties: {
    borderColor: boolean;
    borderTopColor: boolean;
    borderRightColor: boolean;
    borderLeftColor: boolean;
    borderBottomColor: boolean;
    borderStartColor: boolean;
    borderEndColor: boolean;
};
declare const shadowProperties: {
    shadowOpacity: boolean;
    shadowOffset: boolean;
    shadowRadius: boolean;
    elevation: boolean;
};
declare const textShadowProperties: {
    textShadowOffset: boolean;
    textShadowRadius: boolean;
};
export declare const backgroundColor: {
    property: "backgroundColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
};
export declare const backgroundColorShorthand: {
    property: "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "backgroundColor" | "bg">;
};
export declare const color: ({
    property: "color";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "textDecorationColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
})[];
export declare const opacity: {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
};
export declare const visible: {
    property: "visible";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "display" | "visible">;
};
export declare const spacing: {
    property: "rowGap" | "gap" | "columnGap" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
}[];
export declare const spacingShorthand: {
    property: "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "objectFit" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg">;
}[];
export declare const typography: {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "fontVariant" | "writingDirection" | "textAlignVertical" | "verticalAlign" | "includeFontPadding";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
}[];
export declare const width: {
    property: "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "maxWidth" | "minWidth" | "width";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
}[];
export declare const height: {
    property: "height" | "maxHeight" | "minHeight";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
}[];
export declare const layout: {
    property: "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "justifyContent" | "overflow";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
}[];
export declare const position: ({
    property: "bottom" | "end" | "left" | "position" | "right" | "start" | "top";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
})[];
export declare const border: ({
    property: "borderStyle";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "borderBottomColor" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderRightColor" | "borderStartColor" | "borderTopColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderRadius" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
})[];
export declare const shadow: ({
    property: "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
})[];
export declare const textShadow: ({
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
})[];
export declare const all: ({
    property: "backgroundColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "backgroundColor" | "bg">;
} | ({
    property: "color";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "textDecorationColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
})[] | {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "rowGap" | "gap" | "columnGap" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "objectFit" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg">;
} | {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "fontVariant" | "writingDirection" | "textAlignVertical" | "verticalAlign" | "includeFontPadding";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "maxWidth" | "minWidth" | "width";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "height" | "maxHeight" | "minHeight";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "justifyContent" | "overflow";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "bottom" | "end" | "left" | "position" | "right" | "start" | "top";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "borderStyle";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "borderBottomColor" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderRightColor" | "borderStartColor" | "borderTopColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderRadius" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, RNStyleProperty>;
})[];
export interface ColorProps<Theme extends BaseTheme> {
    color?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
    textDecorationColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
}
export interface OpacityProps<Theme extends BaseTheme> {
    opacity?: ResponsiveValue<number, Theme['breakpoints']>;
}
export interface VisibleProps<Theme extends BaseTheme> {
    visible?: ResponsiveValue<boolean, Theme['breakpoints']>;
}
export interface BackgroundColorProps<Theme extends BaseTheme> {
    backgroundColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
}
export interface BackgroundColorShorthandProps<Theme extends BaseTheme> {
    bg?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
}
export type SpacingProps<Theme extends BaseTheme> = {
    [Key in keyof typeof spacingProperties]?: ResponsiveValue<keyof Theme['spacing'], Theme['breakpoints']>;
};
export type SpacingShorthandProps<Theme extends BaseTheme> = {
    [Key in keyof typeof spacingPropertiesShorthand]?: ResponsiveValue<keyof Theme['spacing'], Theme['breakpoints']>;
};
export type TypographyProps<Theme extends BaseTheme> = {
    [Key in keyof typeof typographyProperties]?: ResponsiveValue<Theme['typography'] extends object ? keyof Theme['typography'] : TextStyle[Key], Theme['breakpoints']>;
};
export type LayoutProps<Theme extends BaseTheme> = {
    [Key in keyof typeof layoutProperties]?: ResponsiveValue<Theme['layout'] extends object ? keyof Theme['layout'] : FlexStyle[Key], Theme['breakpoints']>;
};
export type WidthProps<Theme extends BaseTheme> = {
    [Key in keyof typeof widthProperties]?: ResponsiveValue<keyof Theme['widths'], Theme['breakpoints']>;
};
export type HeightProps<Theme extends BaseTheme> = {
    [Key in keyof typeof heightProperties]?: ResponsiveValue<keyof Theme['heights'], Theme['breakpoints']>;
};
export type PositionProps<Theme extends BaseTheme> = {
    [Key in keyof typeof positionProperties]?: ResponsiveValue<Theme['layout'] extends object ? keyof Theme['layout'] : FlexStyle[Key], Theme['breakpoints']>;
} & {
    zIndex?: ResponsiveValue<Theme['zIndices'] extends object ? keyof Theme['zIndices'] : number, Theme['breakpoints']>;
};
export type BorderProps<Theme extends BaseTheme> = {
    [Key in keyof typeof borderProperties]?: ResponsiveValue<Theme['borders'] extends object ? keyof Theme['borders'] : ViewStyle[Key], Theme['breakpoints']>;
} & {
    [Key in keyof typeof borderColorProperties]?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
} & {
    [Key in keyof typeof borderRadiusProperties]?: ResponsiveValue<Theme['borderRadii'] extends object ? keyof Theme['borderRadii'] : number, Theme['breakpoints']>;
};
export type ShadowProps<Theme extends BaseTheme> = {
    [Key in keyof typeof shadowProperties]?: ResponsiveValue<Theme['shadows'] extends object ? keyof Theme['shadows'] : ViewStyle[Key], Theme['breakpoints']>;
} & {
    shadowColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
};
export type TextShadowProps<Theme extends BaseTheme> = {
    [Key in keyof typeof textShadowProperties]?: ResponsiveValue<Theme['textShadows'] extends object ? keyof Theme['textShadows'] : TextStyle[Key], Theme['breakpoints']>;
} & {
    textShadowColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
};
export type AllProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> & BackgroundColorShorthandProps<Theme> & ColorProps<Theme> & OpacityProps<Theme> & SpacingProps<Theme> & SpacingShorthandProps<Theme> & TypographyProps<Theme> & LayoutProps<Theme> & WidthProps<Theme> & HeightProps<Theme> & PositionProps<Theme> & BorderProps<Theme> & ShadowProps<Theme> & TextShadowProps<Theme>;
export {};
