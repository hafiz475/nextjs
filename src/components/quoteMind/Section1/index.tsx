'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../../Button';
import { HeroBg, HeroBg1Icon, HeroBg2Icon, HeroBg3Icon, HeroBg4Icon } from './Icons';
import HeroImgBg from '../../../../public/quotoMindImg/HeroImgBg.png';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-fit md:min-h-screen flex flex-col items-center justify-center text-center relative pb-8! md:pb-0!">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-[var(--nav-text)] leading-tight">
        Smart Quotation Engine <br /> for Manufacturing
      </h1>
      <p className="mt-4 px-4 md:px-0 text-xs md:text-lg lg:text-2xl font-normal text-[var(--foreground)] max-w-3xl">
        Accelerate quoting, reduce errors, and scale operations — <br /> powered by Machine Learning and Dynamics 365 F&O.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Button>Request a Demo</Button>
        <Button
          className="bg-transparent border-2 border-[var(--accent-bg)] text-[var(--accent-bg)]! hover:bg-[var(--accent-bg)] hover:text-white hover:scale-105 hover:shadow-md"
        >
          Learn More
        </Button>
      </div>
      {/* Image and Icons Container - Hidden on Mobile, Visible on Tablet/Desktop */}
      <div className="relative mt-8 w-full max-w-full md:max-w-5xl px-4 md:px-8 hidden md:block">
        {/* Hero Image and HeroBg */}
        <Image
          src={HeroImgBg}
          alt="Hero Background"
          className="w-full h-auto object-contain scale-100 z-0"
          priority
        />
        <HeroBg className="absolute inset-0 w-full h-full object-contain scale-110 -z-5 md:hidden lg:block" />
        {/* Icons Overlay with Animations */}
        <HeroBg1Icon className="absolute -top-4 -left-18 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex-shrink-0 z-10 animate-float" />
        <HeroBg2Icon className="absolute -top-22 left-[64px] md:left-[96px] lg:left-[128px] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 z-10 animate-pulse" />
        <HeroBg3Icon className="absolute -top-24 right-[64px] md:right-[96px] lg:right-[128px] w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 z-10 animate-rotate" />
        <HeroBg4Icon className="absolute top-0 -right-22 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex-shrink-0 z-10 animate-bounce md:hidden lg:block" />
      </div>
    </section>
  );
};

export default HeroSection;