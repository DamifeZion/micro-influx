import * as React from 'react';
import { Navbar } from '@/components/navigation/navbar';
import { Sidebar } from '@/components/navigation/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { TDashboardProps } from '@/types';

export const DashboardLayout: React.FC<TDashboardProps> = ({
   containerClassName,
   contentClassName,
   children
}) => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   /** Hide the default HTML scrollbar */
   React.useEffect(() => {
      document.body.className = "overflow-hidden";
   }, []);

   return (
      <main className={cn("h-screen grid grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr]", containerClassName)}>
         {!isDesktop && <Navbar />}

         {isDesktop && <Sidebar />}

         <ScrollArea scrollHideDelay={200}>
            <div className={cn("container pb-3 lg:pt-10", contentClassName)}>
               {children}
            </div>
         </ScrollArea>
      </main>
   );
};
