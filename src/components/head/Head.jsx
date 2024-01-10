import React from 'react';
import telegram from '/src/assets/images/telegram.png'
import instagram from '/src/assets/images/instagram.png'
import youtube from '/src/assets/images/youtube.png'
import uzbekistan from '/src/assets/images/flags/uzbekistan.png'
import russia from '/src/assets/images/flags/russia.png'
import unitedStates from '/src/assets/images/flags/united-states.png'
function Head(props) {
    return (
        <header className={`w-full bg-gray-200 py-1 border-b-2`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className={`flex gap-6 items-center`}>
                    <a className={`hover:cursor-pointer`} href={props.telegramLink}>
                        <img src={telegram} className={`w-5`} alt=""/>
                    </a>
                    <a className={`hover:cursor-pointer`} href={props.instaLink}>
                        <img src={instagram} className={`w-5`} alt=""/>
                    </a>
                    <a className={`hover:cursor-pointer`} href={props.youtubeLink}>
                        <img src={youtube} className={`w-5`} alt=""/>
                    </a>
                </div>
                <div className={`flex gap-6 items-center`}>
                    <a href="#" className={`text-themeBlue flex items-center gap-[5px]`}>
                        <img src={uzbekistan} className={`w-5`} alt=""/>
                        UZ
                    </a>
                    <a href="#" className={`text-themeBlue flex items-center gap-[5px]`}>
                        <img src={russia} className={`w-5`} alt=""/>
                        RU
                    </a>
                    <a href="#" className={`text-themeBlue flex items-center gap-[5px]`}>
                        <img src={unitedStates} className={`w-5`} alt=""/>
                        EN
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Head;