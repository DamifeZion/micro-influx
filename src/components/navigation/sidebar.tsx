import { Logo } from "../logo"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ScrollArea } from "../ui/scroll-area"


export const Sidebar = () => {

   return (
      <aside className="max-w-[280px] bg-card shadow-md h-screen grid grid-rows-[auto_1fr] py-6 px-2 *:px-4">
         <Logo />

         <ScrollArea>
            <div className="mt-6 grid grid-rows-[auto_1fr_auto]">
               <Avatar>
                  <AvatarImage src="/dashboard/profile.svg" />
                  <AvatarFallback />
               </Avatar>

              
            </div>
         </ScrollArea>
      </aside>
   )
}