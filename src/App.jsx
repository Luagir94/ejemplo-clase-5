import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Favs from './pages/favs';
import { QueryClient , QueryClientProvider } from '@tanstack/react-query';
import { ContextProvider } from './context'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {

    const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/favs",
    element: <Favs/>,
  },
]);


const client = new QueryClient();

return( 
<QueryClientProvider client={client}>
  <ContextProvider
>
  <ReactQueryDevtools initialIsOpen={false} />
<RouterProvider router={router} />
</ContextProvider>
  </QueryClientProvider>
)
}

export default App;
