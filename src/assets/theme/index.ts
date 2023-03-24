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
        },
        golden: {
            900: "#ED5500",
            800: "#F07400",
            700: "#F28C00",
            600: "#F4A400",
            500: "#F7B843",
            400: "#F7AB00",
            300: "#F7B413",
            200: "#F9CA52",
            100: "#FBDF91",
            50: "#FDF3D0",
        },
        dark_slate: {
            900: "#272b45",
            800: "#3d4058",
            700: "#4a4e69",
            600: "#5f627f",
            500: "#737790",
            400: "#8b8ea7",
            300: "#a2a5be",
            200: "#b9bcd5",
            100: "#d1d3ec",
            50: "#e8e9f3"
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
                    borderRadius: "xl",
                    _hover: {
                        bg: 'dark_blue.700',
                        textDecoration: 'none',
                    },
                    _active: {
                        bg: 'dark_blue.800'
                    }
                },
                solid: {
                    bg: "dark_slate.900",
                    fontWeight: "lg",
                    borderRadius: "xl",
                    _hover: {
                        bg: 'dark_slate.800',
                    },
                    _active: {
                        bg: 'dark_slate.700'
                    }
                },
                'catchy': {
                    bg: 'golden.500',
                    color: "gray.800",
                    fontWeight: 600,
                    borderRadius: "xl",
                    _hover: {
                        bg: 'golden.300',
                    },
                    _active: {
                        bg: 'golden.400'
                    }
                }
            },
        },
        Link: {
            variants: {
                'catchy': {
                    bg: 'golden.500',
                    color: "gray.800",
                    fontWeight: 600,
                    borderRadius: "xl",
                    px: 4,
                    py: 3,
                    _hover: {
                        bg: 'golden.300',
                    },
                    _active: {
                        bg: 'golden.400'
                    }
                }
            },
        },
    }
}

export default theme