import { TCampaignItem, TCampaignSlice } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCampaignSlice = {
   campaigns: [
      {
         id: "1",
         title: "Epic Social Buzz",
         brandName: "Samsung",
         category: "Product Review",
         description:
            "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn",
         channels: [
            "instagram",
            "tiktok",
            "youtube",
            "twitter",
            "facebook",
            "pinterest",
            "github",
         ],
         budget: "1000 - 2000",
         date: new Date(),
      },
      {
         id: "1",
         title: "Epic Social Buzz",
         brandName: "Samsung",
         category: "Product Review",
         description:
            "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn",
         channels: [
            "instagram",
            "tiktok",
            "youtube",
            "twitter",
            "facebook",
            "pinterest",
            "github",
         ],
         budget: "1000 - 2000",
         date: new Date("2023-10-09T09:30:15Z"),
      },
      {
         id: "1",
         title: "Epic Social Buzz",
         brandName: "Samsung",
         category: "Product Review",
         description:
            "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn",
         channels: [
            "instagram",
            "tiktok",
            "youtube",
            "twitter",
            "facebook",
            "pinterest",
            "github",
         ],
         budget: "1000 - 2000",
         date: new Date("2024-06-12T12:00:00Z"),
      },
      {
         id: "1",
         title: "Epic Social Buzz",
         brandName: "Samsung",
         category: "Product Review",
         description:
            "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn",
         channels: [
            "instagram",
            "tiktok",
            "youtube",
            "twitter",
            "facebook",
            "pinterest",
            "github",
         ],
         budget: "1000 - 2000",
         date: new Date("2024-03-13T08:15:45Z"),
      },
      {
         id: "1",
         title: "Epic Social Buzz",
         brandName: "Samsung",
         category: "Product Review",
         description:
            "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn",
         channels: [
            "instagram",
            "tiktok",
            "youtube",
            "twitter",
            "facebook",
            "pinterest",
            "github",
         ],
         budget: "1000 - 2000",
         date: new Date("2023-12-30T15:45:00Z"),
      },
      {
         id: "1",
         title: "Epic Social Buzz",
         brandName: "Samsung",
         category: "Product Review",
         description:
            "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn",
         channels: [
            "instagram",
            "tiktok",
            "youtube",
            "twitter",
            "facebook",
            "pinterest",
            "github",
         ],
         budget: "1000 - 2000",
         date: new Date("2024-08-23T10:20:30Z"),
      },
   ],
};

const campaignSlice = createSlice({
   name: "campaignSlice",
   initialState,
   reducers: {
      addCampaign: (state, action: PayloadAction<TCampaignItem>) => {
         state.campaigns.push(action.payload);
      },

      deleteCampaign: (state, action: PayloadAction<TCampaignItem["id"]>) => {
         state.campaigns = state.campaigns.filter(
            (c) => c.id !== action.payload
         );
      },
   },
});

export const { addCampaign, deleteCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
