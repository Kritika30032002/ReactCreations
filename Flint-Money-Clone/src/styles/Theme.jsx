import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '900px',
  '2xl': '1200px',
}

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
})

export default theme;