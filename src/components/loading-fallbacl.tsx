import { Logo } from "./logo";

export const LoadingFallback = () => {
   return (
      <div className="flex items-center justify-center h-screen w-screen">
         <div>
            <Logo className="animate-pulse text-4xl lg:5xl" />
         </div>
      </div>
   );
};
