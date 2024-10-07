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
import {
   CAMPAIGN_CATEGORY,
   FINANCIAL_OVERVIEW,
   SORT_CAMPAIGNS,
   SUMMARY,
} from "@/constants/dashboard-const";
import { ProfileInformation } from "@/components/profile-information";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
} from "@/components/ui/form";
import { useDashboard } from "@/hooks/use-dashboard";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";
import { RootState } from "@/services/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "@/components/ui/tooltip";
import { CampaignCard } from "@/components/campaign-card";
import { capitalizeFirstLetters } from "@/utils/capitalize-first-letters";
import { filterCampaign } from "@/utils/filter-campaigns";

const Dashboard = () => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");
   const { campaigns } = useSelector((state: RootState) => state.campaignSlice);
   const { form, onSubmit, searchQuery, sortQuery, categoryQuery } = useDashboard();

   return (
      <DashboardLayout>
         {/* Title and Quick Actions */}
         <section className="flex flex-wrap items-center justify-between max-lg:mt-4 gap-x-4 gap-y-6">
            <Typography className="text-lg text-primary">Dashboard</Typography>

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
                        className="font-normal max-lg:p-0 max-lg:h-fit text-primary-foreground"
                     >
                        <Link to={routeConstants.campaigns}>
                           View all campaigns{" "}
                           <FiExternalLink className="ml-2" />
                        </Link>
                     </Button>
                  </CardDescription>
               </CardHeader>

               <CardContent className="pt-6 font-normal text-primary-foreground">
                  <ul className="flex flex-wrap items-center gap-y-5 gap-x-10">
                     {FINANCIAL_OVERVIEW.map((item, index) => (
                        <li key={index}>
                           <Typography affects="small" className="font-normal">
                              {item.title}
                           </Typography>

                           <Typography className="mt-1 text-2xl font-medium">
                              ${item.value.toLocaleString()}
                           </Typography>
                        </li>
                     ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4 mt-10">
                     <Typography className="font-semibold">
                        January Summary:
                     </Typography>

                     {SUMMARY.map((item, index) => (
                        <span key={index} className="inline-flex gap-2">
                           <Typography>{item.title}</Typography>

                           <li className="font-semibold tracking-wide list-disc list-inside">
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
                  <div className="flex flex-wrap items-center justify-between gap-4">
                     <Typography className="text-lg text-primary font-heading">
                        Explore Campaigns
                     </Typography>

                     <FormField
                        name="q"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem className="w-full max-w-sm">
                              <FormControl>
                                 <div className="relative flex items-center">
                                    <Input
                                       placeholder="Search Description"
                                       className="h-10 pr-12 border-none bg-secondary/20"
                                       {...field}
                                    />

                                    {isDesktop && (
                                       <Button
                                          size="icon"
                                          className="absolute top-0 right-0 w-10 h-full"
                                       >
                                          <BiSearch className="size-4" />
                                       </Button>
                                    )}
                                 </div>
                              </FormControl>
                           </FormItem>
                        )}
                     />
                  </div>

                  <div className="flex flex-wrap-reverse items-center justify-between gap-4 mt-4 text-sm">
                     {(searchQuery || sortQuery) && (
                        <Typography className="whitespace-nowrap">
                           Search results:{" "}
                           <span className="font-medium text-primary">
                              {campaigns.length} Blog post
                           </span>{" "}
                           campaigns
                        </Typography>
                     )}

                     <div
                        className={cn("flex items-center gap-6", {
                           "min-[590px]:ml-auto": !searchQuery || !sortQuery,
                        })}
                     >
                        <FormField
                           name="sort"
                           control={form.control}
                           render={({ field }) => (
                              <FormItem className="flex items-center space-y-0">
                                 <FormLabel className="mr-2 font-normal min-w-fit">
                                    Sort by:
                                 </FormLabel>

                                 <FormControl>
                                    <Select
                                       defaultValue={sortQuery || field.value}
                                       onValueChange={(values) => {
                                          field.onChange(values);
                                          form.handleSubmit(onSubmit)();
                                       }}
                                    >
                                       <SelectTrigger
                                          rightIcon={
                                             <CaretDownIcon className="size-5 opacity-60" />
                                          }
                                          className="bg-secondary/20 text-sm text-primary font-medium h-fit py-1.5 border-none gap-2"
                                       >
                                          <SelectValue />
                                       </SelectTrigger>

                                       <SelectContent>
                                          {SORT_CAMPAIGNS.map((item, index) => (
                                             <SelectItem
                                                key={index}
                                                value={item}
                                                className="text-sm"
                                             >
                                                {capitalizeFirstLetters(item)}
                                             </SelectItem>
                                          ))}
                                       </SelectContent>
                                    </Select>
                                 </FormControl>
                              </FormItem>
                           )}
                        />

                        {form.watch('sort') === (SORT_CAMPAIGNS[0] || "category") && (
                           <FormField
                              name="category"
                              control={form.control}
                              render={({ field }) => (
                                 <FormItem className="flex items-center space-y-0">
                                    <FormLabel className="mr-2 font-normal min-w-fit">
                                       Category:
                                    </FormLabel>

                                    <FormControl>
                                       <Select
                                          defaultValue={categoryQuery || field.value}
                                          onValueChange={(values) => {
                                             field.onChange(values);
                                             form.handleSubmit(onSubmit)();
                                          }}
                                       >
                                          <SelectTrigger
                                             rightIcon={
                                                <CaretDownIcon className="size-5 opacity-60" />
                                             }
                                             className="bg-secondary/20 text-sm text-primary font-medium h-fit py-1.5 border-none gap-2"
                                          >
                                             <SelectValue />
                                          </SelectTrigger>

                                          <SelectContent>
                                             {CAMPAIGN_CATEGORY.map((item, index) => (
                                                <SelectItem
                                                   key={index}
                                                   value={item}
                                                   className="text-sm"
                                                >
                                                   {capitalizeFirstLetters(item)}
                                                </SelectItem>
                                             ))}
                                          </SelectContent>
                                       </Select>
                                    </FormControl>
                                 </FormItem>
                              )}
                           />
                        )}

                        <div
                           id="layout-triggers"
                           className="flex items-center gap-2"
                        >
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
                                 <Button
                                    size="icon"
                                    variant="ghost"
                                    className="hover:bg-muted-foreground/10"
                                 >
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
         <section className="grid mt-6 gap-y-4 gap-x-8 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filterCampaign(campaigns, searchQuery, sortQuery, categoryQuery).map(
               (item, index) => (
                  <CampaignCard key={index} index={index} {...item} />
               )
            )}
         </section>
      </DashboardLayout>
   );
};

export default Dashboard;
