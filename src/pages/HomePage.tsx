import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useSaved } from "../context/SavedContext";
import { SCHEMES_DATA } from "../data/schemesData";
import { Scheme, CategoryType } from "../types";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Tractor,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Users,
  Home as HomeIcon,
  Zap,
  Bookmark,
  ChevronRight,
  Calendar,
  ExternalLink
} from "lucide-react";

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const { isSaved, toggleSaveScheme } = useSaved();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const popularSchemes = SCHEMES_DATA.filter((s) => s.popular);

  const categories: { name: CategoryType; icon: React.ReactNode; desc: string; color: string }[] = [
    { name: "Housing", icon: <HomeIcon className="w-5 h-5" />, desc: "PMAY Urban & Rural subsidies", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
    { name: "Farmers & Agriculture", icon: <Tractor className="w-5 h-5" />, desc: "PM-KISAN, crop insurance & pensions", color: "bg-emerald-500/10 text-emerald-600 border-emerald-200" },
    { name: "Education & Youth", icon: <GraduationCap className="w-5 h-5" />, desc: "National Scholarships & Fee waivers", color: "bg-purple-500/10 text-purple-600 border-purple-200" },
    { name: "Business & Micro-Finance", icon: <Briefcase className="w-5 h-5" />, desc: "MUDRA loans, SVANidhi & Stand-Up India", color: "bg-amber-500/10 text-amber-600 border-amber-200" },
    { name: "Women & Child Care", icon: <Users className="w-5 h-5" />, desc: "Lakhpati Didi & Sukanya Samriddhi", color: "bg-pink-500/10 text-pink-600 border-pink-200" },
    { name: "Healthcare & Insurance", icon: <HeartPulse className="w-5 h-5" />, desc: "Ayushman Bharat cashless coverage", color: "bg-rose-500/10 text-rose-600 border-rose-200" },
    { name: "Employment & Skill", icon: <Sparkles className="w-5 h-5" />, desc: "PM Vishwakarma & e-Shram Card", color: "bg-indigo-500/10 text-indigo-600 border-indigo-200" },
    { name: "Senior Citizens & Pension", icon: <Zap className="w-5 h-5" />, desc: "Atal Pension Yojana & Farmers Pension", color: "bg-teal-500/10 text-teal-600 border-teal-200" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/schemes?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Central & State Welfare Finder</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Discover Government Schemes <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Tailored For You.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Find subsidies, financial grants, pensions, and scholarships in seconds. Input basic parameters to evaluate your eligibility instantly across central and state welfare programs.
              </p>

              {/* Direct Search Form */}
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2 max-w-2xl bg-slate-800/90 p-2 rounded-2xl border border-slate-700/80 shadow-2xl">
                <div className="relative flex-1 flex items-center pl-3">
                  <Search className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("searchPlaceholder")}
                    className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Action CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/eligibility"
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base rounded-xl transition shadow-xl shadow-blue-600/25 flex items-center gap-2 ring-2 ring-blue-400/30"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Start Eligibility Check &rarr;</span>
                </Link>

                <Link
                  to="/schemes"
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition flex items-center gap-2"
                >
                  <span>Explore Directory ({SCHEMES_DATA.length})</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Hero Floating Interactive Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Active Scheme Engine</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                    100% Free & Private
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-lg">🏠</div>
                    <div>
                      <h4 className="text-sm font-bold text-white">PMAY Urban Housing Subsidy</h4>
                      <p className="text-xs text-slate-400">Up to ₹2.5 Lakhs financial assistance for urban families.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-lg">🌾</div>
                    <div>
                      <h4 className="text-sm font-bold text-white">PM-KISAN Direct Support</h4>
                      <p className="text-xs text-slate-400">₹6,000 yearly directly transferred in 3 installments.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400 font-bold text-lg">🎓</div>
                    <div>
                      <h4 className="text-sm font-bold text-white">National Scholarship Portal</h4>
                      <p className="text-xs text-slate-400">Education scholarships for pre & post-matric students.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>✨ Instant Match Rule Evaluation</span>
                  <Link to="/eligibility" className="text-blue-400 font-bold hover:underline flex items-center gap-1">
                    <span>Try Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">14+</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Major Central Schemes</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">8</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Core Welfare Domains</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">₹0</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Fee To Find & Check</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-purple-600 tracking-tight">Instant</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Rule Engine Matching</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Section 1: Browse Domains */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-blue-600">Categories</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Explore Scheme Domains
              </h2>
            </div>
            <Link
              to="/schemes"
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/schemes?category=${encodeURIComponent(cat.name)}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.color} group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Browse Schemes</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Popular Central Schemes */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-blue-600">High Priority</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Featured Government Schemes
              </h2>
            </div>
            <Link
              to="/schemes"
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>Explore All {SCHEMES_DATA.length} Schemes</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSchemes.map((scheme) => {
              const saved = isSaved(scheme.id);
              const title = language === "hi" && scheme.nameHi ? scheme.nameHi : language === "mr" && scheme.nameMr ? scheme.nameMr : scheme.name;
              const desc = language === "hi" && scheme.descriptionHi ? scheme.descriptionHi : language === "mr" && scheme.descriptionMr ? scheme.descriptionMr : scheme.description;

              return (
                <div
                  key={scheme.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group"
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
                      <p className="text-xs font-medium text-slate-400 mt-1">
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
        </section>

        {/* Section 3: Direct Call-To-Action Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-800/50">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-radial pointer-events-none" />
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Personalized Matching</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Unsure which scheme applies to your family?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Click on our dedicated **Eligibility Check** tool to enter your age, income, occupation, and location. Our automated rule engine will evaluate and rank schemes tailored specifically to your profile.
            </p>

            <div className="pt-2">
              <Link
                to="/eligibility"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-slate-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-xl transition-transform hover:scale-105"
              >
                <span>Go To Eligibility Checker Page</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};
