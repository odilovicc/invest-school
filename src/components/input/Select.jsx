import React from 'react';
import './Select.css'; // импортируйте файл стилей или добавьте стили непосредственно в этот файл

function Select(props) {
    return (
        <div className="custom-select-container">
            <select
                id="countries"
                className="custom-select"
                value={props.selectedValue}
            >
                <option value={props.selectedValue} disabled>{props.selected}</option>
                {props.variants.map((option, key) => (
                    <option value={option} key={key}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;
