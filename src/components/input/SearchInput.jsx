import React from 'react';

function SearchInput({ placeholder, onSearch }) {
    return (
        <div className="flex items-center border-b border-mainBlue py-2 pb-4 px-2">
            <input
                type="text"
                placeholder={placeholder}
                className="flex-grow border-none outline-none"
            />
            <button
                className="border-none pl-2 bg-transparent cursor-pointer"
                onClick={onSearch}
            >
                <img
                    src="/src/assets/images/search.svg"
                    alt="Search"
                    className="w-6 h-6"
                />
            </button>
        </div>
    );
}

export default SearchInput;
