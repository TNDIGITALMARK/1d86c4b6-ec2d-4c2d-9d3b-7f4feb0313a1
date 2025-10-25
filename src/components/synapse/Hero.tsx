import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(216,28%,14%)] leading-tight mb-6">
              Unlock Enterprise Intelligence with Synapse Platform
            </h1>
            <p className="text-lg text-[hsl(214,17%,35%)] mb-8 leading-relaxed">
              Empower Your Team with AI-Powered Insights & Scalable Solutions
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-[hsl(216,100%,50%)] hover:bg-[hsl(216,100%,45%)] text-white px-8 py-6 text-base font-semibold rounded-md shadow-md"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[hsl(216,100%,50%)] text-[hsl(216,100%,50%)] hover:bg-[hsl(216,100%,50%)] hover:text-white px-8 py-6 text-base font-semibold rounded-md"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Cubes Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/generated/hero-cubes.png"
                alt="Synapse Platform Network Visualization"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
