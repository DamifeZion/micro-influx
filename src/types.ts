import * as React from "react";

export type TLogoProps = React.HTMLAttributes<HTMLHeadingElement> & {
   closeDialog?: () => void;
};

export type TIsRouteActive = (path: string, matchSubroute?: boolean) => boolean;

export type TCampaignItem = {
   id: string
}

export type TCampaignSlice = {
   campaigns: Array<TCampaignItem>
}

export type TDashboardProps = {
   containerClassName?: string;
   contentClassName?: string;
   children: React.ReactNode;
}