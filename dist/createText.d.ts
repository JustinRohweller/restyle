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
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "lineHeight" | "includeFontPadding" | "fontVariant" | "letterSpacing" | "textAlign" | "textAlignVertical" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "verticalAlign" | "writingDirection";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
}[] | {
    property: "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "marginStart" | "marginEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "paddingStart" | "paddingEnd" | "columnGap" | "rowGap" | "gap";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
}[] | {
    property: "p" | "g" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "rg" | "cg";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "pointerEvents" | "testID" | "p" | "g" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "marginStart" | "marginEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "paddingStart" | "paddingEnd" | "columnGap" | "rowGap" | "gap" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "rg" | "cg" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "lineHeight" | "includeFontPadding" | "fontVariant" | "letterSpacing" | "textAlign" | "textAlignVertical" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "verticalAlign" | "writingDirection" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "width" | "minWidth" | "maxWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderEndWidth" | "borderWidth" | "height" | "minHeight" | "maxHeight" | "position" | "top" | "right" | "bottom" | "left" | "start" | "end" | "borderStyle" | "borderColor" | "borderTopColor" | "borderRightColor" | "borderLeftColor" | "borderBottomColor" | "borderStartColor" | "borderEndColor" | "borderRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomStartRadius" | "borderBottomEndRadius" | "borderTopStartRadius" | "borderTopEndRadius" | "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation" | "textShadowOffset" | "textShadowRadius" | "backgroundColor" | "color" | "textDecorationColor" | "opacity" | "zIndex" | "shadowColor" | "textShadowColor" | "backfaceVisibility" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderCurve" | "borderEndEndRadius" | "borderEndStartRadius" | "borderStartEndRadius" | "borderStartStartRadius" | "display" | "direction" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "resizeMode" | "overlayColor" | "tintColor" | "objectFit">;
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
    property: "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap";
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
