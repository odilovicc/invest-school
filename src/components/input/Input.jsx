import React from 'react';

function Input(props) {
    return (
        <div>
            <input type={props.type}
                   className={`border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full py-3 px-5 ${props.className}`} placeholder={props.placeholder} required/>
        </div>
    );
}

export default Input;