import "styled-components";
import { lightTheme } from "./theme";

type ThemeType = typeof lightTheme;

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}
