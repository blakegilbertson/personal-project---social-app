import React from 'react'

const Link = props => {
    const {
        href = '/',
        id = null,
        className = null,
        type = 'primary',
        text = 'Link',
        onClick = null
    } = props

    return <a href={href} id={id} className={`link link-${type} ${className}`} onClick={onClick}>{text}</a>
};

export default Link