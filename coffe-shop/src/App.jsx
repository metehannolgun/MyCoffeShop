import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import ProductDetails from './components/ProductDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* HomePage varsayılan rota */}
        <Route index element={<HomePage />} />
        <Route path="dashboard/:category" element={<Dashboard />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
