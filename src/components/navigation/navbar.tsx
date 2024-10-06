import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Logo } from "../logo"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Sidebar } from "./sidebar"


export const Navbar = () => {

   return (
      <nav className="border border-greed-600">
         <Sheet>
            <SheetTrigger asChild>
               <span className="container h-14 flex items-center justify-between">
                  <img
                     loading="lazy"
                     src="/dashboard/cs1.png"
                     className="size-6 rounded-sm"
                  />

                  <Logo className="text-xl" />

                  <Button size="icon" variant="ghost" className="text-primary *:size-6">
                     <HamburgerMenuIcon />
                  </Button>
               </span>
            </SheetTrigger>

            <SheetContent side="left" className="px-0 py-0">
               <Sidebar />
            </SheetContent>
         </Sheet>
      </nav>
   )
}