import 'styled-components'
import type { defaultTheme } from '~/themes'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
