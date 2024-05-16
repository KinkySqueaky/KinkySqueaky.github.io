import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from "./Error";
import KinkList from "./components/KinkList/KinkList";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "kinklist",
      element: <KinkList />,
    },
  ]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/kinklist" element={<KinkList />} />
      </Routes>
    </BrowserRouter>
  );
}
