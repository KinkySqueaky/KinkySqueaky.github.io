import { HashRouter, Routes, Route } from "react-router-dom";
import { StableNavigateContextProvider } from "./hooks/StableNavigate";
import Error from "./components/Error/Error";
import KinkList from "./components/KinkList/KinkList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import * as RoutePaths from "./constants/RoutePaths";

export default function App() {
  return (
    <HashRouter>
      <StableNavigateContextProvider>
        <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path={RoutePaths.KINKLIST} element={<KinkList />}>
            <Route path=":listData" element={<KinkList />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </StableNavigateContextProvider>
    </HashRouter>
  );
}
