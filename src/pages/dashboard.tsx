import { Conversation } from "@/components/conversation/conversation";
import { Notification } from "@/components/notification/notification";
import Typography from "@/components/ui/typography";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import CreateCampaign from "./create-campaign";


const Dashboard = () => {

   return (
      <DashboardLayout>
         <div className="flex flex-wrap gap-x-4 gap-y-6 items-center justify-between">
            <Typography className="text-primary">
               Dashboard
            </Typography>

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
         </div>
      </DashboardLayout>
   )
}



export default Dashboard;