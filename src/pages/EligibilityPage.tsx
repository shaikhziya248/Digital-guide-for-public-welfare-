import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useSaved } from "../context/SavedContext";
import { evaluateProfile } from "../data/schemesData";
import { UserProfile, EvaluationResult } from "../types";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Bookmark,
  ExternalLink,
  ChevronRight,
  FileText,
  Building2,
  Calendar,
  Info
} from "lucide-react";

export const EligibilityPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { isSaved, toggleSaveScheme } = useSaved();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<UserProfile>({
    age: "",
    income: "",
    gender: "",
    occupation: "",
    state: "",
    area: "",
    casteCategory: "General",
    differentlyAbled: false,
    minority: false,
    extraInfo: "",
  });

  const [evaluatedResults, setEvaluatedResults] = useState<EvaluationResult[] | null>(null);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"All" | "Eligible" | "Review">("All");

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.age === "" || profile.income === "" || !profile.occupation) {
      alert("Please fill in basic parameters: Age, Household Income, and Occupation.");
      return;
    }

    const results = evaluateProfile(profile);
    setEvaluatedResults(results);
    setHasEvaluated(true);

    // Scroll smoothly to results
    setTimeout(() => {
      document.getElementById("eligibility-results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReset = () => {
    setProfile({
      age: "",
      income: "",
      gender: "",
      occupation: "",
      state: "",
      area: "",
      casteCategory: "General",
      differentlyAbled: false,
      minority: false,
      extraInfo: "",
    });
    setEvaluatedResults(null);
    setHasEvaluated(false);
  };

  const loadSampleProfile = (sampleType: "farmer" | "student" | "business" | "woman") => {
    if (sampleType === "farmer") {
      setProfile({
        age: 34,
        income: 180000,
        gender: "Male",
        occupation: "Farmer",
        state: "Maharashtra",
        area: "Rural",
        casteCategory: "OBC",
        differentlyAbled: false,
        minority: false,
        extraInfo: "landholding farmer agricultural loan",
      });
    } else if (sampleType === "student") {
      setProfile({
        age: 20,
        income: 220000,
        gender: "Female",
        occupation: "Student",
        state: "Delhi",
        area: "Urban",
        casteCategory: "General",
        differentlyAbled: false,
        minority: false,
        extraInfo: "undergraduate college scholarship",
      });
    } else if (sampleType === "business") {
      setProfile({
        age: 29,
        income: 250000,
        gender: "Male",
        occupation: "Self-employed / Business",
        state: "Gujarat",
        area: "Urban",
        casteCategory: "General",
        differentlyAbled: false,
        minority: false,
        extraInfo: "small vendor shop micro enterprise",
      });
    } else if (sampleType === "woman") {
      setProfile({
        age: 38,
        income: 120000,
        gender: "Female",
        occupation: "Homemaker",
        state: "Uttar Pradesh",
        area: "Rural",
        casteCategory: "SC",
        differentlyAbled: false,
        minority: false,
        extraInfo: "self help group shg tailoring handicraft",
      });
    }
  };

  const filteredResults = evaluatedResults?.filter((item) => {
    if (activeFilter === "Eligible") return item.isEligible;
    if (activeFilter === "Review") return !item.isEligible;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Dedicated Eligibility Checker</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Personalized Scheme Eligibility Evaluation
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Fill in your baseline household metrics below. Our engine checks your profile against criteria limits (income caps, occupation scopes, age brackets) to output personalized recommendations.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Sample Profile Quick Select */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Quick Test Sample Profiles:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => loadSampleProfile("farmer")}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200 transition"
            >
              🌾 Farmer (₹1.8L)
            </button>
            <button
              onClick={() => loadSampleProfile("student")}
              className="px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 font-semibold border border-purple-200 transition"
            >
              🎓 Student (₹2.2L)
            </button>
            <button
              onClick={() => loadSampleProfile("business")}
              className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold border border-amber-200 transition"
            >
              💼 Small Business (₹2.5L)
            </button>
            <button
              onClick={() => loadSampleProfile("woman")}
              className="px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-800 font-semibold border border-pink-200 transition"
            >
              👩 SHG Woman (₹1.2L)
            </button>
          </div>
        </div>

        {/* Input Form Card */}
        <form onSubmit={handleFormSubmit} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-8">
          
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <span>Step 1: Enter Baseline Metrics</span>
            </h2>
            <span className="text-xs text-slate-400 font-medium">* Required fields</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Age */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>{t("ageLabel")}</span>
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                min="0"
                max="120"
                value={profile.age}
                onChange={(e) => handleInputChange("age", e.target.value ? parseInt(e.target.value) : "")}
                placeholder="e.g. 28"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                required
              />
            </div>

            {/* Income */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>{t("incomeLabel")}</span>
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                min="0"
                step="10000"
                value={profile.income}
                onChange={(e) => handleInputChange("income", e.target.value ? parseInt(e.target.value) : "")}
                placeholder="e.g. 250000"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                required
              />
            </div>

            {/* Occupation */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>{t("occupationSelect")}</span>
                <span className="text-rose-500">*</span>
              </label>
              <select
                value={profile.occupation}
                onChange={(e) => handleInputChange("occupation", e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                required
              >
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Farmer">Farmer</option>
                <option value="Self-employed / Business">Self-employed / Business Owner</option>
                <option value="Daily wage / Labour">Daily Wage Labour / Worker</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Homemaker">Homemaker</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">{t("genderLabel")}</label>
              <select
                value={profile.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              >
                <option value="">Prefer Not To Say / All</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Area Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">{t("areaLabel")}</label>
              <select
                value={profile.area}
                onChange={(e) => handleInputChange("area", e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              >
                <option value="">Select Area Type</option>
                <option value="Urban">Urban (City / Town)</option>
                <option value="Rural">Rural (Village)</option>
              </select>
            </div>

            {/* State */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">{t("stateSelect")}</label>
              <select
                value={profile.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              >
                <option value="">Select State / UT</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Other">Other State</option>
              </select>
            </div>

            {/* Extra Info / Keywords */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Additional Profile Specifics (Optional)</label>
              <input
                type="text"
                value={profile.extraInfo}
                onChange={(e) => handleInputChange("extraInfo", e.target.value)}
                placeholder="e.g. landholder farmer, street vendor, SHG member, handicraft artisan"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
            </div>

          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>{t("findMatchingSchemes")}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t("resetForm")}</span>
            </button>
          </div>

          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-800 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>
              {t("disclaimerText")}
            </p>
          </div>

        </form>

        {/* Evaluation Results Section */}
        {hasEvaluated && evaluatedResults && (
          <div id="eligibility-results" className="mt-12 space-y-8 animate-fadeIn">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-slate-800">
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-blue-400">Step 2: Analysis Completed</div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
                  Evaluated {evaluatedResults.length} Welfare Schemes
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Found <strong className="text-emerald-400 font-bold">{evaluatedResults.filter(r => r.isEligible).length} schemes</strong> where your parameters match eligible criteria limits.
                </p>
              </div>

              {/* Result Filter Tabs */}
              <div className="flex bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs font-bold">
                <button
                  onClick={() => setActiveFilter("All")}
                  className={`px-3 py-1.5 rounded-lg transition ${activeFilter === "All" ? "bg-blue-600 text-white shadow" : "text-slate-300 hover:text-white"}`}
                >
                  All ({evaluatedResults.length})
                </button>
                <button
                  onClick={() => setActiveFilter("Eligible")}
                  className={`px-3 py-1.5 rounded-lg transition ${activeFilter === "Eligible" ? "bg-emerald-600 text-white shadow" : "text-slate-300 hover:text-white"}`}
                >
                  Matched ({evaluatedResults.filter(r => r.isEligible).length})
                </button>
                <button
                  onClick={() => setActiveFilter("Review")}
                  className={`px-3 py-1.5 rounded-lg transition ${activeFilter === "Review" ? "bg-amber-600 text-white shadow" : "text-slate-300 hover:text-white"}`}
                >
                  Gaps ({evaluatedResults.filter(r => !r.isEligible).length})
                </button>
              </div>
            </div>

            {/* Scheme Cards List */}
            <div className="space-y-6">
              {filteredResults && filteredResults.length > 0 ? (
                filteredResults.map((item) => {
                  const s = item.scheme;
                  const saved = isSaved(s.id);
                  const title = language === "hi" && s.nameHi ? s.nameHi : language === "mr" && s.nameMr ? s.nameMr : s.name;
                  const desc = language === "hi" && s.descriptionHi ? s.descriptionHi : language === "mr" && s.descriptionMr ? s.descriptionMr : s.description;

                  return (
                    <div
                      key={s.id}
                      className={`bg-white border rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-6 relative ${
                        item.isEligible ? "border-emerald-300/80 ring-1 ring-emerald-200" : "border-slate-200"
                      }`}
                    >
                      {/* Top Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                            {s.category}
                          </span>
                          {s.launchDate && (
                            <span className="px-2.5 py-1 text-xs font-bold bg-amber-50 text-amber-800 rounded-full border border-amber-200 flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-amber-600" />
                              <span>{t("launchedOn")}: {language === "hi" && s.launchDateHi ? s.launchDateHi : language === "mr" && s.launchDateMr ? s.launchDateMr : s.launchDate}</span>
                            </span>
                          )}
                          {item.isEligible ? (
                            <span className="px-3 py-1 text-xs font-extrabold bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1 border border-emerald-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>High Fit Match ({item.matchScore}%)</span>
                            </span>
                          ) : (
                            <span className="px-3 py-1 text-xs font-bold bg-amber-100 text-amber-800 rounded-full flex items-center gap-1 border border-amber-300">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                              <span>Criteria Gap ({item.matchScore}%)</span>
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => toggleSaveScheme(s.id)}
                          className={`self-start sm:self-auto px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                            saved
                              ? "bg-amber-100 text-amber-800 border border-amber-300"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-amber-600" : ""}`} />
                          <span>{saved ? t("saved") : t("saveScheme")}</span>
                        </button>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
                        <p className="text-xs font-medium text-slate-400 mt-0.5">{s.department}</p>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
                      </div>

                      {/* Benefits & Reasons Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        
                        {/* Matched reasons */}
                        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                          <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Matched Qualifications:</span>
                          </span>
                          <ul className="space-y-1 text-emerald-800 list-disc list-inside">
                            {item.reasons.length > 0 ? (
                              item.reasons.map((r, idx) => <li key={idx}>{r}</li>)
                            ) : (
                              <li>General public entitlement scheme.</li>
                            )}
                          </ul>
                        </div>

                        {/* Missing criteria or gap info */}
                        {item.missingCriteria.length > 0 ? (
                          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
                            <span className="font-bold text-amber-900 flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4 text-amber-600" />
                              <span>Parameters To Verify:</span>
                            </span>
                            <ul className="space-y-1 text-amber-800 list-disc list-inside">
                              {item.missingCriteria.map((m, idx) => (
                                <li key={idx}>{m}</li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                            <span className="font-bold text-blue-900 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-blue-600" />
                              <span>Key Benefit:</span>
                            </span>
                            <p className="text-blue-800 font-medium">{s.benefits}</p>
                          </div>
                        )}

                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <Link
                          to={`/schemes/${s.id}`}
                          className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition text-center"
                        >
                          View Full Guidelines & Required Documents &rarr;
                        </Link>

                        <a
                          href={s.officialUrl}
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
                })
              ) : (
                <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl text-slate-500 space-y-3">
                  <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-semibold">No scheme results match this filter view.</p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
