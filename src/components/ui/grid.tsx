import * as React from "react"
import { clsx } from "clsx"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: "sm" | "md" | "lg" | "xl"
  responsive?: boolean
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, children, cols = 1, gap = "md", responsive = true, ...props }, ref) => {
    const gridClasses = clsx(
      "grid",
      {
        "grid-cols-1": cols === 1,
        "grid-cols-2": cols === 2,
        "grid-cols-3": cols === 3,
        "grid-cols-4": cols === 4,
        "grid-cols-5": cols === 5,
        "grid-cols-6": cols === 6,
        "grid-cols-12": cols === 12,
        "md:grid-cols-2 lg:grid-cols-3": responsive && cols === 3,
        "md:grid-cols-2 lg:grid-cols-4": responsive && cols === 4,
        "md:grid-cols-2 lg:grid-cols-5": responsive && cols === 5,
        "gap-2": gap === "sm",
        "gap-4": gap === "md",
        "gap-6": gap === "lg",
        "gap-8": gap === "xl",
      },
      className
    )

    return (
      <div ref={ref} className={gridClasses} {...props}>
        {children}
      </div>
    )
  }
)
Grid.displayName = "Grid"

export { Grid }
