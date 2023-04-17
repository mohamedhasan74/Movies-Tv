import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header/Header.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Details from "./Components/Details/Details.jsx";
import { Provider } from "react-redux";
import { store } from "./Reduxtkit/stroe.js";
export const baseImg = "https://image.tmdb.org/t/p/original";
const routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "type/:country",
        element: <Header />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
