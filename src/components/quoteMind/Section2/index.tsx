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
    { icon: <TimeConsumingManualWorkflowsIcon />, text: 'Time Consuming Manual Workflows' },
    { icon: <CostingLogicWasErrorProneIcon />, text: 'Costing Logic Was Error Prone' },
    { icon: <InconsistentPricingModelsIcon />, text: 'Inconsistent Pricing Models' },
    { icon: <NoRealTimeInsightsIcon />, text: 'No Real-Time Insights' },
    { icon: <LowRFQHandlingCapacityIcon />, text: 'Low RFQ Handling Capacity' },
    { icon: <NoSmartMaterialSelectionIcon />, text: 'No Smart Material Selection' },
  ];

  return (
    <section className="bg-white py-8 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-900 mb-6">
        Identifying the Gaps; Delivering the Fix
      </h2>
      <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center max-w-3xl mx-auto mb-8">
        We analyzed the quoting challenges—from manual inefficiencies to pricing inconsistencies—and built a smart, scalable solution that replaces complexity with clarity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4">
              {card.icon}
            </div>
            <p className="text-sm md:text-base lg:text-lg text-center text-gray-800">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;