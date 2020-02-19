import React from 'react'
import './styles.scss'

const Button = (props) => {
    const { onClick, text,color } = props;
    const clickHandler = () => {
        onClick()
    }

    return <button className="button-default" style={{color}}
            onClick={onClick ? clickHandler : null}>
            {text.toUpperCase()}
    </button>
}

export default Button