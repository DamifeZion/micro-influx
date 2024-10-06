import { FiExternalLink } from "react-icons/fi";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Typography from "./ui/typography";
import { Progress } from "./ui/progress";
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ProfileInformation = () => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");
   const progress = 75;

   if (isDesktop) {
      return (
         <Card className="flex-grow max-w-xs border-primary px-4 *:px-0">
            <CardHeader className="space-y-0 pb-4 flex-row items-center justify-between border-b border-muted-foreground">
               <CardTitle className="text-primary font-medium tracking-wide">
                  Profile Information
               </CardTitle>

               <Button
                  variant="secondary"
                  size="icon"
                  className="bg-transparent text-secondary size-fit hover:text-primary hover:bg-transparent"
               >
                  <FiExternalLink />
               </Button>
            </CardHeader>

            <CardContent className="pt-4">
               <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <Avatar className="rounded-sm size-12">
                     <AvatarImage src="/dashboard/profile.png" />

                     <AvatarFallback className="rounded-sm">OJ</AvatarFallback>
                  </Avatar>

                  <div className="space-y-2.5">
                     <Typography
                        affects="small"
                        className="text-primary font-semibold"
                     >
                        Olivia Jacobs Jacobs
                     </Typography>

                     <span className="flex items-center gap-2">
                        <Progress
                           value={progress}
                           className="h-1.5 bg-secondary/20"
                           indicatorClassName="bg-secondary"
                        />
                        <Typography className="text-primary font-medium text-[13px]">
                           {progress}%
                        </Typography>
                     </span>
                  </div>
               </div>

               <Typography className="mt-3 text-sm">
                  Complete your profile with details showcasing your skills and
                  personality. Stand out and attract more opportunities.
               </Typography>
            </CardContent>
         </Card>
      );
   }

   return (
      <Card className="bg-secondary/10">
         <CardContent className="px-4 py-6 flex flex-col items-center justify-center text-center">
            {/* Circle here */}
            <div className="size-20 relative">
               <CircularProgressbar
                  value={progress}
                  text={`${progress}% complete`}
                  styles={buildStyles({
                     pathColor: "hsl(206, 89%, 18%)", // Primary color
                     textColor: "transparent",
                     trailColor: "transparent",
                  })}
                  strokeWidth={5}
               />

               {/* Custom text inside the circle */}
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Typography className="text-[20px] font-bold text-primary">
                     {progress}%
                  </Typography>

                  <Typography className="text-[11px] -mt-1">
                     complete
                  </Typography>
               </div>
            </div>

            <Typography className="mt-2 font-semibold text-primary">
               Profile Information
            </Typography>

            <Typography className="text-xs text-balance">
               Enhance your chances of selection by completing your profile – a
               fully detailed profile attracts more opportunities!
            </Typography>

            <Button asChild className="mt-4 w-full text-xs font-normal">
               <Link to={routeConstants.profile}>Complete my Profile</Link>
            </Button>
         </CardContent>
      </Card>
   );
};
