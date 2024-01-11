import React, { useState } from 'react';
import {contacts, links, paths} from '/src/assets/data/contacts.js';
import CallSvg from "../../assets/images/Call.jsx";
import AddressSvg from "../../assets/images/Address.jsx";
import SearchInput from "../input/SearchInput.jsx";
import Button from "../Button/Button.jsx";
import {BrowserRouter as Router, Link} from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(setIsMenuOpen)
    };

    return (
        <div className="border-b bg-white">
            <div className="flex container mx-auto items-center justify-between py-4 px-6 md:px-10">
                {/* Phone & Address */}
                <div className="hidden md:flex space-x-10">
                    <div className="flex items-center space-x-3">
                        <CallSvg/>
                        <div className="flex flex-col space-y-1">
                            <h1 className="font-semibold">Telefon raqami</h1>
                            <span className="font-light">{contacts[0].number}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <AddressSvg/>
                        <div className="flex flex-col space-y-1">
                            <h1 className="font-semibold">Manzil</h1>
                            <span className="font-light">{contacts[0].address}</span>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <img src="/logo.png" className="w-[20%] md:w-[9%]" alt=""/>

                {/* Hamburger Menu */}
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </div>
                </div>
                <section className="MOBILE-MENU flex items-center lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <Router>
                                {links.map((label, index) => (
                                    <li className="border-b border-gray-400 my-8 uppercase hover:border-themeBlue" key={index}>
                                        <Link
                                            to={paths[index]}
                                            onClick={() => setIsNavOpen(false)}  // Закрыть меню при клике
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </Router>
                        </ul>
                    </div>
                </section>
                {/* Search & Button */}
                <div className={`hidden md:flex space-x-4`}>
                    <SearchInput placeholder="Izlash..." />
                    <Button paddingSize={`px-4 py-3`} value="Maktabga kirish" />
                </div>
            </div>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
}

export default Header;
