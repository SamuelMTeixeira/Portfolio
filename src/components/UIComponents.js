import { Button, NavLink } from 'react-bootstrap'
import '../assets/css/Button.css'

export const UILink = (props) => {
    const classes = props.className || ''
    const { design, children } = props

    if (design === 'filled') {
        return (
            <NavLink {...props} className={`filled rounded d-flex justify-content-center py-2 px-4 align-items-center flex-row gap-2 ` + classes}>
                {children}
            </NavLink>
        )
    }
    else {
        return (
            <NavLink {...props} className={`outlined rounded d-flex justify-content-center py-2 px-4 align-items-center flex-row gap-2 ` + classes}>
                {children}
            </NavLink>
        )
    }
}

export const UIButton = (props) => {
    const classes = props.className || ''
    const { design, children } = props

    if (design === 'filled') {
        return (
            <Button {...props} className={`filled rounded d-flex justify-content-center py-2 px-4 align-items-center flex-row gap-2 ` + classes}>
                {children}
            </Button>
        )
    }
    else {
        return (
            <Button {...props} className={`outlined rounded d-flex justify-content-center py-2 px-4 align-items-center flex-row gap-2 ` + classes}>
                {children}
            </Button>
        )
    }
}