import { BiListUl } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
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
import { FINANCIAL_OVERVIEW, SORT_CAMPAIGNS, SUMMARY } from "@/constants/dashboard-const";
import { ProfileInformation } from "@/components/profile-information";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useDashboard } from "@/hooks/use-dashboard";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";
import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { capitalize } from "lodash";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CampaignCard } from "@/components/campaign-card";

const Dashboard = () => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");
   const { campaigns } = useSelector((state: RootState) => state.campaignSlice)
   const { form, onSubmit, searchQuery, sortQuery } = useDashboard()


   return (
      <DashboardLayout>
         {/* Title and Quick Actions */}
         <section className="max-lg:mt-4 flex flex-wrap gap-x-4 gap-y-6 items-center justify-between">
            <Typography className="text-primary text-lg">Dashboard</Typography>

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

         {/* Explore  */}
         <section className="mt-6">
            <Form {...form}>
               {/* In desktop we use buttons for submit in mobile its onChnage */}
               <form
                  onChange={() => !isDesktop && form.handleSubmit(onSubmit)()}
                  onSubmit={form.handleSubmit(onSubmit)}
               >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                     <Typography className="text-primary font-heading text-lg">
                        Explore Campaigns
                     </Typography>

                     <FormField
                        name="q"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem className="max-w-sm w-full">
                              <FormControl>
                                 <div className="flex items-center relative">
                                    <Input
                                       placeholder="Search Description"
                                       className="bg-secondary/20 border-none pr-12 h-10"
                                       {...field}
                                    />

                                    {isDesktop && (
                                       <Button size="icon" className="absolute top-0 right-0 h-full w-10">
                                          <BiSearch className="size-4" />
                                       </Button>
                                    )}
                                 </div>
                              </FormControl>
                           </FormItem>
                        )}
                     />
                  </div>

                  <div className="mt-4 flex flex-wrap-reverse justify-between gap-4 items-center text-sm">
                     {(searchQuery || sortQuery) && (
                        <Typography className="whitespace-nowrap">
                           Search results: {" "}
                           <span className="text-primary font-medium">
                              {campaigns.length} Blog post
                           </span> {" "}
                           campaigns
                        </Typography>
                     )}

                     <div className={cn("flex items-center gap-6", {
                        "min-[590px]:ml-auto": (!searchQuery || !sortQuery)
                     })}>
                        <FormField
                           name="sort"
                           control={form.control}
                           render={({ field }) => (
                              <FormItem className="flex items-center space-y-0">
                                 <FormLabel className="min-w-fit font-normal mr-2">
                                    Sort by:
                                 </FormLabel>

                                 <FormControl>
                                    <Select defaultValue={sortQuery || field.value} onValueChange={(values) => {
                                       field.onChange(values);
                                       form.handleSubmit(onSubmit)()
                                    }}>
                                       <SelectTrigger
                                          rightIcon={<CaretDownIcon className="size-5 opacity-60" />}
                                          className="bg-secondary/20 text-sm text-primary font-medium h-fit py-1.5 border-none gap-2">
                                          <SelectValue />
                                       </SelectTrigger>

                                       <SelectContent>
                                          {SORT_CAMPAIGNS.map((item, index) => (
                                             <SelectItem key={index} value={item} className="text-sm">
                                                {capitalize(item)}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </Select>
                                 </FormControl>
                              </FormItem>
                           )}
                        />

                        <div id="layout-triggers" className="flex items-center gap-2">
                           <Tooltip>
                              <TooltipTrigger>
                                 <Button size="icon" variant="secondary">
                                    <BsGrid className="size-6" />
                                 </Button>
                              </TooltipTrigger>

                              <TooltipContent align="end">
                                 <Typography className="text-xs">
                                    Grid layout
                                 </Typography>
                              </TooltipContent>
                           </Tooltip>

                           <Tooltip>
                              <TooltipTrigger>
                                 <Button size="icon" variant="ghost" className="hover:bg-muted-foreground/10">
                                    <BiListUl className="size-6" />
                                 </Button>
                              </TooltipTrigger>

                              <TooltipContent align="end">
                                 <Typography className="text-xs">
                                    List layout
                                 </Typography>
                              </TooltipContent>
                           </Tooltip>
                        </div>
                     </div>
                  </div>
               </form>
            </Form>
         </section>

         {/* Campaign List  */}
         <section className="mt-6 grid gap-y-4 gap-x-8 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((item, index) => (
               <CampaignCard 
                  key={index}
                  index={index}
                  {...item}
               />
            ))}
         </section>
      </DashboardLayout>
   );
};

export default Dashboard;
