import React from 'react';
import { BaseTheme, RestyleFunctionContainer } from './types';
declare const createRestyleComponent: <Props extends {
    [key: string]: any;
}, Theme extends BaseTheme>(restyleFunctions: (RestyleFunctionContainer<Props, Theme, keyof Props, keyof Theme | undefined> | RestyleFunctionContainer<Props, Theme, keyof Props, keyof Theme | undefined>[])[], BaseComponent?: React.ComponentType<any>) => React.ForwardRefExoticComponent<React.RefAttributes<unknown>> & {
    defaultProps?: Partial<React.RefAttributes<unknown>> | undefined;
};
export default createRestyleComponent;
