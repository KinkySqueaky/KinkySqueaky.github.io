import { HashRouter, Routes, Route } from "react-router-dom";
import { StableNavigateContextProvider } from "./hooks/StableNavigate";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import KinkList from "./components/KinkList/KinkList";
import UserManual from "./components/UserManual/UserManual";
import QuickStart from "./components/UserManual/QuickStart";
import * as RoutePaths from "./constants/RoutePaths";

export default function App() {
  return (
    <HashRouter>
      <StableNavigateContextProvider>
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path={RoutePaths.KINKLIST} element={<KinkList />}>
              <Route path=":listData" element={<KinkList />} />
            </Route>
            <Route path={RoutePaths.USERMANUAL}>
              <Route path="" element={<UserManual />} />
              <Route path={RoutePaths.QUICKSTART} element={<QuickStart />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Provider>
      </StableNavigateContextProvider>
    </HashRouter>
  );
}
