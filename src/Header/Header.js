import React from "react"
import "./Header.css"

const Header = props => {
    return (
        <header>NASA picture of the day. Taken by {props.copyright}.</header>
    )
}

export default Header