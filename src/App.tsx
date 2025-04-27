import { useMemo } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { StableNavigateContextProvider } from "./hooks/StableNavigate";
import Error from "./components/Error/Error";
import KinkList from "./components/KinkList/KinkList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import * as RoutePaths from "./constants/RoutePaths";

export default function App() {
  const navbar = useMemo(() => <NavBar />, []);
  const kinklist = useMemo(() => <KinkList />, []);
  return (
    <HashRouter>
      <StableNavigateContextProvider>
        {navbar}
        <Routes>
          <Route path="" element={<Home />} />
          <Route path={RoutePaths.KINKLIST} element={kinklist}>
            <Route path=":listData" element={kinklist} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </StableNavigateContextProvider>
    </HashRouter>
  );
}
