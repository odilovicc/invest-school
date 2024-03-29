import React, { useEffect, useState } from 'react';
import Button from "../Button/Button.jsx";

function VideoSection(props) {
    return (
        <div className={`bg-[url('https://placehold.it/500x250')] relative bg-[rgba(0,0,0,0.5)] min-h-96 bg-no-repeat bg-center bg-cover bg-fixed`}>
            <div className="bg-[rgba(0,0,0,0.5)] min-h-96">
                <div className="container mx-auto text-center py-20">
                    <h1 className={`text-white text-2xl md:text-7xl font-semibold mb-6`}>Bolaning maktabdagi hayoti</h1>
                    <p className={`text-xl md:text-xl w-[80%] mx-auto md:w-full font-light md:font-normal text-white mb-9`}><span className="font-semibold">qiziqarli</span> va <span className="font-semibold">mazmunli</span> o'tishi biz bilan kafolatlanadi</p>
                    <Button paddingSize={`p-mobile md:px-8 md:py-3 text-mobile-text`} value={`Imtihon topshirish`} href={`#`}/>
                </div>
            </div>
        </div>
    );
}

export default VideoSection;