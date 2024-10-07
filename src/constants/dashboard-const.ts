import {
   TCampaignCategory,
   TCampaignChannels,
   TFinancialOverview,
} from "@/types";

export const FINANCIAL_OVERVIEW: Array<TFinancialOverview> = [
   {
      title: "Total Income",
      value: 62932,
   },
   {
      title: "Funds in Escrow",
      value: 62231,
   },
   {
      title: "Ave. Income Monthly",
      value: 3542,
   },
];

export const SUMMARY: Array<TFinancialOverview> = [
   {
      title: "Total Fund in Escrow",
      value: 350,
   },
   {
      title: "Total Income",
      value: 850,
   },
];

export const SORT_CAMPAIGNS: Array<string> = ["category", "budget"];

export const CAMPAIGN_COLORS: Array<string> = [
   "#B2007A",
   "#FF3700",
   "#FFAA00",
   "#0571FF",
   "#B2007A",
   "#00B20F",
];

export const CAMPAIGN_CHANNELS: Array<TCampaignChannels> = [
   "instagram",
   "tiktok",
   "youtube",
   "twitter",
   "facebook",
   "pinterest",
   "github",
];

export const CAMPAIGN_CATEGORY: Array<TCampaignCategory> = [
   "product review",
   "product launch",
   "brand awareness",
   "influencer collaboration",
   "Social media engagement",
   "customer feedback",
   "content creation",
   "lead generation",
   "event promotion",
   "discount or special offers",
   "referral program",
   "user-generated content",
   "market research",
];
