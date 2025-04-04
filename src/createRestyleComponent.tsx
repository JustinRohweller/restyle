import React from 'react';
import {View} from 'react-native';

import composeRestyleFunctions from './composeRestyleFunctions';
import useRestyle from './hooks/useRestyle';
import {BaseTheme, RestyleFunctionContainer} from './types';

const createRestyleComponent = <
  Props extends {[key: string]: any},
  Theme extends BaseTheme,
>(
  restyleFunctions: (
    | RestyleFunctionContainer<Props, Theme>
    | RestyleFunctionContainer<Props, Theme>[]
  )[],
  BaseComponent: React.ComponentType<any> = View,
) => {
  const composedRestyleFunction = composeRestyleFunctions(restyleFunctions);

  const RestyleComponent = React.forwardRef((props: Props, ref) => {
    const passedProps = useRestyle(composedRestyleFunction, props);
    return <BaseComponent ref={ref} {...passedProps} />;
  });
  type RestyleComponentType = typeof RestyleComponent;
  return RestyleComponent as RestyleComponentType & {
    defaultProps?: Partial<React.ComponentProps<RestyleComponentType>>;
  };
};

export default createRestyleComponent;
