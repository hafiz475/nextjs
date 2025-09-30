'use client';

import React from 'react';
import { OneIcon, TwoIcon, ThreeIcon, FourIcon, FiveIcon, RFQIcon, PredictAIIcon, SeamlessDynamicIcon, AutomaticCostingIcon, GenerateQuotesIcon } from './Icons';

const FinalQuote: React.FC = () => {
    const cards = [
        {
            numberIconStart: <OneIcon width={75} height={70} />,
            numberIconEnd: null,
            header: 'Capture RFQ Requirements',
            description: 'Easily input client specifications through a clean, intuitive interface. Everything from board dimensions to layer count is captured accurately to kickstart the quote process.',
            icon: <RFQIcon width={72} height={72} />
        },
        {
            numberIconStart: null,
            numberIconEnd: <TwoIcon width={90} height={80} />,
            header: 'Predict Materials with AI',
            description: 'Our ML engine analyzes the RFQ and recommends the optimal materials—removing guesswork, ensuring consistency, and accelerating quote preparation.',
            icon: <PredictAIIcon width={72} height={72} />
        },
        {
            numberIconStart: <ThreeIcon width={90} height={80} />,
            numberIconEnd: null,
            header: 'Sync Seamlessly with Dynamics 365',
            description: 'Predicted data flows instantly into Microsoft Dynamics 365 F&O via secure APIs—eliminating manual entry and enabling a real-time, connected workflow.',
            icon: <SeamlessDynamicIcon width={72} height={72} />
        },
        {
            numberIconStart: null,
            numberIconEnd: <FourIcon width={90} height={80} />,
            header: 'Automate Costing & Margins',
            description: 'Built-in logic automatically applies standardized costing and configurable margin rules—ensuring accurate, error-free pricing every time.',
            icon: <AutomaticCostingIcon width={72} height={72} />
        },
        {
            numberIconStart: <FiveIcon width={90} height={80} />,
            numberIconEnd: null,
            header: 'Generate & Share Quotes Instantly',
            description: 'Client-ready quotes are produced in seconds and made available for review, approval, and delivery—all within a single, streamlined platform.',
            icon: <GenerateQuotesIcon width={72} height={72} />
        },
    ];

    return (
        <div className="bg-white rounded-[4rem] p-16">
            <h3 className="text-center text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-black leading-[48px] lg:leading-[54px]">
                The Fast Lane to Final Quote
            </h3>
            <p className="text-center text-[14px] md:text-[16px] lg:text-[18px] font-normal text-black leading-[24px] lg:leading-[28px] mt-4">
                Say goodbye to slow, manual quoting. Our intelligent workflow delivers accurate quotes in seconds, not hours—so you can respond faster and win more business.
            </p>
            <div className="flex flex-col gap-0 mt-12 p-8">
                {cards.map((card, index) => (
                    <div key={index} className='flex flex-row gap-10 items-center'>
                        {card.numberIconStart && (
                            <div>{card.numberIconStart}</div>
                        )}
                        <div className="bg-[#E3F4F1] flex gap-4 p-6 rounded-[1.5rem] items-center">
                            <div>{card.icon}</div>
                            <div className='bg-[#eff9f8] rounded-tr-xl rounded-br-xl p-6'>
                                <h3 className="text-[20px] md:text-[24px] lg:text-[24px] font-medium text-gray-900 leading-[36px] md:leading-[40px] lg:leading-[36px]">
                                    {card.header}
                                </h3>
                                <p className="text-[16px] md:text-[16px] lg:text-[16px] font-normal text-gray-600 leading-[24px] mt-4">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                        {card.numberIconEnd && (
                            <div>{card.numberIconEnd}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinalQuote;