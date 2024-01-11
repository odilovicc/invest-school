import React from 'react';
import Button from "../Button/Button.jsx";

function AboutUs(props) {
    const texts = {
        welcomeTo: 'Invest School xususiy maktabiga xush kelibsiz',
        childrenWelcome: 'Наша школа была основана в 2018 году и с тех пор мы стремимся предоставить высококачественное образование детям в возрасте от детского сада до выпускного класса...',
    };

    return (
        <section className="container mx-auto py-10 md:py-20" id={`aboutus`}>
            <h1 className="text-2xl md:text-4xl text-zinc-800 font-semibold text-center">Invest School</h1>
            <hr className="my-3 md:my-5 rounded-full w-12 md:w-16 border border-themeBlue mx-auto" />
            <h1 className="text-lg md:text-xl font-light text-center">Samarqanddagi xususiy maktab</h1>
            <div className="p-6 md:p-12">
                <div className="flex flex-col md:flex-row flex-col-reverse gap-5 md:gap-10 justify-between items-center h-full">
                    <div className="h-full flex flex-col gap-2 md:gap-4 text-center md:text-left">
                        <h1 className="text-lg md:text-4xl font-semibold leading-relaxed">{texts.welcomeTo}</h1>
                        <p className="text-xs md:text-base my-auto">{texts.childrenWelcome}</p>
                        <Button mobile={true} value="Ko'proq bilish" className="mx-auto md:mx-0 text-mobile-text" paddingSize="p-mobile md:px-6 md:py-2" href="#" />
                    </div>
                    <img className="block rounded-md w-full md:w-auto" src="https://oxbridgeschool.uz/wp-content/uploads/2023/08/photo5389029864864066506-min.jpg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
