import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: {
        primary: string
        secondary: string
        tertiary: string
      }
      purple: {
        primary: string
        secondary: string
      }
      yellow: {
        primary: string
      }
      background: string
      white: string
    }
  }
}
