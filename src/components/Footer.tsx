import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { ExternalLink, ShieldAlert, Heart, Building } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="text-xl">🇮🇳</span>
              <span>{t("appTitle")}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              An intelligent client-side discovery & eligibility platform designed to democratize public awareness for Indian central and state welfare initiatives, subsidies, and citizen benefits.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Independent guidance tool. Always verify final application terms on official portals.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-bold mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">Home Overview</Link>
              </li>
              <li>
                <Link to="/eligibility" className="hover:text-blue-400 transition font-semibold text-blue-400">Eligibility Checker</Link>
              </li>
              <li>
                <Link to="/schemes" className="hover:text-blue-400 transition">Schemes Directory</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-blue-400 transition">Documentation & Process Guide</Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-blue-400 transition">Saved & Tracked Applications</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-bold mb-3">Official Govt Portals</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="https://www.myscheme.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>myScheme Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://pmay-urban.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>PMAY Urban Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>PM-KISAN Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://scholarships.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>National Scholarship Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://pmjay.gov.in/" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                  <span>Ayushman Bharat (PMJAY)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Digital Welfare Guide. Built for Public Accessibility.</p>
          <p className="flex items-center gap-1">
            <span>Client-side Privacy Preserved</span>
            <span>• No Personal Data Stored On Server</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
