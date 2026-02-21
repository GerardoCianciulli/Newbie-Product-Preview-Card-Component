import React from 'react'

type ButtonProps = {
    text: string
    icon: React.ComponentType<{}>
}

const Button = ({ text, icon: Icon }: ButtonProps) => {
    return (
        <button className="bold">
            <Icon />{text}
        </button>)
}

export default Button