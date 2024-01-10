import React, { useState } from 'react';
import { contacts } from '/src/assets/data/contacts.js';
import Button from "../Button/Button.jsx";
import SearchInput from "../input/SearchInput.jsx";
import CallSvg from "../../assets/images/Call.jsx";
import Address from "../../assets/images/Address.jsx";
import AddressSvg from "../../assets/images/Address.jsx";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        // setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="border-b bg-white">
            <div className="flex container mx-auto items-center justify-between py-4 px-6 md:px-10">
                {/* Phone & Address */}
                <div className="hidden md:flex space-x-10">
                    <div className="flex items-center space-x-3">
                        {/*<img src="/src/assets/images/call.svg" alt=""/>*/}
                        <CallSvg/>
                        <div className="flex flex-col space-y-1">
                            <h1 className="font-semibold">Telefon raqami</h1>
                            <span className="font-light">{contacts[0].number}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/*<img src="/src/assets/images/address.svg" alt=""/>*/}
                        <AddressSvg/>
                        <div className="flex flex-col space-y-1">
                            <h1 className="font-semibold">Manzil</h1>
                            <span className="font-light">{contacts[0].address}</span>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <img src="/logo.png" className="w-[9%]" alt=""/>

                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <img src="/src/assets/images/menu-icon.svg" alt="Menu" />
                    </button>
                </div>

                {/* Search & Button */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex space-x-4`}>
                    <SearchInput placeholder="Izlash..." />
                    <Button paddingSize={`px-4 py-3`} value="Maktabga kirish" />
                </div>

                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    {/* Здесь вы можете добавить элементы для гамбургер-меню */}
                    {/* Например: */}
                    <a href="#" className="block py-2">Bosh sahifa</a>
                    <a href="#" className="block py-2">Biz haqimizda</a>
                    {/* ... и так далее */}
                </div>
            </div>
        </div>
    );
}

export default Header;
