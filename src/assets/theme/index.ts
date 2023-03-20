const theme = {
    colors: {
        dark_blue: {
            900: '#1D1D33',
            800: '#292945',
            700: '#353556'
        },
        blue: {
            500: '#758BFD'
        }
    },
    styles: {
        global: {
            body: {
                bg: 'dark_blue.900',
                color: 'white',
            },
        },
    },
    components: {
        Button: {
            variants: {
                outline: {
                    border: '1px solid',
                    borderColor: 'blue.500',
                    color: 'blue.500',
                    _hover: {
                        bg: 'dark_blue.700',
                        textDecoration: 'none',
                    },
                    _active: {
                        bg: 'dark_blue.800'
                    }
                },
            },
        },
    }
}

export default theme