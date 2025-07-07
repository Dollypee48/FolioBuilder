// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <FormProvider>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 text-zinc-800 dark:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;
