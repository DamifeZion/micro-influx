import * as React from "react";

export type TLogoProps = React.HTMLAttributes<HTMLHeadingElement> & {
   closeDialog?: () => void;
};

export type TIsRouteActive = (path: string, matchSubroute?: boolean) => boolean;

export type TCampaignItem = {
   id: string;
   title: string;
   brandName: string;
   category: string;
   description: string;
   channels: Array<string>;
   budget: string;
   date: Date;
};

export type TCampaignSlice = {
   campaigns: Array<TCampaignItem>;
};

export type TDashboardProps = {
   containerClassName?: string;
   contentClassName?: string;
   children: React.ReactNode;
};

export type TNavigationMenu = {
   title: string;
   href: string;
   icon: React.ComponentType<TIconProps>;
};

export type TIconProps = {
   size?: string | number;
   color?: string;
   className?: string;
};

export type TMenuButtonProps = TNavigationMenu;

export type TShortcutBtnProps = {
   id: TCampaignItem["id"];
   src?: string;
   title: TCampaignItem["title"];
};

export type TFinancialOverview = {
   title: string;
   value: number;
};

export type TCampaignCard = TCampaignItem & {
   index: number;
};
