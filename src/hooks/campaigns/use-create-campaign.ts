import { v4 as uuidv4 } from "uuid";
import { CAMPAIGN_CHANNELS } from "@/constants/dashboard-const";
import { addCampaign } from "@/services/slices/campaign-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { z } from "zod";
import { TCampaignChannels } from "@/types"; // Import the correct type

export const useCreateCampaign = () => {
   const dispatch = useDispatch();

   // Define your form schema with the correct channel type
   const formSchema = z.object({
      title: z.string().min(1, {
         message: "Please enter campaign title",
      }),
      brand: z.string().min(1, {
         message: "Please enter your brand name",
      }),
      category: z.string().min(1, {
         message: "Please select campaign category",
      }),
      description: z.string().min(1, {
         message: "Please enter campaign description",
      }),
      channels: z
         .array(z.enum(CAMPAIGN_CHANNELS as [TCampaignChannels, ...TCampaignChannels[]])) // Strictly typed channels
         .min(1, {
            message: "Please select at least one campaign channel",
         }),
      budget: z.string().min(1, {
         message: "Please enter campaign budget",
      }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         title: "",
         brand: "",
         category: "",
         description: "",
         channels: [] as TCampaignChannels[], // Ensure channels are properly typed
         budget: "",
      },
   });

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      try {
         const newCampaign = {
            ...values,
            id: uuidv4(), // Generate a unique ID
            date: new Date(),
         };

         console.log(newCampaign);
         dispatch(addCampaign(newCampaign));

         toast.success("Campaign created successfully");
      } catch (error) {
         console.error(error);
      }
   };

   return {
      form,
      onSubmit,
   };
};
