import React from 'react';
import { ViewProps } from 'react-native';
import { VariantProps } from '../createVariant';
import { BackgroundColorProps, BorderProps, SpacingProps } from '../restyleFunctions';
export declare const theme: {
    colors: {
        background: string;
    };
    spacing: {
        none: number;
        m: number;
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
    spacingVariant: {
        defaults: {};
        spacingParent: {
            padding: {
                phone: string;
                tablet: string;
            };
        };
        spacingNested: {
            padding: {
                phone: string;
                tablet: string;
            };
        };
    };
};
type Theme = typeof theme;
type RestyleProps = SpacingProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & VariantProps<Theme, 'spacingVariant'>;
type Props = RestyleProps & ViewProps;
export declare const Container: ({ children, ...rest }: Props) => React.JSX.Element;
export {};
