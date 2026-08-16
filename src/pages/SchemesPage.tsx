import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useSaved } from "../context/SavedContext";
import { SCHEMES_DATA } from "../data/schemesData";
import { Scheme, CategoryType } from "../types";
import {
  Search,
  Filter,
  Bookmark,
  ExternalLink,
  ChevronRight,
  LayoutGrid,
  List,
  Building2,
  Calendar,
  PhoneCall,
  Sparkles,
  ArrowUpDown
} from "lucide-react";

export const SchemesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { isSaved, toggleSaveScheme } = useSaved();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = (searchParams.get("category") as CategoryType) || "All";
  const initialSearch = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState<CategoryType | "All">(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<"default" | "newest" | "oldest">("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories: (CategoryType | "All")[] = [
    "All",
    "Housing",
    "Farmers & Agriculture",
    "Education & Youth",
    "Business & Micro-Finance",
    "Women & Child Care",
    "Healthcare & Insurance",
    "Employment & Skill",
    "Senior Citizens & Pension"
  ];

  useEffect(() => {
    const cat = searchParams.get("category") as CategoryType;
    const q = searchParams.get("q");
    if (cat) setSelectedCategory(cat);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const filteredSchemes = SCHEMES_DATA.filter((scheme) => {
    // Category match
    if (selectedCategory !== "All" && scheme.category !== selectedCategory) {
      return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = scheme.name.toLowerCase().includes(q) || (scheme.nameHi && scheme.nameHi.includes(q)) || (scheme.nameMr && scheme.nameMr.includes(q));
      const matchDesc = scheme.description.toLowerCase().includes(q);
      const matchDept = scheme.department.toLowerCase().includes(q);
      const matchTags = scheme.tags.some((tag) => tag.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchDept && !matchTags) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === "newest") {
      return (b.launchYear || 0) - (a.launchYear || 0);
    }
    if (sortBy === "oldest") {
      return (a.launchYear || 0) - (b.launchYear || 0);
    }
    return 0;
  });

  const handleCategoryChange = (cat: CategoryType | "All") => {
    setSelectedCategory(cat);
    setSearchParams((prev) => {
      if (cat === "All") prev.delete("category");
      else prev.set("category", cat);
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header */}
      <div className="bg-slate-900 text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Central & State Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Welfare Scheme Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Browse through central government schemes, state subsidies, and social assistance programs across categories.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-lg space-y-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search schemes by name, keyword, or benefits..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort & Layout Controls */}
            <div className="flex items-center gap-3 self-end md:self-auto w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-2 rounded-2xl border border-slate-200 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-bold text-slate-600 hidden sm:inline">{t("sortBy")}:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="default">{t("sortDefault")}</option>
                  <option value="newest">{t("sortNewest")}</option>
                  <option value="oldest">{t("sortOldest")}</option>
                </select>
              </div>

              {/* Layout Toggle */}
              <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-xl transition ${viewMode === "grid" ? "bg-white text-blue-600 shadow-sm font-bold" : "text-slate-500 hover:text-slate-800"}`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-xl transition ${viewMode === "list" ? "bg-white text-blue-600 shadow-sm font-bold" : "text-slate-500 hover:text-slate-800"}`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Category Tabs Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-slate-100 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? t("all") : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Directory Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold">
            <span>Showing {filteredSchemes.length} schemes</span>
            <Link to="/eligibility" className="text-blue-600 hover:underline flex items-center gap-1 font-bold">
              <span>Run Automated Eligibility Filter</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {filteredSchemes.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSchemes.map((scheme) => {
                  const saved = isSaved(scheme.id);
                  const title = language === "hi" && scheme.nameHi ? scheme.nameHi : language === "mr" && scheme.nameMr ? scheme.nameMr : scheme.name;
                  const desc = language === "hi" && scheme.descriptionHi ? scheme.descriptionHi : language === "mr" && scheme.descriptionMr ? scheme.descriptionMr : scheme.description;

                  return (
                    <div
                      key={scheme.id}
                      className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                              {scheme.category}
                            </span>
                            {scheme.launchDate && (
                              <span className="px-2.5 py-1 text-[11px] font-bold bg-amber-50 text-amber-800 rounded-full border border-amber-200/80 flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-amber-600" />
                                <span>{language === "hi" && scheme.launchDateHi ? scheme.launchDateHi : language === "mr" && scheme.launchDateMr ? scheme.launchDateMr : scheme.launchDate}</span>
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => toggleSaveScheme(scheme.id)}
                            className={`p-2 rounded-xl transition ${
                              saved
                                ? "bg-amber-100 text-amber-700"
                                : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                            }`}
                            title={saved ? "Saved in bookmarks" : "Save scheme"}
                          >
                            <Bookmark className={`w-4 h-4 ${saved ? "fill-amber-500" : ""}`} />
                          </button>
                        </div>

                        <div>
                          <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-blue-600 transition">
                            {title}
                          </h3>
                          <p className="text-xs font-medium text-slate-400 mt-0.5">
                            {scheme.department}
                          </p>
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {desc}
                        </p>

                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1">
                          <span className="font-bold text-slate-800">Benefit Highlight:</span>
                          <p className="text-slate-600 font-medium">{scheme.benefits}</p>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-2 mt-4">
                        <Link
                          to={`/schemes/${scheme.id}`}
                          className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition"
                        >
                          {t("viewDetails")}
                        </Link>

                        <a
                          href={scheme.officialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1 shadow-sm"
                        >
                          <span>Apply</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredSchemes.map((scheme) => {
                  const saved = isSaved(scheme.id);
                  const title = language === "hi" && scheme.nameHi ? scheme.nameHi : language === "mr" && scheme.nameMr ? scheme.nameMr : scheme.name;
                  const desc = language === "hi" && scheme.descriptionHi ? scheme.descriptionHi : language === "mr" && scheme.descriptionMr ? scheme.descriptionMr : scheme.description;

                  return (
                    <div
                      key={scheme.id}
                      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1 max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                            {scheme.category}
                          </span>
                          {scheme.launchDate && (
                            <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-50 text-amber-800 rounded-full border border-amber-200 flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-amber-600" />
                              <span>{t("launchedOn")}: {language === "hi" && scheme.launchDateHi ? scheme.launchDateHi : language === "mr" && scheme.launchDateMr ? scheme.launchDateMr : scheme.launchDate}</span>
                            </span>
                          )}
                          <span className="text-xs text-slate-400 font-medium">{scheme.department}</span>
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-base">{title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{desc}</p>
                      </div>

                      <div className="flex items-center gap-2 self-end md:self-auto">
                        <button
                          onClick={() => toggleSaveScheme(scheme.id)}
                          className={`p-2.5 rounded-xl transition text-xs font-bold flex items-center gap-1 ${
                            saved ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${saved ? "fill-amber-500" : ""}`} />
                        </button>

                        <Link
                          to={`/schemes/${scheme.id}`}
                          className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition"
                        >
                          {t("viewDetails")}
                        </Link>

                        <a
                          href={scheme.officialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1 shadow-sm"
                        >
                          <span>Apply ↗</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl text-slate-500 space-y-2">
              <p className="font-bold text-base text-slate-800">No schemes found matching your search query.</p>
              <p className="text-xs text-slate-500">Try adjusting the search query or category filter.</p>
            </div>
          )}
        </div>

      </main>

    </div>
  );
};
