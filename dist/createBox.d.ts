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
}[] | {
    property: "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "justifyContent" | "overflow";
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
    property: "bottom" | "end" | "left" | "position" | "right" | "start" | "top";
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
})[] | ({
    property: "borderStyle";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "borderBottomColor" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderRightColor" | "borderStartColor" | "borderTopColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
} | {
    property: "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderRadius" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<{
        [key: string]: any;
    }, BaseTheme, import("./types").RNStyleProperty>;
})[] | ({
    property: "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius";
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
})[])[];
declare const createBox: <Theme extends BaseTheme, Props = import("react-native").ViewProps & {
    children?: React.ReactNode;
}, EnableShorthand extends boolean = true>(BaseComponent?: React.ComponentType<any>) => React.ForwardRefExoticComponent<React.RefAttributes<unknown>> & {
    defaultProps?: Partial<React.RefAttributes<unknown>> | undefined;
};
export default createBox;
