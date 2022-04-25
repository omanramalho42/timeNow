import { DefaultTheme } from 'styled-components'
import { myTheme } from './theme/MyTheme';

declare module 'styled-components' {

    export interface DefaultTheme extends myTheme { }
}