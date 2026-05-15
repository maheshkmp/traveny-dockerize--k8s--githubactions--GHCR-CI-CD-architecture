"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, Loader2Icon, CrownIcon, SparklesIcon } from "lucide-react";
import { getClient } from "@/lib/rpc/client";
import { useRouter } from "next/navigation";

type Plan = {
  id: "basic" | "pro" | "premium";
  name: string;
  price: string;
  description: string;
  credits: string;
  features: string[];
  highlighted?: boolean;
  icon: React.ReactNode;
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Free",
    price: "Free",
    description: "Get started with core tools.",
    credits: "5 credits / month",
    icon: <SparklesIcon className="size-5" />,
    features: [
      "Access to all core tools",
      "Dashboard to track usage",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$1.99/month",
    description: "For regular users who need more.",
    credits: "50 credits / month",
    icon: <CrownIcon className="size-5" />,
    highlighted: true,
    features: [
      "Priority processing",
      "Premium feature access",
      "Priority support",
    ],
  },
  {
    id: "premium",
    name: "Business",
    price: "Coming Soon",
    description: "For teams and high-volume users.",
    credits: "High-volume credits",
    icon: <CrownIcon className="size-5 text-amber-500" />,
    features: [
      "Higher monthly credit limits",
      "All Pro features",
      "Team collaboration",
      "Advanced analytics",
      "API access",
      "White-label solution",
      "Dedicated support",
    ],
  },
];

export default function SubscriptionPlans({
  currentPlan = "basic",
  subscriptionStatus,
}: {
  currentPlan?: "basic" | "pro" | "premium";
  subscriptionStatus?: "active" | "cancelled" | "expired" | null;
}) {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const handleUpgrade = async (planId: "pro" | "premium") => {
    if (!session?.user) {
      router.push("/signin?redirect=/billing");
      return;
    }

    if (planId === "premium") {
      alert("Premium plan is coming soon!");
      return;
    }

    try {
      setLoading(planId);
      const client = await getClient();

      const response = await client.api.billing["create-subscription"].$post({
        json: { plan: planId },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create subscription");
      }

      const data = await response.json();

      // Redirect user to PayPal approval URL
      window.location.href = data.approvalUrl;
    } catch (error) {
      console.error("Failed to upgrade:", error);
      alert(
        error instanceof Error ? error.message : "Failed to create subscription"
      );
      setLoading(null);
    }
  };

  const handleCancel = async () => {
    if (!confirm("Are you sure you want to cancel your subscription?")) {
      return;
    }

    try {
      setLoading("cancel");
      const client = await getClient();

      const response = await client.api.billing["cancel-subscription"].$post();

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to cancel subscription");
      }

      alert("Subscription cancelled successfully");
      router.refresh();
    } catch (error) {
      console.error("Failed to cancel:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to cancel subscription"
      );
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {plans.map((plan) => {
        const isCurrent = plan.id === currentPlan;
        const isActive = isCurrent && subscriptionStatus === "active";
        const isPending = loading === plan.id;

        return (
          <Card
            key={plan.id}
            className={`relative ${plan.highlighted
              ? "border-primary shadow-lg scale-105"
              : "border-muted"
              }`}
          >
            {plan.highlighted && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <div className="flex items-center gap-2">
                {plan.icon}
                <CardTitle>{plan.name}</CardTitle>
              </div>
              <CardDescription>{plan.description}</CardDescription>
              <div className="pt-4 space-y-1">
                <p className="text-3xl font-bold">{plan.price}</p>
                <p className="text-sm font-medium text-primary">{plan.credits}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4" />
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckIcon className="size-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {isCurrent ? (
                <>
                  {isActive ? (
                    <div className="w-full space-y-2">
                      <Badge variant="secondary" className="w-full justify-center">
                        Current Plan
                      </Badge>
                      {plan.id !== "basic" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={handleCancel}
                          disabled={loading === "cancel"}
                        >
                          {loading === "cancel" ? (
                            <>
                              <Loader2Icon className="size-4 animate-spin" />
                              Cancelling...
                            </>
                          ) : (
                            "Cancel Subscription"
                          )}
                        </Button>
                      )}
                    </div>
                  ) : (
                    <Badge variant="outline" className="w-full justify-center">
                      Current Plan
                    </Badge>
                  )}
                </>
              ) : (
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() =>
                    handleUpgrade(plan.id as "pro" | "premium")
                  }
                  disabled={
                    isPending || plan.id === "premium" || plan.id === "basic"
                  }
                >
                  {isPending ? (
                    <>
                      <Loader2Icon className="size-4 animate-spin" />
                      Processing...
                    </>
                  ) : plan.id === "premium" ? (
                    "Coming Soon"
                  ) : plan.id === "basic" ? (
                    "Downgrade"
                  ) : (
                    "Upgrade Now"
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
