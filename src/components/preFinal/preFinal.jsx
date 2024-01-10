import React from 'react';
import Input from "../input/Input.jsx";
import Select from "../input/Select.jsx";
import Button from "../Button/Button.jsx";

function PreFinal(props) {
    const texts = {
        title: 'Bizning manzil',
        wantSchool: '"Invest School"da o`qishni xohlayman',
        location: 'https://placehold.it/800x450'
    }
    const inputs = {

    }
    return (
        <div className={`bg-white`}>
            <div className="container mx-auto py-20">
                <div className="flex flex-col px-10 md:px-0 md:flex-row gap-12 md:gap-0 justify-between">
                    <div>
                        <div>
                            <h1 className="text-4xl text-zinc-800 font-semibold">{texts.title}</h1>
                            <hr className={`my-5 rounded-full w-16 border border-themeBlue`}/>
                        </div>
                        <img src={texts.location} alt=""/>
                    </div>
                    <div className={``}>
                        <div>
                            <h1 className="text-4xl text-zinc-800 font-semibold text-right">{texts.wantSchool}</h1>
                            <hr className={`my-5 rounded-full w-16 border border-themeBlue ml-auto`}/>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Input className={``} placeholder={`Ism`}/>
                            <Input className={``} placeholder={`Familiya`}/>
                            <Input className={``} placeholder={`Telefon raqamingiz`}/>
                            <Input className={``} placeholder={`Millatingiz`}/>
                            <Input className={``} placeholder={`Email`}/>
                            <Select variants={[1,2,3,4]} selected={`Bola soni`}/>
                            <Button value={`Hujjat topshirish`} paddingSize={`px-8 py-3`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreFinal;