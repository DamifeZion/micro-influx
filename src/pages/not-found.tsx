import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <div className="container w-screen h-screen flex flex-col items-center justify-center text-center">
         <Typography variant="h2">
            404 Not Found <br /> This page does not exist. <br />
         </Typography>

         <Button asChild className="mt-4">
            <Link to={routeConstants.dashboard}>Go to Dashboard</Link>
         </Button>
      </div>
   );
};

export default NotFound;
