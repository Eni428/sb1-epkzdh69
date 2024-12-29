import React from 'react';
import { Zap, Shield, Clock, Code } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Our optimized infrastructure ensures your code runs at peak performance.',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and compliance.',
    icon: Shield,
  },
  {
    name: 'Real-time Updates',
    description: 'See changes instantly with our real-time collaboration features.',
    icon: Clock,
  },
  {
    name: 'Clean Code',
    description: 'Write better code with our advanced linting and formatting tools.',
    icon: Code,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build better
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Dibraon provides all the tools and features you need to create exceptional software.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}