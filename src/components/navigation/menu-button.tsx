import { useIsRouteActive } from '@/hooks/use-is-route-active';
import { TMenuButtonProps } from '@/types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export const MenuButton: React.FC<TMenuButtonProps> = ({
   href,
   icon: Icon,
   title,
}) => {
   const isRouteActive = useIsRouteActive();

   return (
      <li>
         <Button
            asChild
            variant={isRouteActive(href) ? "default" : 'ghost'}
            className={cn("w-full py-5 justify-start gap-4")}
         >
            <Link to={href}>
               <Icon />

               {title}
            </Link>
         </Button>
      </li>
   )
}