import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from './components/utils/hoc/pageNotFound';
import * as BASE_CONFIG from './config/config';
import Home from './components/home/home';
// import TestConnection from './components/modal/testConnection/testConnection';
// const TokenValidation = lazy(() => import('./components/utils/hoc/tokenValidation'));
// const Home = lazy(() => import('./components/home/home'));
// const AssetDetail = lazy(() => import('./components/assetDetail/assetDetail'));
// const Admin = lazy(() => import('./components/admin/admin'));

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <PageNotFound />,
    },
    // {
    //   path: '/add-connection',
    //   element: <TestConnection />,
    //   errorElement: <PageNotFound />,
    // },
    // {
    //   element: <TokenValidation />,
    //   errorElement: <PageNotFound />,
    //   children: [
    //     {
    //       path: '/',
    //       element: <Home />,
    //       errorElement: <PageNotFound />,
    //     },
    //     {
    //       path: '/asset-detail/:assetType/:assetId',
    //       element: <AssetDetail />,
    //       errorElement: <PageNotFound />,
    //     },
    //     {
    //       path: '/admin',
    //       element: <Admin />,
    //       errorElement: <PageNotFound />,
    //     },
    //   ],
    // },
  ],
  {
    basename: BASE_CONFIG?.CONFIG?.UX_Basename, //basename is used to set the base url for all routes in our app
  },
);
