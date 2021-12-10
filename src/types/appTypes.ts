import { FlattenInterpolation, SimpleInterpolation, ThemedStyledProps } from 'styled-components';

export type CustomStyles =
| SimpleInterpolation
| FlattenInterpolation<ThemedStyledProps<any, any>>;
