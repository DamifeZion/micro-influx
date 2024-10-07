import { useCreateCampaign } from "@/hooks/campaigns/use-create-campaign";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CAMPAIGN_CATEGORY } from "@/constants/dashboard-const";
import { ScrollArea } from "../ui/scroll-area";

export const CreateCampaignForm = () => {
   const { form, onSubmit } = useCreateCampaign()

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 [&_input]:border-2 [&_input]:border-muted-foreground/30 [&_textarea]:border-2 [&_textarea]:border-muted-foreground/30 [&_label]:text-primary">
            <FormField
               name="title"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>
                        Campaign Title
                     </FormLabel>

                     <FormControl>
                        <Input
                           placeholder="Enter your campaign title here"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               name="brand"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>
                        Brand Name
                     </FormLabel>

                     <FormControl>
                        <Input
                           placeholder="Enter your brand name here"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               name="category"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>
                        Campaign Category
                     </FormLabel>

                     <FormControl>
                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                           <SelectTrigger>
                              <SelectValue placeholder="Enter your brand name here" />
                           </SelectTrigger>

                           <SelectContent className="h-56">
                              <ScrollArea>
                                 {CAMPAIGN_CATEGORY.map((item, index) => (
                                    <SelectItem key={index} value={item}>
                                       {item}
                                    </SelectItem>
                                 ))}   
                              </ScrollArea>
                           </SelectContent>
                        </Select>
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               name="description"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>
                        Campaign Description
                     </FormLabel>

                     <FormControl>
                        <Textarea
                           rows={6}
                           placeholder="Enter your brand name here"
                           className="resize-none"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               name="channels"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>
                        Select Preferred Channels
                     </FormLabel>

                     <FormControl>
                        <Input
                           placeholder="Enter your brand name here"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               name="budget"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>
                        Campaign Budget
                     </FormLabel>

                     <FormControl>
                        <Input
                           placeholder="Enter your campaign budget"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <div className="flex items-center justify-center lg:w-full lg:sticky lg:bottom-0 lg:bg-card lg:pt-3">
               <Button className="px-6">
                  Create New Campaign
               </Button>
            </div>
         </form>
      </Form>
   );
};
