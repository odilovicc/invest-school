import React from 'react';
import Button from "../Button/Button.jsx";

function AboutUs(props) {
    const texts = {
            welcomeTo: 'Invest School xususiy maktabiga xush kelibsiz',
            childrenWelcome: 'Наша школа была основана в 2018 году и с тех пор мы стремимся предоставить высококачественное образование детям в возрасте от детского сада до выпускного класса...',
    }
    return (
        <section className={`container mx-auto py-20`}>
            <h1 className="text-4xl text-zinc-800 font-semibold text-center">Invest School</h1>
            <hr className={`my-5 rounded-full w-16 border border-themeBlue mx-auto`}/>
            <h1 className={`text-xl font-light text-center`}>Samarqanddagi xususiy maktab </h1>
            <div className="p-12">
                <div className="flex justify-between items-center h-full">
                    <div className={`h-full flex flex-col gap-8 text-center md:text-left`}>
                        <h1 className="text-4xl font-semibold leading-relaxed">{texts.welcomeTo}</h1>
                        <p className={`text-xl my-auto`}>{texts.childrenWelcome}</p>
                        <Button value={`Ko'proq bilish`} className={`mx-auto md:mx-0`} paddingSize={`px-8 py-3`} href={`#`}/>
                    </div>
                    <img className={`hidden md:block`} src="https://oxbridgeschool.uz/wp-content/uploads/2023/08/photo5389029864864066506-min.jpg" alt=""/>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;