import { useMediaQuery } from "@/hooks/use-media-query";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { routeConstants } from "@/constants/route-const";
import { BiPlus } from "react-icons/bi";

export const CreateCampaignButton = () => {
   const isMobile = useMediaQuery("(max-width: 1023px)");
   const navigate = useNavigate();

   return (
      <Button
         onClick={() => {
            if (isMobile) {
               navigate(routeConstants.createCampaign); // Mobile navigation
            }
         }}
         className="font-normal"
      >
         <BiPlus className="size-5 mr-1" /> Create a New Campaign
      </Button>
   );
};
