// src/routes.jsx
import Home from "./pages/Home";
import About from "./pages/About";
import SelectBuilder from "./pages/SelectBuilder";
import NotFound from "./pages/NotFound";

import ResumeForm from "./forms/ResumeForm";
import CvForm from "./forms/CvForm";
import PortfolioForm from "./forms/PortfolioForm";

import ResumePreview from "./preview/ResumePreview";
import CvPreview from "./preview/CvPreview";
import PortfolioPreview from "./preview/PortfolioPreview";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/select", element: <SelectBuilder /> },

  // Forms
  { path: "/form/resume", element: <ResumeForm /> },
  { path: "/form/cv", element: <CvForm /> },
  { path: "/form/portfolio", element: <PortfolioForm /> },

  // Previews
  { path: "/preview/resume", element: <ResumePreview /> },
  { path: "/preview/cv", element: <CvPreview /> },
  { path: "/preview/portfolio", element: <PortfolioPreview /> },

  // 404
  { path: "*", element: <NotFound /> },
];
