"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { cn } from "@/lib/utils";

import { authClient } from "@/lib/auth-client";
import { signupSchema, type SignupSchema } from "../schemas";
import { trackSignup } from "@/lib/analytics";

interface SignupFormProps {
  type?: "agent" | "user";
}

type SignupResultDataWithSession = {
  session?: unknown;
};

export function SignupForm({
  className,
  type = "user",
  ...props
}: React.ComponentProps<"div"> & SignupFormProps) {
  const toastId = useId();
  const router = useRouter();

  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" }
  });

  const handleSignup = async (values: SignupSchema) => {
    try {
      toast.loading("Creating your account…", { id: toastId });

      const result = await authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: values.name,
        callbackURL: "/dashboard",
      });

      if (result?.error) {
        throw new Error(result.error.message);
      }

      // TEMP: Email verification disabled — go directly to dashboard.
      toast.success("Account created!", { id: toastId, description: "Welcome to Traveny!" });
      trackSignup("email");
      router.push("/dashboard");
    } catch (err) {
      const error = err as Error;
      console.error("[Signup] Error:", error);
      if (error.message.toLowerCase().includes("already exists")) {
        toast.error("Email already registered.", {
          id: toastId,
          description: "An account with this email already exists.",
          action: { label: "Sign In", onClick: () => router.push("/signin") }
        });
      } else {
        toast.error("Sign up failed.", { id: toastId, description: error.message });
      }
    }
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      {/* Heading */}
      <div className="mb-7 text-center">
        <h1 className="font-playfair text-3xl font-bold text-brand-navy mb-1.5">
          Create Account
        </h1>
        <p className="text-sm text-brand-muted">
          Join Traveny — Sweden's premium taxi service
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignup)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-body text-sm font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="rounded-xl border-brand-warm bg-white focus-visible:ring-gold/40 focus-visible:border-gold"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-body text-sm font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    className="rounded-xl border-brand-warm bg-white focus-visible:ring-gold/40 focus-visible:border-gold"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-body text-sm font-medium">Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="••••••••"
                    className="rounded-xl border-brand-warm bg-white focus-visible:ring-gold/40 focus-visible:border-gold"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-body text-sm font-medium">Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="••••••••"
                    className="rounded-xl border-brand-warm bg-white focus-visible:ring-gold/40 focus-visible:border-gold"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold hover:bg-gold-dark text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-md shadow-gold/20 disabled:opacity-60 mt-2"
          >
            <UserPlus className="size-4" />
            {form.formState.isSubmitting ? "Creating account…" : "Create Account"}
          </button>
        </form>
      </Form>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-brand-muted">
        Already have an account?{" "}
        <Link href="/signin" className="text-gold-dark font-medium hover:text-gold underline-offset-4 hover:underline transition-colors">
          Sign in
        </Link>
      </p>

      <p className="mt-8 text-center text-xs text-brand-muted/60">
        By creating an account you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-brand-muted">Terms</a>
        {" "}and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-brand-muted">Privacy Policy</a>.
      </p>
    </div>
  );
}
