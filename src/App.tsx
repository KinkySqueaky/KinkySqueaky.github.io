import { HashRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import KinkList from "./components/KinkList/KinkList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kinklist" element={<KinkList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}
