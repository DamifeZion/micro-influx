import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   isNumeric?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, isNumeric = false, onChange, ...props }, ref) => {
      const [, setIsFilled] = React.useState(false);

      // Handle input change to update the state if the input has value
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         setIsFilled(e.target.value !== "");
         if (onChange) onChange(e);
      };

      // Handle key down event for restricting non-numeric input
      const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
         const allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "Tab",
            "Enter",
         ];
         if (
            isNumeric &&
            !/[0-9.,-]/.test(event.key) && // Allows numbers, dots, commas, and minus
            !allowedKeys.includes(event.key)
         ) {
            event.preventDefault();
         }
      };

      return (
         <input
            type={type}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            className={cn(
               "flex h-12 w-full rounded-md border-2 border-input/20 bg-primary/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
               className
            )}
            ref={ref}
            {...props}
         />
      );
   }
);

Input.displayName = "Input";

export { Input };
