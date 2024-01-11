import React from 'react';

function WhyUs(props) {
    const texts = {
        whyUs: 'Nega aynan biz?',
        whyUsSub: 'Asosiy nuqtalar'
    }
    const cardData = [
        {
            cardTitle: 'Инфраструктура школы',
            cardText: 'Это поля для футбола и баскетбола, две оборудованные детские площадки, два крытых бассейна, школьный театр, два спортзала, школьный кафетерий, множество мест отдыха на свежем воздухе, уличная сцена.',
            cardImage: 'https://media.graphassets.com/JL9XlHJBT9enAUCDUQaY',
        },
        {
            cardTitle: 'Педагогический состав школы',
            cardText: 'Это учителя из более, чем 10 разных стран, которые являются настоящими профессионалами своего дела. Наши учителя имеют большой опыт преподавания и используют различные педагогические технологии.',
            cardImage: 'https://media.graphassets.com/u9IkW8bSPSDjRbimA9RQ',
        },
        {
            cardTitle: 'Современный кампус',
            cardText: 'Территория школы Oxbridge International School составляет 1 гектар, которая находится на северо-востоке Ташкента. Этот район всегда считался одним из чистых и прохладных районов Ташкента.',
            cardImage: 'https://media.graphassets.com/mLQmV7cEQ5CDTLbYKiBy',
        }
    ]
    return (
        <div className={`bg-white`}>
            <section className={`container mx-auto py-20`}>
                <h1 className="text-mobile-heading md:text-4xl text-zinc-800 font-semibold text-center">{texts.whyUs}</h1>
                <hr className={`my-5 rounded-full w-16 border border-themeBlue mx-auto`}/>
                <h1 className={`text-mobile-subheading md:text-xl font-light text-center`}>{texts.whyUsSub}</h1>
                <div className="flex flex-col md:flex-row justify-between p-10">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-sm bg-white rounded-lg">
                            <a href="#">
                                <img className="rounded-lg" src={card.cardImage} alt=""/>
                            </a>
                            <div className="py-5">
                                <a href="#">
                                    <h5 className="mb-2 text-mobile-heading md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.cardTitle}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-mobile-text md:text-sm">{card.cardText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default WhyUs;