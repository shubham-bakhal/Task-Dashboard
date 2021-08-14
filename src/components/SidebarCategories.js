import React from 'react'

const SidebarCategories = ({image, emoji, text}) => {
    return (
        <div>
        <img src={image} alt="" />
        <img className="emoji" src={emoji} alt="" />
        <p>{text}</p>
    </div>
    )
}

export default SidebarCategories
