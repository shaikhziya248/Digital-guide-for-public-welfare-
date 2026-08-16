import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { SavedProvider } from "./context/SavedContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { EligibilityPage } from "./pages/EligibilityPage";
import { SchemesPage } from "./pages/SchemesPage";
import { SchemeDetailPage } from "./pages/SchemeDetailPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { SavedPage } from "./pages/SavedPage";

// ScrollToTop helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <SavedProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col font-sans bg-slate-50 antialiased selection:bg-blue-500 selection:text-white">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/eligibility" element={<EligibilityPage />} />
                <Route path="/schemes" element={<SchemesPage />} />
                <Route path="/schemes/:id" element={<SchemeDetailPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/saved" element={<SavedPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </SavedProvider>
    </LanguageProvider>
  );
}
