// app/pricing/page.tsx

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "secondary" | "outline";
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$0",
    features: ["Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Get Started",
    buttonVariant: "secondary",
  },
  {
    name: "Pro",
    price: "$0",
    features: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Upgrade",
    buttonVariant: "default",
  },
  {
    name: "Enterprise",
    price: "$0",
    features: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Contact Us",
    buttonVariant: "outline",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold text-primary tracking-wide uppercase">
          Pricing
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold text-foreground sm:text-4xl">
          Choose the plan that’s right for you
        </p>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
          Explore our flexible pricing options to find the perfect fit for your
          needs.
        </p>
      </div>

      {/* Pricing Plans Grid */}
      <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className="flex flex-col p-6">
            {/* Plan Name */}
            <h3 className="text-lg leading-6 font-medium text-foreground">
              {plan.name}
            </h3>

            {/* Plan Price */}
            <div className="mt-4 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-foreground">
                {plan.price}
              </span>
              <span className="ml-1 text-xl font-medium text-muted-foreground">
                /month
              </span>
            </div>

            {/* Features List */}
            <ul className="mt-6 space-y-4 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <FiCheck
                    className="h-6 w-6 text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <div className="mt-8">
              <Button variant={plan.buttonVariant} className="w-full">
                {plan.buttonText}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
