import React from 'react';

function Teachers(props) {
    const texts = {
        title: 'Bizning o`qituvchilarimiz',
        teachers: ['Алексей Иванов','Елена Петрова','Максим Смирнов','Анна Кузнецова','Иван Соколов', 'Ольга Морозова','Дмитрий Новиков']
    }
    const cardData = [
        {
            cardTitle: texts.teachers[0],
            cardText: 'Algebra o`qituvchisi',
            cardImage: 'https://placehold.it/300x200',
        },
        {
            cardTitle: texts.teachers[1],
            cardText: 'Ingliz tili o`qituvchisi',
            cardImage: 'https://placehold.it/300x200',
        },
        {
            cardTitle: texts.teachers[2],
            cardText: 'Rus tili o`qituvchisi',
            cardImage: 'https://placehold.it/300x200',
        },{
            cardTitle: texts.teachers[3],
            cardText: 'Ona tili o`qituvchisi',
            cardImage: 'https://placehold.it/300x200',
        },
    ]
    return (
        <div>
            <div className="container mx-auto py-20" id={`teachers`}>
                <h1 className="text-mobile-heading md:text-4xl text-zinc-800 font-semibold text-center">{texts.title}</h1>
                <hr className={`my-5 rounded-full w-16 border border-themeBlue mx-auto`}/>
                <div className="container mx-auto flex flex-col md:flex-row md:gap-0 justify-center md:justify-between py-10">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="max-w-sm mx-auto md:mx-0 rounded-lg">
                            <a href="#">
                                <img className="rounded-lg w-full" src={card.cardImage} alt=""/>
                            </a>
                            <div className="py-5 text-center">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.cardTitle}</h5>
                                </a>
                                <hr className={`my-3 rounded-full w-16 border border-themeBlue mx-auto`}/>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.cardText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Teachers;