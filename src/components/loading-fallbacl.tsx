import { Logo } from "./logo"


export const LoadingFallback = () => {

   return (
      <div className="items-center justify-center w-full h-full">
         <Logo className="animate-pulse" />
      </div>
   )
}