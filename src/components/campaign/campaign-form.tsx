import { useCreateCampaign } from "@/hooks/campaigns/use-create-campaign";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CAMPAIGN_CATEGORY, CAMPAIGN_CHANNELS } from "@/constants/dashboard-const";
import { ScrollArea } from "../ui/scroll-area";
import * as React from 'react';
import { cn } from "@/lib/utils";
import { capitalizeFirstLetters } from "@/utils/capitalize-first-letters";
import { Checkbox } from "../ui/checkbox";
import { renderCampaignIcon } from "./render-campaign-icon";
import { Label } from "../ui/label";
import { TCreateCampaignFormProp } from "@/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Typography from "../ui/typography";
import { useNavigate } from "react-router-dom";

export const CreateCampaignForm: React.FC<TCreateCampaignFormProp> = ({ closeModal }) => {
   const navigate = useNavigate();
   const isDesktop = useMediaQuery("(min-width: 1024px)");
   const { form, onSubmit } = useCreateCampaign();

   return (
      <React.Fragment>
         {!isDesktop && (
            <Button onClick={() => navigate(-1)} className="py-6 px-0 flex items-center gap-2 text-primary bg-transparent border-none shadow-none hover:bg-transparent">
               <ArrowLeftIcon className="size-4" />

               <Typography>
                  Create Campaign
               </Typography>
            </Button>
         )}

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="[&_input]:border-2 [&_input]:bg-transparent [&_input]:border-muted-foreground/30 [&_textarea]:border-2 [&_textarea]:border-muted-foreground/30 [&_label]:text-primary [&_textarea]:bg-transparent">
               <div className="space-y-2 lg:px-6">
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
                                 <SelectTrigger className={cn("h-12 border-2 border-muted-foreground/30 py-2", {
                                    "text-muted-foreground": !field.value
                                 })}>
                                    <SelectValue placeholder="Enter your brand name here" />
                                 </SelectTrigger>

                                 <SelectContent className="h-56">
                                    <ScrollArea>
                                       {CAMPAIGN_CATEGORY.map((item, index) => (
                                          <SelectItem key={index} value={item}>
                                             {capitalizeFirstLetters(item)}
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
                              <div className="flex items-center gap-2 flex-wrap">
                                 {CAMPAIGN_CHANNELS.map((item, index) => (
                                    <Label
                                       key={index}
                                       htmlFor={item}
                                       className={cn("size-fit p-2 cursor-pointer bg-transparent border-2 border-muted-foreground/30 rounded-sm !text-muted-foreground/30 hover:text-muted-foreground/30", {
                                          "border-primary !text-primary": field.value.includes(item)
                                       })}
                                    >
                                       <span className="*:size-7">
                                          {renderCampaignIcon(item)}
                                       </span>

                                       <Checkbox
                                          id={item}
                                          value={item}
                                          checked={field.value.includes(item) ? true : false}
                                          onCheckedChange={(checked) => {
                                             console.log('Changed', checked, item)
                                             return checked
                                                ? field.onChange([...field.value, item])
                                                : field.onChange(
                                                   field.value?.filter((val) => val !== item)
                                                );
                                          }}
                                          className="hidden"
                                       />
                                    </Label>
                                 ))}
                              </div>
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
                                 isNumeric
                                 placeholder="Enter your campaign budget"
                                 {...field}
                              />
                           </FormControl>

                           <FormMessage />
                        </FormItem>
                     )}
                  />

               </div>

               <div className="mt-8 max-lg:mb-10 flex items-center justify-center lg:w-full lg:sticky lg:bottom-0 lg:bg-card lg:mt-3 lg:pt-3">
                  <Button
                     onClick={() => form.formState.isValid && isDesktop && closeModal && closeModal()}
                     className="px-6 max-lg:w-full max-lg:py-6 max-lg:max-w-[90%]"
                  >
                     Create New Campaign
                  </Button>
               </div>
            </form>
         </Form>
      </React.Fragment>
   );
};
