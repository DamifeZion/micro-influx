import { TIsRouteActive } from "@/types";
import { useLocation } from "react-router-dom";

export const useIsRouteActive = () => {
   const location = useLocation();

   const isRouteActive: TIsRouteActive = (path, matchSubroute = false) => {
      if (matchSubroute) {
         return location.pathname.startsWith(path);
      }
      return location.pathname === path;
   };

   return isRouteActive;
};
