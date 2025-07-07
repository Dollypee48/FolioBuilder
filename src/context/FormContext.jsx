
import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    return saved ? JSON.parse(saved) : {};
  });

  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem("cvData");
    return saved ? JSON.parse(saved) : {};
  });

  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem("portfolioData");
    return saved ? JSON.parse(saved) : {};
  });


  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
  }, [portfolioData]);

  return (
    <FormContext.Provider
      value={{
        resumeData,
        setResumeData,
        cvData,
        setCvData,
        portfolioData,
        setPortfolioData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
