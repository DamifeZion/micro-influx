import { useMediaQuery } from "@/hooks/use-media-query"
import { Card, CardHeader, CardTitle } from "./ui/card"



export const ProfileInformation = () => {
   const isDesktop = useMediaQuery("(min-width: 1024px)")

   if (isDesktop) {
      return (
         <div>
            <Card>
               <CardHeader>
                  <CardTitle className="text-primary">
                     Profile Information
                  </CardTitle>
               </CardHeader>
            </Card>
         </div>
      )
   }
}