"use client";

import Link from "next/link";
import { Check, X, Crown, Star, Award, ArrowRight } from "lucide-react";

const features = [
  {
    name: "Membership Certificate",
    primary: true,
    yearly: true,
    gold: true,
  },
  {
    name: "Invitation to Board Meetings",
    primary: true,
    yearly: true,
    gold: true,
  },
  {
    name: "Event Participation",
    primary: true,
    yearly: true,
    gold: true,
  },
  {
    name: "Voting Rights in Association Meetings",
    primary: false,
    yearly: true,
    gold: true,
  },
  {
    name: "Inclusion in Board Committee",
    primary: false,
    yearly: false,
    gold: true,
  },
  {
    name: "Chairman Post Eligibility",
    primary: false,
    yearly: false,
    gold: true,
  },
];

const plans = [
  {
    id: "primary",
    name: "Primary",
    price: "2,100",
    period: "per year",
    description: "Essential membership for businesses starting their FDTA journey.",
    icon: Award,
    highlight: false,
    featureKey: "primary" as const,
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "11,000",
    period: "per year",
    description: "Full participation with voting rights and all primary benefits.",
    icon: Star,
    highlight: true,
    featureKey: "yearly" as const,
  },
  {
    id: "gold",
    name: "Gold",
    price: "51,000",
    period: "per year",
    description: "Leadership tier with board committee inclusion and chairman eligibility.",
    icon: Crown,
    highlight: false,
    featureKey: "gold" as const,
  },
];

function FeatureIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500/20">
        <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5">
      <X className="w-4 h-4 text-gray-500" strokeWidth={2.5} />
    </span>
  );
}

export default function Membership() {
  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-primary min-h-screen">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Membership Plans
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
          Join the Federation of Delhi Trade Association and unlock exclusive
          benefits, networking opportunities, and a voice in shaping Delhi&apos;s
          commercial future.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-xl p-8 border transition-all duration-300 flex flex-col ${
                  plan.highlight
                    ? "bg-white/15 backdrop-blur-sm border-accent/50 shadow-lg shadow-accent/10 scale-[1.02] md:scale-105"
                    : "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${
                    plan.highlight ? "bg-accent/30" : "bg-accent/20"
                  }`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-1">
                  {plan.name}
                </h2>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">
                    / {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center gap-3 text-sm"
                    >
                      <FeatureIcon included={feature[plan.featureKey]} />
                      <span
                        className={
                          feature[plan.featureKey]
                            ? "text-gray-200"
                            : "text-gray-500"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/paynow"
                  className={`w-full py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-accent text-black hover:bg-accent/90"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  Claim your membership
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <hr className="my-16 border-white/20" />

        {/* Feature Comparison Table */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Compare All Features
          </h2>
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            A detailed breakdown of what each membership tier includes.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-5 text-white font-semibold w-2/5">
                      Feature
                    </th>
                    <th className="p-5 text-center text-white font-semibold">
                      Primary
                      <div className="text-accent text-sm font-normal mt-1">
                        ₹2,100/yr
                      </div>
                    </th>
                    <th className="p-5 text-center text-white font-semibold bg-white/5">
                      Yearly
                      <div className="text-accent text-sm font-normal mt-1">
                        ₹11,000/yr
                      </div>
                    </th>
                    <th className="p-5 text-center text-white font-semibold">
                      Gold
                      <div className="text-accent text-sm font-normal mt-1">
                        ₹51,000/yr
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={
                        index < features.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }
                    >
                      <td className="p-5 text-gray-200">{feature.name}</td>
                      <td className="p-5 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon included={feature.primary} />
                        </div>
                      </td>
                      <td className="p-5 text-center bg-white/5">
                        <div className="flex justify-center">
                          <FeatureIcon included={feature.yearly} />
                        </div>
                      </td>
                      <td className="p-5 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon included={feature.gold} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Comparison */}
            <div className="md:hidden divide-y divide-white/10">
              {plans.map((plan) => (
                <div key={plan.id} className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-accent text-sm mb-4">₹{plan.price}/year</p>
                  <ul className="space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-center justify-between gap-4"
                      >
                        <span
                          className={`text-sm ${
                            feature[plan.featureKey]
                              ? "text-gray-200"
                              : "text-gray-500"
                          }`}
                        >
                          {feature.name}
                        </span>
                        <FeatureIcon included={feature[plan.featureKey]} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join FDTA?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the next step in growing your business with Delhi&apos;s leading
            trade association. Contact us today to apply for membership.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Contact Us to Apply
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
