import React from 'react'

export default function Navbar(props) {
    return (
        <div className="topnav">
            <a className="active" href="/">{props.title}</a>
            <a href="/">Home</a>
        </div>
    )
}
