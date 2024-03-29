const theme = {
  colors: {
    dark_blue: {
      900: '#1D1D33',
      800: '#292945',
      700: '#353556',
      600: '#414167',
      500: '#474770',
      400: '#4A4A74',
      300: '#4D4C78',
      200: '#51517B',
      100: '#55557E',
    },
    golden: {
      50: '#FFE9A9',
      100: '#FFDC7B',
      200: '#FFCF4D',
      300: '#FFC11E',
      500: '#F7B843',
      600: '#DB9D34',
      700: '#BF832B',
      800: '#A26923',
      900: '#865E1C',
    },
    dark_slate: {
      900: '#272b45',
      800: '#3d4058',
      700: '#4a4e69',
      600: '#5f627f',
      500: '#737790',
      400: '#8b8ea7',
      300: '#a2a5be',
      200: '#b9bcd5',
      100: '#d1d3ec',
      50: '#e8e9f3',
    },
  },
  styles: {
    global: {
      html: {
        minHeight: '100vh',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        bg: 'dark_blue.900',
        color: 'white',
        minHeight: '100vh',
      },
      main: {
        flex: 1,
      },
      '::-webkit-scrollbar': {
        width: '5px',
      },
      '::-webkit-scrollbar-track': {
        bg: 'dark_blue.900',
      },
      '::-webkit-scrollbar-thumb': {
        bg: 'dark_slate.600',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
      },
    },
  },
  components: {
    Button: {
      variants: {
        outline: {
          border: '1px solid',
          borderColor: 'blue.600',
          color: 'blue.600',
          borderRadius: 'xl',
          _hover: {
            bg: 'dark_blue.700',
            textDecoration: 'none',
          },
          _active: {
            bg: 'dark_blue.800',
          },
        },
        solid: {
          bg: 'dark_slate.900',
          fontWeight: 'lg',
          borderRadius: 'xl',
          _hover: {
            bg: 'dark_slate.800',
          },
          _active: {
            bg: 'dark_slate.700',
          },
        },
        catchy: {
          bg: 'golden.500',
          color: 'gray.800',
          fontWeight: 600,
          borderRadius: 'xl',
          _hover: {
            bg: 'golden.300',
          },
          _active: {
            bg: 'golden.400',
          },
        },
      },
    },
    Link: {
      variants: {
        catchy: {
          bg: 'golden.500',
          color: 'gray.800',
          fontWeight: 600,
          borderRadius: 'xl',
          px: 4,
          py: 3,
          _hover: {
            bg: 'golden.300',
            textDecoration: 'none',
          },
          _active: {
            bg: 'golden.400',
          },
        },
        button: {
          bg: 'dark_slate.900',
          fontWeight: 'lg',
          borderRadius: 'xl',
          px: 4,
          py: 2,
          _hover: {
            bg: 'dark_slate.800',
            textDecoration: 'none',
          },
          _active: {
            bg: 'dark_slate.700',
          },
        },
      },
    },
  },
}

export default theme
