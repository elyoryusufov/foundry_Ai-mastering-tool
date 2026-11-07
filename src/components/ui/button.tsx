import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 min-h-11",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg hover:bg-primary/90 px-4",
        ghost: "text-fg hover:bg-raised px-3",
        outline: "shadow-[0_0_0_1px_rgba(255,255,255,0.1)] text-fg hover:bg-raised px-4",
        copper: "bg-raised text-primary shadow-[0_0_0_1px_rgba(232,165,75,0.35)] hover:bg-surface px-4",
      },
      size: {
        default: "px-4",
        sm: "min-h-9 px-3 text-xs",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
