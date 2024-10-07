import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store, { persistor } from "./services/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { Toaster } from "sonner";

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <BrowserRouter>
               <TooltipProvider delayDuration={100}>
                  <Routes />
               </TooltipProvider>

               <Toaster closeButton richColors duration={6000} />
            </BrowserRouter>
         </PersistGate>
      </Provider>
   );
}

export default App;
