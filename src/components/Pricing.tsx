import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Hobby',
    price: 0,
    features: ['5 Projects', 'Basic Analytics', 'Community Support', '1GB Storage'],
    cta: 'Start for free',
    featured: false,
  },
  {
    name: 'Pro',
    price: 29,
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '10GB Storage', 'Custom Domains'],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    features: ['Everything in Pro', 'Enterprise Support', 'Unlimited Storage', 'Custom Integration', 'SLA'],
    cta: 'Contact sales',
    featured: false,
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`divide-y divide-gray-200 rounded-lg border shadow-sm ${
                tier.featured ? 'border-indigo-500 shadow-indigo-100' : 'border-gray-200'
              }`}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <button
                  className={`mt-8 block w-full rounded-md px-4 py-2 text-center text-sm font-semibold ${
                    tier.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}