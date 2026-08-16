import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useSaved } from "../context/SavedContext";
import { SCHEMES_DATA } from "../data/schemesData";
import {
  ArrowLeft,
  Bookmark,
  ExternalLink,
  CheckCircle2,
  PhoneCall,
  FileText,
  ShieldCheck,
  Building2,
  Calendar,
  Share2,
  Sparkles
} from "lucide-react";

export const SchemeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { isSaved, toggleSaveScheme } = useSaved();

  const scheme = SCHEMES_DATA.find((s) => s.id === id);

  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  if (!scheme) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-4 max-w-md">
          <h2 className="text-xl font-bold text-slate-900">Scheme Not Found</h2>
          <p className="text-xs text-slate-500">The requested welfare scheme could not be located in our directory.</p>
          <Link to="/schemes" className="inline-block px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl">
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const saved = isSaved(scheme.id);
  const title = language === "hi" && scheme.nameHi ? scheme.nameHi : language === "mr" && scheme.nameMr ? scheme.nameMr : scheme.name;
  const desc = language === "hi" && scheme.descriptionHi ? scheme.descriptionHi : language === "mr" && scheme.descriptionMr ? scheme.descriptionMr : scheme.description;

  const toggleDocCheck = (doc: string) => {
    setCheckedDocs((prev) => ({ ...prev, [doc]: !prev[doc] }));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: scheme.name,
        text: scheme.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Top Header */}
      <div className="bg-slate-900 text-white pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-4">
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 text-xs font-extrabold uppercase tracking-wider bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
              {scheme.category}
            </span>
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{scheme.department}</span>
            </span>
            {scheme.launchDate && (
              <span className="px-3 py-1 text-xs text-amber-300 font-bold flex items-center gap-1.5 bg-amber-500/15 rounded-full border border-amber-500/30">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {t("launchedOn")}: {language === "hi" && scheme.launchDateHi ? scheme.launchDateHi : language === "mr" && scheme.launchDateMr ? scheme.launchDateMr : scheme.launchDate}
                </span>
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
            {desc}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <span>Proceed to Official Registration Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              className={`px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                saved
                  ? "bg-amber-500 text-slate-950 font-extrabold"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? "fill-slate-950" : ""}`} />
              <span>{saved ? "Saved in Bookmarks" : "Save Scheme"}</span>
            </button>

            <button
              onClick={handleShare}
              className="px-4 py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 transition"
            >
              <Share2 className="w-4 h-4 text-blue-400" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Benefit Highlight Box */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-white border border-blue-200 rounded-3xl p-6 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-blue-900 font-extrabold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Scheme Benefit Summary</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
            {scheme.benefits}
          </p>
        </div>

        {/* 2-Column Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Guidelines & Application Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Application Steps */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Step-by-Step Application Process</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Follow these standard operational steps to register for this benefit.
                </p>
              </div>

              <div className="space-y-4">
                {scheme.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpline & Support Contacts */}
            {scheme.helpline && (
              <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 shadow-xl flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold text-blue-400 flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4" />
                    <span>Official Helpline & Helpdesk</span>
                  </div>
                  <p className="text-lg font-black text-white">{scheme.helpline}</p>
                  <p className="text-xs text-slate-400">Toll-free government assistance channel for registration queries.</p>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Required Documents Checklist */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 sticky top-24">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>Required Documents Checklist</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Check off documents as you prepare your application folder.
                </p>
              </div>

              <div className="space-y-3">
                {scheme.requiredDocs.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc];
                  return (
                    <label
                      key={idx}
                      onClick={() => toggleDocCheck(doc)}
                      className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700 font-medium"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs leading-relaxed">{doc}</span>
                    </label>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  to="/eligibility"
                  className="block w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center transition"
                >
                  Verify My Full Profile Against This Scheme &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};
