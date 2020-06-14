import React from 'react'

const Button = props => {
    const {
        type = 'tertiary', // primary, secondary, tertiary
        id = null, 
        className = null, 
        onClick = () => {alert('No onClick event set')}, 
        text="Button"
    } = props

    return <button id={ id } className={`button button-${type} ${className}`} onClick={onClick}>{text}</button>
};

export default Button