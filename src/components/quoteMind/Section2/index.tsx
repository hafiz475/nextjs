'use client';

import React from 'react';
import { 
  TimeConsumingManualWorkflowsIcon, 
  CostingLogicWasErrorProneIcon, 
  InconsistentPricingModelsIcon, 
  NoRealTimeInsightsIcon, 
  LowRFQHandlingCapacityIcon, 
  NoSmartMaterialSelectionIcon 
} from './Icons';

const SectionTwo: React.FC = () => {
  const cards = [
    { 
      header: 'Time-Consuming Manual Workflows', 
      description: 'Manual Excel-based quoting caused delays and team depende', 
      icon: <TimeConsumingManualWorkflowsIcon /> 
    },
    { 
      header: 'Costing Logic Was Error-Prone', 
      description: 'Manual costing logic left room for inaccuracies, impacting quote reliability.', 
      icon: <CostingLogicWasErrorProneIcon /> 
    },
    { 
      header: 'Inconsistent Pricing Models', 
      description: 'Lack of pricing standards meant similar RFQs received varied quotes — damaging trust and conversions.', 
      icon: <InconsistentPricingModelsIcon /> 
    },
    { 
      header: 'No Real-Time Insights', 
      description: 'Without real-time updates, stakeholders faced delays in decisions and reduced responsiveness.', 
      icon: <NoRealTimeInsightsIcon /> 
    },
    { 
      header: 'Low RFQ Handling Capacity', 
      description: 'Manual processes limited how many RFQs teams could handle, capping growth.', 
      icon: <LowRFQHandlingCapacityIcon /> 
    },
    { 
      header: 'No Smart Material Selection', 
      description: 'Material choices were based on guesswork or tribal knowledge, leading to inefficiencies in BOM creation.', 
      icon: <NoSmartMaterialSelectionIcon /> 
    },
  ];

  return (
    <section className="bg-white lg:py-18 md:py-16 px-6 lg:px-24">
      <h2 className="text-start text-[28px] md:text-[32px] lg:text-[48px] font-semibold text-gray-900 leading-[48px] lg:leading-[72px]">
        Identifying the Gaps; Delivering the Fix
      </h2>
      <p className="text-start text-[14px] md:text-[16px] lg:text-[20px] font-normal text-gray-600 leading-[32px] mb-8 mt-2">
        We analyzed the quoting challenges—from manual inefficiencies to pricing inconsistencies—and built a smart, scalable solution that replaces complexity with clarity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div key={index} className="border border-[#CBCACA] p-6 rounded-lg flex flex-row items-center">
            <div className="flex-1 text-start">
              <h3 className="text-[24px] md:text-[28px] lg:text-[28px] font-medium text-gray-900 leading-[36px] md:leading-[40px] lg:leading-[36px]">
                {card.header}
              </h3>
              <p className="text-[16px] md:text-[16px] lg:text-[16px] font-normal text-gray-600 leading-[24px] mt-4">
                {card.description}
              </p>
            </div>
            <div className="ml-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;