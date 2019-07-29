/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */

const rebeccapurple = '#639'

export default {
  breakpoints: ['640px', '960px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#fff',
    primary: rebeccapurple,
    secondary: '#30c',
    muted: '#f6f6f6'
  },
  fonts: {
    body:
      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: 'inherit',
    monospace: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace'
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 40, 48, 56, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  linkStyles: {
    nav: {
      color: 'inherit',
      display: 'block',
      p: '0.75rem 1.5rem',
      ':hover': {
        color: 'primary',
        textDecoration: 'none'
      },
      '&.active': {
        color: 'primary',
        fontWeight: 'bold'
      }
    }
  },
  styles: {
    root: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: [2, 3]
    },
    h1: {
      variant: 'textStyles.heading',
      fontSize: [6, 7]
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: [5, 6]
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: [4, 5]
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: [3, 4]
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: [2, 3]
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: [1, 2]
    },
    p: {},
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      },
      '&.active': {
        color: 'text'
      }
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  },
  layout: {
    global: {
      html: {
        boxSizing: 'border-box',
        fontSize: 0
      },
      [['*', '*:after', '*:before']]: {
        boxSizing: 'inherit'
      },
      body: {
        margin: 0,
        backgroundColor: 'background'
      },
      '::selection': {
        color: 'background',
        backgroundColor: 'primary'
      }
    },
    root: {
      minHeight: '100vh',
      maxWidth: 960,
      mx: 'auto',
      overflowX: 'hidden'
    },
    sidebar: {
      bg: 'background',
      float: 'left',
      width: 300,
      minHeight: '100%',
      mr: '-100%',
      position: 'absolute',
      left: [theme => -theme.layout.sidebar.width, null, 'auto'],
      visibility: ['hidden', null, 'visible'],
      transition: 'left 0.1s',
      '&.active': {
        left: 'auto',
        visibility: 'visible'
      }
    },
    main: {
      width: [
        '100%',
        null,
        theme => `calc(100% - ${theme.layout.sidebar.width}px)`
      ],
      ml: [null, null, theme => theme.layout.sidebar.width],
      float: [null, null, 'left'],
      transition: 'margin-left 0.1s',
      '&.pushed': {
        ml: theme => theme.layout.sidebar.width
      }
    },
    container: {
      width: '100%',
      maxWidth: 640,
      mx: 'auto',
      my: 4,
      px: 3
    }
  }
}