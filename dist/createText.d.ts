import React from 'react';
import { BaseTheme, RestyleFunctionContainer } from './types';
import { ColorProps, OpacityProps, SpacingProps, TextShadowProps, TypographyProps, VisibleProps, SpacingShorthandProps, LayoutProps } from './restyleFunctions';
import { VariantProps } from './createVariant';
type BaseTextProps<Theme extends BaseTheme> = ColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & TypographyProps<Theme> & SpacingProps<Theme> & LayoutProps<Theme> & TextShadowProps<Theme> & VariantProps<Theme, 'textVariants'>;
export type TextProps<Theme extends BaseTheme, EnableShorthand extends boolean = true> = EnableShorthand extends true ? BaseTextProps<Theme> & SpacingShorthandProps<Theme> : BaseTextProps<Theme>;
export declare const textRestyleFunctions: (({
    property: "color";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "textDecorationColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
})[] | {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "visible";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "display" | "visible">;
} | {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "fontVariant" | "writingDirection" | "textAlignVertical" | "verticalAlign" | "includeFontPadding";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
}[] | {
    property: "rowGap" | "gap" | "columnGap" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
}[] | {
    property: "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "elevation" | "pointerEvents" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "testID" | "fontVariant" | "writingDirection" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "objectFit" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg">;
}[] | ({
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
})[] | {
    property: "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "justifyContent" | "overflow";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
}[] | RestyleFunctionContainer<VariantProps<BaseTheme, "textVariants", "variant">, BaseTheme, "variant", "textVariants">)[];
declare const createText: <Theme extends BaseTheme, Props = import("react-native").TextProps & {
    children?: React.ReactNode;
}, EnableShorthand extends boolean = true>(BaseComponent?: React.ComponentType<any>) => React.ForwardRefExoticComponent<React.RefAttributes<unknown>> & {
    defaultProps?: Partial<React.RefAttributes<unknown>> | undefined;
};
export default createText;
