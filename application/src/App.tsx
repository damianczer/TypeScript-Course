import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';
import { Layout } from './layouts/Layout';
import './i18n';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const CoursePage = lazy(() => import('./pages/CoursePage').then(m => ({ default: m.CoursePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-[#007acc] flex items-center justify-center z-50">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/30 border-t-white"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="course" element={<CoursePage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
