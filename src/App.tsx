import { Authenticated, GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { authProvider, dataProvider ,liveprovider } from "./provider";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
// import { , forgotPassword , login , register} from "./pages/Home";
import {Home, ForgotPassword, Login, Register } from "./pages";
import Layout from "./components/layout";


function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
       
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveprovider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "TpZg3h-og6Z9o-JWBMgx",
                  liveMode: "auto",
                }}
              >
              <Routes>
                  
                    <Route path="register" element={<Register/>} />  
                    <Route path="login" element={<Login />} /> 
                    <Route path="forgot-password" element={<ForgotPassword />} />  

                    <Route element={<Authenticated key='Authenticated-Layout' fallback={<CatchAllNavigate to="/login"/>}
                    >


                       <Layout>
                        <Outlet/>
                      </Layout>
                      



                    </Authenticated>
                  }>
                   <Route index element={<Home/>}/>
                    </Route>
                   
              </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
      
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
