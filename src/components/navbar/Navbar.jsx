import React from 'react';

function Navbar(props) {
    const links = ['Bosh sahifa', 'Biz haqimizda', 'Kurslar', 'Biz bilan bog\'lanish'];

    return (
        <div className="flex items-center bg-gray-50 justify-center ">
            <ul className="flex gap-4">
                {links.map((link, index) => (
                    <li key={index} className={`px-2 py-4 hover:border-b-2 border-b-themeBlue`}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
