import React from 'react';
import Button from "../Button/Button.jsx";

function Hero() {
    return (
        <div className={`flex flex-col items-center relative justify-center text-center h-[80vh] overflow-y-hidden bg-black`}>
            <div className="heroBg absolute w-full h-full top-0 left-0"></div>
            <div className={`px-4 md:px-12 my-auto text-white relative`}>
                <span className={`text-lg md:text-2xl uppercase`}>Welcome To</span>
                <h1 className={`animate-charcter text-4xl md:text-7xl font-semibold my-4 md:my-8`}>Invest school</h1>
                <p className={`w-full md:w-1/2 leading-8 text-[15px] md:text-[22px] mx-auto mb-4 md:mb-8`}>Biz har bir bola o’qishga, ilmiy, ijodiy va sport g’alabalariga erishishga, muloqot qilishga, do’stlashishga va shunchaki yashashga qiziqadigan maktab yaratmoqdamiz.</p>
                <Button href={`#`} value={`Imtihon topshirish`} paddingSize="px-6 py-3" />
            </div>
        </div>
    );
}

export default Hero;
