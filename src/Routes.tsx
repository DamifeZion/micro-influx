import * as React from 'react';
import { Routes as Router, Route, Navigate } from 'react-router-dom'
import { routeConstants } from './constants/route-const';
import { LoadingFallback } from './components/loading-fallbacl';
import useScrollToTop from './hooks/use-scroll-to-top';

/** Lazy Imports  */
const Dashboard = React.lazy(() => import("@/pages/dashboard"))
const CreateCampaign = React.lazy(() => import("@/pages/create-campaign"))
const NotFound = React.lazy(() => import("@/pages/not-found"))

const Routes = () => {
   useScrollToTop()

   return (
      <React.Suspense fallback={<LoadingFallback />}>
         <Router>
            <Route
               index
               element={<Navigate to={routeConstants.dashboard} />}
            />

            <Route
               path={routeConstants.dashboard}
               element={<Dashboard />}
            />

            <Route
               path={routeConstants.createCampaign}
               element={<CreateCampaign />}
            />

            <Route
               path='*'
               element={<NotFound />}
            />
         </Router>
      </React.Suspense>
   )
}

export default Routes;