import { CAMPAIGN_CHANNELS } from "@/constants/dashboard-const";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const useCreateCampaign = () => {
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
      channels: z.array(z.enum(CAMPAIGN_CHANNELS as [string, ...string[]])).min(1, {
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
         channels: [],
         budget: "",
      },
   });

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      try {
         values.
         console.log(values);

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
