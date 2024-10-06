import { IoMdNotifications } from "react-icons/io";
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Typography from "../ui/typography";


export const Notification = () => {
   const newNotification = true;

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="text-primary relative *:size-6">
               <IoMdNotifications />

               {newNotification &&
                  <span className="!size-[7px] bg-destructive rounded-full absolute top-[10px] right-2 border-l border-b border-card" />
               }
            </Button>
         </PopoverTrigger>

         <PopoverContent align="end" className="w-fit">
            <Typography>
               Notification should be here.
            </Typography>
         </PopoverContent>
      </Popover>
   )
}