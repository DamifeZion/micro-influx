import { cn } from "@/lib/utils";
import { TLogoProps } from "@/types";
import * as React from "react";
import Typography from "./ui/typography";

export const Logo: React.FC<TLogoProps> = ({ className, ...props }) => {
   return (
      <Typography
         variant="h3"
         className={cn("text-primary", className)}
         {...props}
      >
         Micro-Influx
      </Typography>
   );
};
