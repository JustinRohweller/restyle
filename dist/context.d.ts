import React from 'react';
import { BaseTheme } from 'types';
export declare const ThemeContext: React.Context<{
    colors: {};
    spacing: {};
}>;
export declare const ThemeProvider: ({ theme, children, }: {
    theme: BaseTheme;
    children: React.ReactNode;
}) => React.JSX.Element;
