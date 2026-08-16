import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useSaved } from "../context/SavedContext";
import { SCHEMES_DATA } from "../data/schemesData";
import { ApplicationStatus } from "../types";
import {
  Bookmark,
  ExternalLink,
  Trash2,
  CheckCircle2,
  Clock,
  CheckCheck,
  Calendar,
  FileEdit,
  ArrowRight
} from "lucide-react";

export const SavedPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { savedItems, toggleSaveScheme, updateStatus, updateNotes } = useSaved();

  const savedSchemesWithData = savedItems.map((item) => {
    const scheme = SCHEMES_DATA.find((s) => s.id === item.schemeId);
    return {
      ...item,
      scheme,
    };
  }).filter((item) => item.scheme !== undefined);

  const statusColors: Record<ApplicationStatus, string> = {
    Saved: "bg-amber-100 text-amber-800 border-amber-300",
    Applied: "bg-blue-100 text-blue-800 border-blue-300",
    "In Review": "bg-purple-100 text-purple-800 border-purple-300",
    Approved: "bg-emerald-100 text-emerald-800 border-emerald-300",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header */}
      <div className="bg-slate-900 text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Bookmark className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Personal Bookmarks & Tracker</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Saved Schemes & Progress
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Manage bookmarked schemes, update your application status, and keep personal notes for submission deadlines.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
        
        {savedSchemesWithData.length > 0 ? (
          <div className="space-y-6">
            <div className="text-xs font-bold text-slate-500 px-1">
              Showing {savedSchemesWithData.length} saved scheme items
            </div>

            <div className="grid grid-cols-1 gap-6">
              {savedSchemesWithData.map(({ schemeId, savedAt, status, notes, scheme }) => {
                if (!scheme) return null;

                const title = language === "hi" && scheme.nameHi ? scheme.nameHi : language === "mr" && scheme.nameMr ? scheme.nameMr : scheme.name;
                const desc = language === "hi" && scheme.descriptionHi ? scheme.descriptionHi : language === "mr" && scheme.descriptionMr ? scheme.descriptionMr : scheme.description;

                return (
                  <div
                    key={schemeId}
                    className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                          {scheme.category}
                        </span>
                        {scheme.launchDate && (
                          <span className="px-2.5 py-1 text-xs font-bold bg-amber-50 text-amber-800 rounded-full border border-amber-200 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-amber-600" />
                            <span>{t("launchedOn")}: {language === "hi" && scheme.launchDateHi ? scheme.launchDateHi : language === "mr" && scheme.launchDateMr ? scheme.launchDateMr : scheme.launchDate}</span>
                          </span>
                        )}
                        <span className="text-xs text-slate-400 font-medium">{scheme.department}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Status selector */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-500">Status:</span>
                          <select
                            value={status}
                            onChange={(e) => updateStatus(schemeId, e.target.value as ApplicationStatus)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-xl border focus:outline-none cursor-pointer ${statusColors[status]}`}
                          >
                            <option value="Saved">Saved</option>
                            <option value="Applied">Applied</option>
                            <option value="In Review">In Review</option>
                            <option value="Approved">Approved</option>
                          </select>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => toggleSaveScheme(schemeId)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
                    </div>

                    {/* Benefits highlight */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">Benefit Highlight:</span>
                      <p className="text-slate-600 mt-0.5">{scheme.benefits}</p>
                    </div>

                    {/* Notes Field */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <FileEdit className="w-3.5 h-3.5 text-blue-600" />
                        <span>Personal Application Notes / Reference Number:</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={notes || ""}
                        onBlur={(e) => updateNotes(schemeId, e.target.value)}
                        placeholder="e.g. Applied on 12th Aug, Ref UIN: 849302"
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                      />
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <Link
                        to={`/schemes/${scheme.id}`}
                        className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition text-center"
                      >
                        View Full Scheme Guidelines &rarr;
                      </Link>

                      <a
                        href={scheme.officialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <span>Proceed to Official Registration</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center mx-auto text-amber-500">
              <Bookmark className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900">No Saved Schemes Yet</h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore schemes in our directory or run an eligibility check, then click the bookmark button to save schemes here.
              </p>
            </div>
            <div>
              <Link
                to="/eligibility"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                <span>Run Eligibility Check</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
