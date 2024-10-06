import { TNavigationMenu, TShortcutBtnProps } from "@/types";
import { routeConstants } from "./route-const";
import { CampaignsIcon, EarningsIcon, HomeIcon, MessagesIcon, SettingsIcon } from "@/assets/dashboard-icon";


export const NAVIGATION_MENU: Array<TNavigationMenu> = [
   {
      title: "Dashboard",
      href: routeConstants.dashboard,
      icon: HomeIcon
   },
   {
      title: "Campaigns",
      href: routeConstants.campaigns,
      icon: CampaignsIcon
   },
   {
      title: "Messages",
      href: routeConstants.messages,
      icon: MessagesIcon
   },
   {
      title: "Earning History",
      href: routeConstants.earnings,
      icon: EarningsIcon
   },
   {
      title: "Settings",
      href: routeConstants.settings,
      icon: SettingsIcon
   }
]

export const CAMPAIGN_SHORTCUT: Array<TShortcutBtnProps> = [
   {
      id: "0",
      title: "TechGuru Tech Review Series",
      src: "/dashboard/cs1.png"
   },
   {
      id: "1",
      title: "BeautyBlend Makeup Challenge",
      src: "/dashboard/cs2.png"
   },
   {
      id: "2",
      title: "Wanderlust Adventure Series",
      src: "/dashboard/cs3.png"
   },
   {
      id: "3",
      title: "Fitness Fusion Workout Challenge",
      src: "/dashboard/cs4.png"
   },
   {
      id: "4",
      title: "Home Harmony DIY Challenge",
      src: "/dashboard/cs5.png"
   },
]