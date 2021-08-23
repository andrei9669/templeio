import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
  export interface ThemeOptions {
    isDarkMode: boolean;
  }
}
