import * as React from "react";
import { TShortcutBtnProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/utils/get-initials";
import Typography from "../ui/typography";
import { CaretRightIcon } from "@radix-ui/react-icons";
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CAMPAIGN_COLORS } from "@/constants/dashboard-const";

export const ShortcutBtn: React.FC<TShortcutBtnProps> = ({
   index,
   id,
   title,
   src,
}) => {
   // cycle through the colors array using modulus
   let fallbackBG;

   if (typeof index !== "undefined") {
      fallbackBG = [...CAMPAIGN_COLORS].reverse()[
         index % CAMPAIGN_COLORS.length
      ];
   }

   return (
      <Button
         asChild
         variant="ghost"
         className="h-fit grid grid-cols-[auto_1fr_auto] pl-2 pr-0 py-2 gap-1.5"
      >
         <Link to={routeConstants.campaignDetails.replace(":id", id)}>
            <Avatar className="rounded-sm size-6">
               <AvatarImage src={src} />
               <AvatarFallback
                  style={{ backgroundColor: fallbackBG }}
                  className="text-xs rounded-xs text-primary-foreground"
               >
                  {getInitials(title)}
               </AvatarFallback>
            </Avatar>

            <Typography className="text-sm truncate text-primary">
               {title}
            </Typography>

            <CaretRightIcon className="text-primary size-6" />
         </Link>
      </Button>
   );
};
