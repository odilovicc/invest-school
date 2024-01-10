import React from 'react';

function Select(props) {
    return (
        <div>
            <select
                id="countries"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={props.selectedValue} // устанавливаем выбранное значение
            >
                <option value={props.selectedValue}>{props.selected}</option>
                {props.variants.map((option, key) => (
                    <option value={option} key={key}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;
