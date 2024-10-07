import * as React from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { routeConstants } from "@/constants/route-const";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateCampaignButton } from "@/components/campaign/create-campaign-btn";
import { CreateCampaignForm } from "@/components/campaign/campaign-form";
import { ScrollArea } from "@/components/ui/scroll-area";

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

   const [openDialog, setOpenDialog] = React.useState<boolean>(false);

   if (isDesktop) {
      return (
         <Dialog
            open={openDialog}
            onOpenChange={() => setOpenDialog((prev) => !prev)}
         >
            <DialogTrigger>
               <CreateCampaignButton />
            </DialogTrigger>

            <DialogContent
               overlayClassName="bg-transparent backdrop-blur-sm"
               className="px-0 pb-0 max-w-xl grid grid-rows-[auto_1fr_auto] shadow-none pb-0 bg-card"
            >
               <DialogHeader className="px-6">
                  <DialogTitle className="text-primary font-medium">
                     Create Campaign
                  </DialogTitle>

                  <DialogDescription className="sr-only">
                     Fill in the form details below to create a new campaign
                  </DialogDescription>
               </DialogHeader>

               <ScrollArea>
                  <CreateCampaignForm closeModal={() => setOpenDialog(false)} />
               </ScrollArea>
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
