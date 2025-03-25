import React from 'react';
import { BaseTheme } from './types';
import { BackgroundColorProps, OpacityProps, LayoutProps, SpacingProps, BorderProps, ShadowProps, PositionProps, VisibleProps, SpacingShorthandProps, BackgroundColorShorthandProps } from './restyleFunctions';
type BaseBoxProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & LayoutProps<Theme> & SpacingProps<Theme> & BorderProps<Theme> & ShadowProps<Theme> & PositionProps<Theme>;
export type BoxProps<Theme extends BaseTheme, EnableShorthand extends boolean = true> = BaseBoxProps<Theme> & EnableShorthand extends true ? BaseBoxProps<Theme> & SpacingShorthandProps<Theme> & BackgroundColorShorthandProps<Theme> : BaseBoxProps<Theme>;
export declare const boxRestyleFunctions: ({
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
}[] | {
    property: "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
}[] | {
    property: "backgroundColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, "backgroundColor" | "bg">;
} | ({
    property: "borderStyle";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "borderColor" | "borderTopColor" | "borderRightColor" | "borderLeftColor" | "borderBottomColor" | "borderStartColor" | "borderEndColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "borderRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomStartRadius" | "borderBottomEndRadius" | "borderTopStartRadius" | "borderTopEndRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
})[] | ({
    property: "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
})[] | ({
    property: "position" | "top" | "right" | "bottom" | "left" | "start" | "end";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
})[])[];
declare const createBox: <Theme extends BaseTheme, Props = import("react-native").ViewProps & {
    children?: React.ReactNode;
}, EnableShorthand extends boolean = true>(BaseComponent?: React.ComponentType<any>) => React.ForwardRefExoticComponent<React.RefAttributes<unknown>> & {
    defaultProps?: Partial<React.RefAttributes<unknown>> | undefined;
};
export default createBox;
