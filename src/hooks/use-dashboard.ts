import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";
import { SORT_CAMPAIGNS } from "@/constants/dashboard-const";

export const useDashboard = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const searchQuery = searchParams.get("q") ?? "";
   const sortQuery = searchParams.get("sort") ?? SORT_CAMPAIGNS[0];

   const formSchema = z.object({
      q: z.string().optional(),
      sort: z.string().optional(),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         q: "",
         sort: SORT_CAMPAIGNS[0],
      },
   });

   const debouncedSubmit = debounce((values: z.infer<typeof formSchema>) => {
      console.log(values);

      setSearchParams({
         ...Object.fromEntries(searchParams.entries()),
         ...values,
      });
   }, 300);

   // Memoize the debounced function using useCallback
   const onSubmit = React.useCallback(
      (values: z.infer<typeof formSchema>) => {
         debouncedSubmit(values);
      },
      [debouncedSubmit]
   );

   return {
      form,
      onSubmit,
      searchQuery,
      sortQuery,
   };
};
