import 'styled-components';
import { ThemeOptions } from '@material-ui/core';

declare module 'styled-components' {
  export type DefaultTheme = ThemeOptions;
}
