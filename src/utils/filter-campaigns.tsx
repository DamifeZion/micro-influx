import { TCampaignItem, TFilterCampaign } from "@/types";

export const filterCampaign: TFilterCampaign = (
   array,
   searchQuery,
   sortQuery,
   categoryQuery
) => {
   // First: Filter the array based on the search query (searching by title)
   let newArray: Array<TCampaignItem> = array.filter((item: TCampaignItem) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
   );

   //Step 2: We sort the filtered results based on the selected sort query
   switch (sortQuery) {
      case "category":
         newArray = newArray.filter((item: TCampaignItem) => {
            if (categoryQuery) {
               return (
                  item.category.toLowerCase() === categoryQuery.toLowerCase()
               );
            } else {
               return item;
            }
         });
         break;
      case "budget":
         newArray = newArray.filter((item: TCampaignItem) =>
            item.budget.toLowerCase().includes(searchQuery.toLowerCase())
         );
         break;
      case "date created (newest first)":
         newArray.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
         );
         break;
      case "date created (oldest first)":
         newArray.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
         );
         break;
      case "price (low to high)":
         newArray.sort((a, b) => parseFloat(a.budget) - parseFloat(b.budget));
         break;
      case "price (high to low)":
         newArray.sort((a, b) => parseFloat(b.budget) - parseFloat(a.budget));
         break;
      default:
         return array;
   }

   return newArray;
};
