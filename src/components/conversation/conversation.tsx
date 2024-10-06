import { BsFillChatTextFill } from "react-icons/bs"; 
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Typography from "../ui/typography";


export const Conversation = () => {
   const newConversation = true;

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="text-primary relative *:size-6">
               <BsFillChatTextFill />

               {newConversation &&
                  <span className="!size-[7px] bg-destructive rounded-full absolute top-1.5 right-1.5 border-l border-b border-card" />
               }
            </Button>
         </PopoverTrigger>

         <PopoverContent align="end" className="w-fit">
            <Typography>
               Conversations/Chat should be here.
            </Typography>
         </PopoverContent>
      </Popover>
   )
}