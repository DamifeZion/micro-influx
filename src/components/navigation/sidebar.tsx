import { CaretSortIcon } from "@radix-ui/react-icons";
import { Logo } from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import Typography from "../ui/typography";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
   CAMPAIGN_SHORTCUT,
   NAVIGATION_MENU,
} from "@/constants/navigation-const";
import { MenuButton } from "./menu-button";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { ShortcutBtn } from "./shortcut-btn";
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";
import { Notification } from "../notification/notification";
import { ProfileInformation } from "../profile-information";

export const Sidebar = () => {
   const { campaigns } = useSelector((state: RootState) => state.campaignSlice);

   return (
      <aside className="w-full h-screen grid grid-rows-[auto_1fr] gap-5 py-6 px-2 bg-card shadow-[0_0_15px_rgb(0,0,0,0.05)] lg:w-[280px]">
         <div className="max-lg:mt-2 px-3.5 flex items-center justify-between">
            <Logo />

            <span className="lg:hidden">
               <Notification />
            </span>
         </div>

         <ScrollArea>
            <div className="px-3 h-full flex flex-col">
               <Popover>
                  <PopoverTrigger asChild>
                     <Button
                        variant="ghost"
                        className="w-full justify-start h-fit py-2 px-1.5 pr-0 flex items-start gap-2"
                     >
                        <Avatar className="size-10 rounded-lg">
                           <AvatarImage src="/dashboard/profile.png" />
                           <AvatarFallback />
                        </Avatar>

                        <span>
                           <Typography className="w-fit font-semibold font-heading text-primary">
                              Olivia Jacobs
                           </Typography>

                           <Typography className="text-sm font-normal">
                              Lifestyle Influencer
                           </Typography>
                        </span>

                        <CaretSortIcon className="size-6 ml-auto" />
                     </Button>
                  </PopoverTrigger>

                  <PopoverContent align="start">
                     <Logo className="text-lg" />
                  </PopoverContent>
               </Popover>

               {/* Pages Button */}
               <ul className="flex flex-col mt-6 gap-1 lg:mb-20">
                  {NAVIGATION_MENU.map((item, index) => (
                     <MenuButton key={index} {...item} />
                  ))}
               </ul>

               <div className="my-10 lg:hidden">
                  <ProfileInformation />
               </div>

               {/* Campaign ShortCuts */}
               <div className="mt-auto">
                  <div className="flex items-center justify-between">
                     <Typography className="font-heading text-primary font-medium">
                        Campaign Shortcuts
                     </Typography>

                     <Button
                        asChild
                        variant="secondary"
                        className="px-2 py-1 text-[10px] font-normal rounded-sm h-fit bg-secondary/20 hover:bg-secondary/15"
                     >
                        <Link to={routeConstants.campaigns}>View all</Link>
                     </Button>
                  </div>

                  <ul className="mt-2 space-y-2">
                     {/* Static Data */}
                     {CAMPAIGN_SHORTCUT.map((item, index) => (
                        <li key={index}>
                           <ShortcutBtn {...item} />
                        </li>
                     ))}

                     {/* Dynamic Data */}
                     {[...campaigns]
                        .reverse()
                        .slice(0, 4)
                        .map((item, index) => (
                           <li key={index}>
                              <ShortcutBtn index={index} {...item} />
                           </li>
                        ))}
                  </ul>
               </div>
            </div>
         </ScrollArea>
      </aside>
   );
};
