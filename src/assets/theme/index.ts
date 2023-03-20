const theme = {
    colors: {
        dark_blue: {
            900: "#1D1D33",
            800: "#292945",
            700: "#353556",
            600: "#414167",
            500: "#474770",
            400: "#4A4A74",
            300: "#4D4C78",
            200: "#51517B",
            100: "#55557E"
        },
        blue: {
            100: "#C2CAFE",
            200: "#A5B5FC",
            300: "#879EF9",
            400: "#6B88F7",
            500: "#758BFD",
            600: "#5B69C4",
            700: "#444E86",
            800: "#2D3249",
            900: "#161A27"
        }
    },
    styles: {
        global: {
            html: {
                minHeight: "100vh",
            },
            body: {
                display: 'flex',
                flexDirection: 'column',
                bg: 'dark_blue.900',
                color: 'white',
                minHeight: "100vh",
            },
            main: {
                flex: 1
            },
            '::-webkit-scrollbar': {
                width: "5px",
            },
            '::-webkit-scrollbar-track': {
                bg: 'dark_blue.900',
            },
            '::-webkit-scrollbar-thumb': {
                bg: 'blue.500',
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