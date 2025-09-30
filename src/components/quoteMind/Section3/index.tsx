'use client';

import React from 'react';
import { 
  MLBasedPredictionIcon,
  SeamlessRestAPIIcon,
  AutomatedCostingIcon,
  EtoEQuoteIcon,
  RealTimeValidationIcon,
  AuditReadyERPVisibility,
  ScalableArchitectIcon
} from './Icons';

const SectionThree: React.FC = () => {
  const cards = [
    { 
      header: 'ML-Based Prediction', 
      description: 'Automatically identifies materials from RFQ specs like dimensions, board type, and layer count—removing manual effort.', 
      icon: <MLBasedPredictionIcon /> 
    },
    { 
      header: 'Seamless REST API Integration', 
      description: 'Enables direct data flow into Microsoft Dynamics 365 Finance & Operations for a frictionless quoting process.', 
      icon: <SeamlessRestAPIIcon /> 
    },
    { 
      header: 'Automated Costing', 
      description: 'Applies consistent pricing logic to ensure accuracy, eliminate human errors, and maintain profitability.', 
      icon: <AutomatedCostingIcon /> 
    },
    { 
      header: 'End-to-End Quote Generation', 
      description: 'Generates complete, ready-to-send quotes instantly—no manual intervention or delays.', 
      icon: <EtoEQuoteIcon /> 
    },
    { 
      header: 'Real-Time Validation', 
      description: 'Built-in logic checks every step to prevent downstream errors and ensure data integrity.', 
      icon: <RealTimeValidationIcon /> 
    },
    { 
      header: 'Audit-Ready ERP Visibility', 
      description: 'Provides full traceability and version control within D365, supporting compliance and quick reviews.', 
      icon: <AuditReadyERPVisibility /> 
    },
    { 
      header: 'Scalable Architecture', 
      description: 'Designed to handle increasing RFQ volumes effortlessly—no need for additional headcount as your business grows.', 
      icon: <ScalableArchitectIcon /> 
    },
  ];

  return (
    <section className="bg-[#1B2E5A] lg:py-18 md:py-16 px-6 lg:px-24 relative md:bottom-78 lg:bottom-52">
      <h2 className="text-start text-[28px] md:text-[32px] lg:text-[48px] font-semibold text-white leading-[48px] lg:leading-[72px]">
        Smart Features That Drive Results
      </h2>
      <p className="text-start text-[14px] md:text-[16px] lg:text-[20px] font-normal text-white leading-[32px] mb-16 mt-2">
        From intelligent predictions to seamless ERP integration, our solution is built to simplify quoting at scale. Discover the key features that power smarter, faster decisions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div key={index} className="p-6 rounded-xl flex flex-col items-start bg-[#2b446a]">
            <div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-18 lg:h-18">
                {card.icon}
              </div>
            </div>
            <div className="text-start">
              <h3 className="text-[24px] md:text-[28px] lg:text-[28px] font-medium text-white leading-[36px] md:leading-[40px] lg:leading-[36px]">
                {card.header}
              </h3>
              <p className="text-[16px] md:text-[16px] lg:text-[16px] font-normal text-white leading-[24px] mt-4">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;