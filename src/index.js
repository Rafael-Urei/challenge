import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage';
import SignUp from './pages/signup/SignUp';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store';
import Main from './pages/main/Main';

const { store, persistor } = configureStore();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'signup',
    element: <SignUp />
  },
  {
    path: 'dashboard',
    element: <Main/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
