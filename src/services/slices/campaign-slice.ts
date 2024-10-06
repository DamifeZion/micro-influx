import { TCampaignItem, TCampaignSlice } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TCampaignSlice = {
   campaigns: [],
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
