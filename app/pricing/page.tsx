import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  buttonText: string;
  buttonVariant: "default" | "secondary" | "outline";
}

const monthlySubscriptionPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 19,
    features: ["Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Get Started",
    buttonVariant: "secondary",
  },
  {
    name: "Pro",
    price: 39,
    features: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Upgrade",
    buttonVariant: "default",
  },
  {
    name: "Enterprise",
    price: 99,
    features: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Contact Us",
    buttonVariant: "outline",
  },
];

const annualSubcriptionPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: 19,
    features: ["Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Get Started",
    buttonVariant: "secondary",
  },
  {
    name: "Pro",
    price: 39,
    features: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
    buttonText: "Upgrade",
    buttonVariant: "default",
  },
];

const calculateDiscountedPriceForAnnualPlan = (monthlyPrice: number) => {
  return `${(monthlyPrice * 0.8).toFixed(0)}`;
};

const PricingPage = () => {
  return (
    <div className="min-h-full bg-background py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold text-foreground sm:text-4xl">
          Choose the plan that’s right for you
        </p>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
          Explore our flexible pricing options to find the perfect fit for your
          needs.
        </p>
      </div>

      {/* Monthly Subscription Description */}
      <div className="max-w-3xl mx-auto text-center mt-8">
        <p className="text-xl text-muted-foreground">
          Pay monthly with the flexibility to cancel anytime.
        </p>
      </div>

      {/* Pricing Plans Grid (Monthly) */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-3">
        {monthlySubscriptionPlans.map((plan) => (
          <Card key={plan.name} className="relative flex flex-col p-6">
            {/* Plan Name */}
            <h3 className="text-lg leading-6 font-medium text-foreground">
              {plan.name}
            </h3>

            {/* Plan Price */}
            <div className="mt-4 flex items-center justify-center">
              <span className="text-4xl font-extrabold text-foreground">
                ${plan.price}
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

      {/* Annual Subscription Description */}
      <div className="max-w-3xl mx-auto text-center mt-16">
        <p className="text-xl text-muted-foreground">
          Pay annually and save 20% on your subscription!
        </p>
      </div>

      {/* Annual Subscription Plans with Ribbon */}
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-6">
        <div className="hidden xl:block"></div>
        {annualSubcriptionPlans.map((plan, index) => {
          const monthlyPrice = monthlySubscriptionPlans[index].price;
          const discountedPrice =
            calculateDiscountedPriceForAnnualPlan(monthlyPrice);

          return (
            <Card
              key={plan.name}
              className="relative flex flex-col p-6 col-span-3 xl:col-span-2"
            >
              {/* Ribbon */}
              <Button
                variant="outline"
                className="absolute top-10 right-10 -mt-4 -mr-4 border-primary text-primary cursor-default hover:bg-transparent hover:text-primary shadow-[0_0_10px_hsl(var(--primary)_/_0.3)]"
              >
                Save 20%
              </Button>

              {/* Plan Name */}
              <h3 className="text-lg leading-6 font-medium text-foreground">
                {plan.name}
              </h3>

              {/* Plan Price with diagonal strikethrough */}
              <div className="mt-4 flex items-center justify-center">
                <span className="text-xl text-muted-foreground line-through">
                  ${monthlyPrice}
                </span>
                <span className="ml-2 text-4xl font-extrabold text-foreground">
                  ${discountedPrice}
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
          );
        })}
        <div className="hidden xl:block"></div>
      </div>
    </div>
  );
};

export default PricingPage;
