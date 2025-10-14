import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      ol: "my-6 ml-6 list-decimal [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      table: "w-full",
      thead: "border-b",
      tbody: "",
      tr: "",
      th: "h-12 px-4 text-left align-top font-medium text-muted-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
      td: "p-4 align-top [&[align=center]]:text-center [&[align=right]]:text-right",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})



// Individual components for easier usage
const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      className={cn(typographyVariants({ variant: "h1" }), className)}
      ref={ref}
      {...props}
    />
  )
)
H1.displayName = "H1"

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      className={cn(typographyVariants({ variant: "h2" }), className)}
      ref={ref}
      {...props}
    />
  )
)
H2.displayName = "H2"

const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      className={cn(typographyVariants({ variant: "h3" }), className)}
      ref={ref}
      {...props}
    />
  )
)
H3.displayName = "H3"

const H4 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4
      className={cn(typographyVariants({ variant: "h4" }), className)}
      ref={ref}
      {...props}
    />
  )
)
H4.displayName = "H4"

const H5 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      className={cn(typographyVariants({ variant: "h5" }), className)}
      ref={ref}
      {...props}
    />
  )
)
H5.displayName = "H5"

const H6 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h6
      className={cn(typographyVariants({ variant: "h6" }), className)}
      ref={ref}
      {...props}
    />
  )
)
H6.displayName = "H6"

const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      className={cn(typographyVariants({ variant: "p" }), className)}
      ref={ref}
      {...props}
    />
  )
)
P.displayName = "P"

const Blockquote = React.forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
  ({ className, ...props }, ref) => (
    <blockquote
      className={cn(typographyVariants({ variant: "blockquote" }), className)}
      ref={ref}
      {...props}
    />
  )
)
Blockquote.displayName = "Blockquote"

const InlineCode = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code
      className={cn(typographyVariants({ variant: "inlineCode" }), className)}
      ref={ref}
      {...props}
    />
  )
)
InlineCode.displayName = "InlineCode"

const Lead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      className={cn(typographyVariants({ variant: "lead" }), className)}
      ref={ref}
      {...props}
    />
  )
)
Lead.displayName = "Lead"

const Large = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(typographyVariants({ variant: "large" }), className)}
      ref={ref}
      {...props}
    />
  )
)
Large.displayName = "Large"

const Small = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <small
      className={cn(typographyVariants({ variant: "small" }), className)}
      ref={ref}
      {...props}
    />
  )
)
Small.displayName = "Small"

const Muted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      className={cn(typographyVariants({ variant: "muted" }), className)}
      ref={ref}
      {...props}
    />
  )
)
Muted.displayName = "Muted"

export {
  typographyVariants,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Blockquote,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
}
