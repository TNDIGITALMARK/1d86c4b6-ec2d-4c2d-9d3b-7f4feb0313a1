import React from 'react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function FeatureCard({ icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-[hsl(216,33%,97%)] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[hsl(216,28%,14%)] mb-2">
            {title}
          </h3>
          <p className="text-[hsl(214,17%,35%)] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Mini chart placeholder */}
      <div className="mb-6 h-24 bg-gradient-to-r from-[hsl(216,100%,50%)]/10 to-[hsl(213,100%,65%)]/10 rounded-lg flex items-end justify-around p-4 gap-2">
        {features.map((_, index) => (
          <div
            key={index}
            className="bg-[hsl(216,100%,50%)] rounded-t"
            style={{
              height: `${40 + index * 20}%`,
              width: '20%'
            }}
          />
        ))}
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-[hsl(214,17%,35%)]">
            <svg className="w-4 h-4 text-[hsl(216,100%,50%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Button className="w-full bg-[hsl(216,100%,50%)] hover:bg-[hsl(216,100%,45%)] text-white font-semibold rounded-md">
        Learn More
      </Button>
    </div>
  );
}

export function FeatureHighlights() {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8 text-[hsl(216,100%,50%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'User Management',
      description: 'Centralized control over team access and permissions',
      features: [
        'Role-based access control',
        'Team collaboration tools',
        'Activity monitoring'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[hsl(216,100%,50%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Project Tracking',
      description: 'Real-time visibility into project progress and milestones',
      features: [
        'Visual dashboards',
        'Progress tracking',
        'Deadline management'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[hsl(216,100%,50%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'System Analytics',
      description: 'Comprehensive insights into system performance and usage',
      features: [
        'Performance metrics',
        'Usage analytics',
        'Custom reports'
      ]
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(216,28%,14%)] mb-4">
            Feature Highlights
          </h2>
          <p className="text-lg text-[hsl(214,17%,35%)] max-w-2xl mx-auto">
            Powerful tools designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <FeatureCard key={index} {...highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
