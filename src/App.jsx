import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import './App.css';
import LoadingSpinner from './components/utils/hoc/loadingSpinner';
import { router } from './routes';

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
