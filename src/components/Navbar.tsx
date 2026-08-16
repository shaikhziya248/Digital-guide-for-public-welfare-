import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useSaved } from "../context/SavedContext";
import { Language } from "../types";
import { ShieldCheck, CheckCircle2, FileText, Bookmark, HelpCircle, Menu, X, Globe } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { savedItems } = useSaved();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/eligibility", label: t("eligibilityCheck"), highlight: true },
    { path: "/schemes", label: t("schemesDirectory") },
    { path: "/how-it-works", label: t("howItWorks") },
    { 
      path: "/saved", 
      label: t("savedSchemes"), 
      badge: savedItems.length > 0 ? savedItems.length : null 
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              🏛️
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg tracking-tight flex items-center gap-1.5 text-white">
                <span>{t("appTitle")}</span>
                <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-blue-500/20 text-blue-300 rounded border border-blue-400/30">
                  Govt Portal
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block font-medium">
                National Scheme Finder & Eligibility
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all relative flex items-center gap-1.5 ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : link.highlight
                      ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                  {link.badge !== null && (
                    <span className="ml-1 px-1.5 py-0.2 text-[11px] font-bold bg-amber-500 text-slate-950 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center bg-slate-800/80 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 hover:border-slate-600 transition">
              <Globe className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer pr-1"
                aria-label="Select Language"
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="hi" className="bg-slate-900 text-white">हिन्दी (Hindi)</option>
                <option value="mr" className="bg-slate-900 text-white">मराठी (Marathi)</option>
              </select>
            </div>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                isActive(link.path)
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>{link.label}</span>
              {link.badge !== null && (
                <span className="px-2 py-0.5 text-xs font-bold bg-amber-500 text-slate-950 rounded-full">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
