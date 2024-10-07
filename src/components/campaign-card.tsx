import { BsFillBookmarkFill } from "react-icons/bs";
import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { TCampaignCard } from "@/types";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { CAMPAIGN_COLORS } from "@/constants/dashboard-const";
import { getInitials } from "@/utils/get-initials";
import Typography from "./ui/typography";
import { capitalize } from "lodash";
import moment from "moment";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";
import { renderCampaignIcon } from "@/utils/render-campaign-icon";

export const CampaignCard: React.FC<TCampaignCard> = ({
   index,
   id,
   brandName,
   budget,
   category,
   description,
   channels,
   title,
   date,
}) => {
   // cycle through the colors array using modulus
   const fallbackBG = CAMPAIGN_COLORS[index % CAMPAIGN_COLORS.length];
   const visibleChannels = 4;

   return (
      <Card className="max-lg:bg-background max-lg:shadow-none max-lg:border-none max-lg:*:px-0 *:p-4">
         <CardHeader className="grid grid-cols-[auto_1fr] gap-2">
            <Avatar className="rounded-sm size-12">
               <AvatarFallback
                  style={{ backgroundColor: fallbackBG }}
                  className="rounded-sm font-medium text-primary-foreground"
               >
                  {getInitials(title)}
               </AvatarFallback>
            </Avatar>

            <div className="grid items-center gap-1.5">
               <span className="flex flex-wrap gap-1 items-center justify-between">
                  <Typography className="font-semibold font-heading !leading-none lg:text-lg lg:truncate lg:max-w-[90%] min-[1300px]:max-w-[63%] min-[1300px]:overflow-hidden">
                     {title}
                  </Typography>

                  <div className="flex flex-wrap-reverse items-center gap-1.5 justify-end justify-end lg:w-full min-[1300px]:w-auto">
                     <Tooltip>
                        <TooltipTrigger>
                           <Typography className="text-[10px] sm:max-w-[72px] lg:max-w-fit xl:max-w-[72px] truncate">
                              Posted {moment(date).fromNow()}
                           </Typography>
                        </TooltipTrigger>

                        <TooltipContent>
                           <Typography className="text-[10px]">
                              Posted {moment(date).fromNow()}
                           </Typography>
                        </TooltipContent>
                     </Tooltip>

                     <Button
                        size="icon"
                        className={cn(
                           "size-fit bg-transparent hover:bg-transparent text-[#FF3366] shadow-none lg:ml-auto"
                        )}
                     >
                        <BsFillBookmarkFill className="size-4" />
                     </Button>
                  </div>
               </span>

               <ul className="flex flex-wrap items-center gap-1">
                  <Typography className=" text-sm lg:text-xs xl:text-md">
                     {capitalize(brandName)}
                  </Typography>

                  <li className="list-disc list-inside  text-sm lg:text-xs xl:text-md">
                     {category}
                  </li>
               </ul>
            </div>
         </CardHeader>

         <CardContent className="!pt-0 !pb-0">
            <Typography className="text-sm line-clamp-3">
               {description}
            </Typography>

            <div>
               <Typography className="text-primary font-medium mt-2  text-sm">
                  Channels
               </Typography>

               <div className="mt-1 flex items-center gap-3 flex-wrap text-primary">
                  {channels.slice(0, visibleChannels).map((item, index) => (
                     <span key={index} className="*:size-5">
                        {renderCampaignIcon(item)}
                     </span>
                  ))}

                  {channels.length > visibleChannels && (
                     <Typography className="text-sm font-medium text-gray-600">
                        + {channels.length - visibleChannels} more
                     </Typography>
                  )}
               </div>
            </div>
         </CardContent>

         <CardFooter className="!pt-0  justify-between">
            <div>
               <Typography className="text-primary font-medium mt-2 text-sm">
                  Budget
               </Typography>

               <Typography>
                  {budget.split(" - ").map((item, index) => (
                     <span key={index} className="text-primary font-semibold">
                        $ {item} {index === 0 && " - "}
                     </span>
                  ))}
               </Typography>
            </div>

            <Button asChild>
               <Link to={routeConstants.campaignDetails.replace(":id", id)}>
                  Apply Now
               </Link>
            </Button>
         </CardFooter>
      </Card>
   );
};
