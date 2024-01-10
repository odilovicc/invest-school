import React from 'react';

function Button(props) {
    // Используем дефолтные значения или переданные значения из props
    const paddingSize = props.paddingSize || 'px-3 py-4'; // Дефолтное значение или значение из props
    const backgroundColor = props.backgroundColor || 'bg-themeBlue'; // Дефолтное значение или значение из props

    return (
        <a
            className={`${paddingSize} w-max ${props.className} rounded-[6px] ${backgroundColor} text-white`}
            href={props.href}
        >
            {props.value}
        </a>
    );
}

export default Button;
