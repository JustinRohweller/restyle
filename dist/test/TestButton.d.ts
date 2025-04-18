import React, { ComponentPropsWithoutRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { PositionProps } from '../restyleFunctions';
import { VariantProps } from '../createVariant';
declare const theme: {
    colors: {};
    spacing: {};
    buttonVariants: {
        defaults: {};
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
    zIndices: {
        phone: number;
    };
};
type Theme = typeof theme;
type Props = VariantProps<Theme, 'buttonVariants'> & PositionProps<Theme> & ComponentPropsWithoutRef<typeof TouchableOpacity>;
export declare function Button({ title, ...rest }: Props & {
    title: string;
}): React.JSX.Element;
export {};
