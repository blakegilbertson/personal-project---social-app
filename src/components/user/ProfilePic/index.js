import React from 'react'

const ProfilePic = props => {
    const {
        id = null,
        className = null,
        imgSrc = 'https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png',
        altTag = 'default profile',
        type = 'large' // small, medium, large
    } = props

    return (
        <div id={id} className={`profile-image profile-image-${type} ${className}`}>
            <img src={`${imgSrc}`} alt={`${altTag}`} />
        </div>
    )
};

export default ProfilePic