import { FiExternalLink } from "react-icons/fi";
import { Conversation } from "@/components/conversation/conversation";
import { Notification } from "@/components/notification/notification";
import Typography from "@/components/ui/typography";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import CreateCampaign from "./create-campaign";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";
import { FINANCIAL_OVERVIEW, SUMMARY } from "@/constants/dashboard-const";
import { ProfileInformation } from "@/components/profile-information";
import { useMediaQuery } from "@/hooks/use-media-query";

const Dashboard = () => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return (
      <DashboardLayout>
         {/* Title and Quick Actions */}
         <section className="max-lg:mt-4 flex flex-wrap gap-x-4 gap-y-6 items-center justify-between">
            <Typography className="text-primary">Dashboard</Typography>

            <div className="flex items-center gap-2">
               {/* On mobile we link to a page, desktop its a modal */}
               <CreateCampaign />

               <span className="max-lg:hidden lg:ml-2">
                  <Conversation />
               </span>

               <span className="max-lg:hidden">
                  <Notification />
               </span>
            </div>
         </section>

         {/* Financial Overview */}
         <section className="flex gap-5 mt-6">
            <Card className="flex-grow bg-primary px-6 *:px-0">
               <CardHeader className="px-0 space-y-0 gap-x-2 gap-y-4 flex-row flex-wrap items-center justify-between border-b border-[#829AAC] text-primary-foreground lg:py-2.5">
                  <CardTitle className="!tracking-wider font-medium">
                     Fianancial Overview
                  </CardTitle>

                  <CardDescription>
                     <Button
                        asChild
                        variant="link"
                        className="max-lg:p-0 max-lg:h-fit text-primary-foreground font-normal"
                     >
                        <Link to={routeConstants.campaigns}>
                           View all campaigns{" "}
                           <FiExternalLink className="ml-2" />
                        </Link>
                     </Button>
                  </CardDescription>
               </CardHeader>

               <CardContent className="pt-6 text-primary-foreground font-normal">
                  <ul className="flex items-center flex-wrap gap-y-5 gap-x-10">
                     {FINANCIAL_OVERVIEW.map((item, index) => (
                        <li key={index}>
                           <Typography affects="small" className="font-normal">
                              {item.title}
                           </Typography>

                           <Typography className="text-2xl font-medium mt-1">
                              ${item.value.toLocaleString()}
                           </Typography>
                        </li>
                     ))}
                  </ul>

                  <div className="mt-10 flex items-center flex-wrap gap-4">
                     <Typography className="font-semibold">
                        January Summary:
                     </Typography>

                     {SUMMARY.map((item, index) => (
                        <span key={index} className="inline-flex gap-2">
                           <Typography>{item.title}</Typography>

                           <li className="list-disc list-inside font-semibold tracking-wide">
                              ${item.value.toLocaleString()}
                           </li>
                        </span>
                     ))}
                  </div>
               </CardContent>
            </Card>

            {isDesktop && <ProfileInformation />}
         </section>
      </DashboardLayout>
   );
};

export default Dashboard;
