import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { routeConstants } from "@/constants/route-const";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import { CreateCampaignButton } from "@/components/campaign/create-campaign-btn";
import { CreateCampaignForm } from "@/components/campaign/campaign-form";

const CreateCampaign = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   // If we pathname is this page and its desktop, we go back to what ever is the previous page
   React.useEffect(() => {
      if (location.pathname === routeConstants.createCampaign && isDesktop) {
         navigate(-1);
      }
   }, [location.pathname, isDesktop, navigate]);

   if (isDesktop) {
      return (
         <Dialog>
            <DialogTrigger>
               <CreateCampaignButton />
            </DialogTrigger>

            <DialogContent>
               <CreateCampaignForm />
            </DialogContent>
         </Dialog>
      );
   }

   //In Mobile this is a page only if the page is create campaign, else we render a buton that links to the campaign page and then show the render component in the page
   return (
      <React.Fragment>
         {location.pathname !== routeConstants.createCampaign ? (
            <CreateCampaignButton />
         ) : (
            <DashboardLayout>
               <CreateCampaignForm />
            </DashboardLayout>
         )}
      </React.Fragment>
   );
};

export default CreateCampaign;
