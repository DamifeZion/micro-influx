import * as React from "react";

export type TLogoProps = React.HTMLAttributes<HTMLHeadingElement> & {
   closeDialog?: () => void;
};

export type TIsRouteActive = (path: string, matchSubroute?: boolean) => boolean;

export type TCampaignChannels =
   | "facebook"
   | "instagram"
   | "tiktok"
   | "youtube"
   | "twitter"
   | "pinterest"
   | "github";

export type TCampaignCategory =
   | "product review"
   | "product launch"
   | "brand awareness"
   | "influencer collaboration"
   | "Social media engagement"
   | "customer feedback"
   | "content creation"
   | "lead generation"
   | "event promotion"
   | "discount or special offers"
   | "referral program"
   | "user-generated content"
   | "market research";

export type TCampaignItem = {
   id: string;
   title: string;
   brand: string;
   category: string;
   description: string;
   channels: Array<TCampaignChannels>;
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
   index?: number;
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

export type TCreateCampaignFormProp = {
   closeModal?: () => void;
};

export type TFilterCampaign = (
   array: Array<TCampaignItem>,
   searchQuery: string,
   sortQuery: string
) => Array<TCampaignItem> | [];
