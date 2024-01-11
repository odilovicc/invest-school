import React from 'react';

function Button(props) {
    // Используем дефолтные значения или переданные значения из props
    const paddingSize = props.paddingSize || 'px-3 py-4'; // Дефолтное значение или значение из props
    const backgroundColor = props.backgroundColor || 'bg-themeBlue'; // Дефолтное значение или значение из props
    const mobile = props.mobile || 'px-1.5 py-0.5'
    return (
        <a
            className={`${paddingSize} w-max ${props.className} hover:bg-transparent border-2 border-transparent hover:border-themeBlue hover:text-themeBlue hover:cursor-pointer transition duration-200 rounded-[6px] ${backgroundColor} text-white`}
            href={props.href}
        >
            {props.value}
        </a>
    );
}

export default Button;
