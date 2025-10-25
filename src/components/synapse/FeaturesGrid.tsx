import React from 'react';

interface FeatureIconProps {
  children: React.ReactNode;
}

function FeatureIcon({ children }: FeatureIconProps) {
  return (
    <div className="w-16 h-16 rounded-full bg-[hsl(216,100%,50%)]/10 flex items-center justify-center mb-4">
      <div className="w-12 h-12 rounded-full bg-[hsl(216,100%,50%)] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function FeaturesGrid() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Automation',
      description: 'Streamline workflows with intelligent automation'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Integration',
      description: 'Connect seamlessly with your existing tools'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics',
      description: 'Get actionable insights from your data'
    }
  ];

  return (
    <section className="bg-[hsl(216,33%,97%)] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(216,28%,14%)] mb-4">
            Transform Your Operations
          </h2>
          <p className="text-lg text-[hsl(214,17%,35%)] max-w-2xl mx-auto">
            Empower Your Team with Integrated Solutions & Smart Workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3 className="text-xl font-semibold text-[hsl(216,28%,14%)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[hsl(214,17%,35%)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
