import { createHashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Appendix } from './pages/Appendix';
import { Exam } from './pages/Exam';
import { Glossary } from './pages/Glossary';
import { Home } from './pages/Home';
import { Lesson } from './pages/Lesson';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 's/:sectionId', element: <Lesson /> },
      { path: 'exam', element: <Exam /> },
      { path: 'appendix', element: <Appendix /> },
      { path: 'glossary', element: <Glossary /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
];

export const router = createHashRouter(routes, { future: { v7_relativeSplatPath: true, v7_fetcherPersist: true, v7_normalizeFormMethod: true, v7_partialHydration: true, v7_skipActionErrorRevalidation: true } });
