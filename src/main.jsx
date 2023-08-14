import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "./index.css";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import Favs from "./pages/favs";
import PokemonProvider from "./context";


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/pokemon/:id",
    element: <Pokemon/>,
  },
  {
    path: "/favs",
    element: <Favs/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <QueryClientProvider client={queryClient}>
      <PokemonProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
      </PokemonProvider>
  </QueryClientProvider>

);
