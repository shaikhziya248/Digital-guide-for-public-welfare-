import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "../types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    appTitle: "Digital Welfare Guide",
    tagline: "India's Unified Government Scheme Discovery & Eligibility Engine",
    home: "Home",
    eligibilityCheck: "Eligibility Checker",
    schemesDirectory: "Schemes Directory",
    howItWorks: "How It Works",
    savedSchemes: "Saved Schemes",
    searchPlaceholder: "Search schemes by keyword e.g. housing, loan, farmer...",
    checkEligibilityBtn: "Check My Eligibility",
    findMatchingSchemes: "Evaluate Eligibility",
    resetForm: "Reset Profile",
    popularSchemes: "Popular Central Schemes",
    browseByCategory: "Explore Scheme Domains",
    all: "All Domains",
    viewDetails: "View Scheme Details",
    applyNow: "Official Portal",
    matchScore: "Fit Confidence",
    eligible: "Eligible",
    reviewRequired: "Criteria Gap",
    saveScheme: "Bookmark",
    saved: "Saved",
    requiredDocs: "Required Documents",
    applicationSteps: "Step-by-Step Application Guide",
    officialHelpline: "Official Helpline",
    launchDate: "Launch Date",
    launchedOn: "Launched on",
    launchedYear: "Launched in",
    sortBy: "Sort By",
    sortNewest: "Newest Schemes First",
    sortOldest: "Oldest Schemes First",
    sortDefault: "Default Ranking",
    stateSelect: "State / UT",
    occupationSelect: "Occupation / Activity",
    ageLabel: "Age (Years)",
    incomeLabel: "Annual Household Income (₹)",
    genderLabel: "Gender",
    areaLabel: "Area Type",
    urban: "Urban",
    rural: "Rural",
    disclaimerText: "Heuristic evaluation tool for guidance. Final verification occurs on official government portals."
  },
  hi: {
    appTitle: "डिजिटल कल्याण मार्गदर्शिका",
    tagline: "भारत की एकीकृत सरकारी योजना खोज और पात्रता प्रणाली",
    home: "मुख्य पृष्ठ",
    eligibilityCheck: "पात्रता जांच",
    schemesDirectory: "योजना निर्देशिका",
    howItWorks: "यह कैसे काम करता है",
    savedSchemes: "सहेजी गई योजनाएं",
    searchPlaceholder: "कीवर्ड से योजनाएं खोजें जैसे आवास, ऋण, किसान...",
    checkEligibilityBtn: "मेरी पात्रता जांचें",
    findMatchingSchemes: "पात्रता मूल्यांकन करें",
    resetForm: "फ़ॉर्म रीसेट करें",
    popularSchemes: "लोकप्रिय केंद्रीय योजनाएं",
    browseByCategory: "क्षेत्र के अनुसार योजनाएं",
    all: "सभी क्षेत्र",
    viewDetails: "विवरण देखें",
    applyNow: "आधिकारिक पोर्टल",
    matchScore: "पात्रता स्कोर",
    eligible: "पात्र",
    reviewRequired: "समीक्षा आवश्यक",
    saveScheme: "सहेजें",
    saved: "सहेजा गया",
    requiredDocs: "आवश्यक दस्तावेज़",
    applicationSteps: "आवेदन प्रक्रिया चरण-दर-चरण",
    officialHelpline: "आधिकारिक हेल्पलाइन",
    launchDate: "लॉन्च तिथि",
    launchedOn: "लॉन्च तिथि",
    launchedYear: "लॉन्च वर्ष",
    sortBy: "क्रमबद्ध करें",
    sortNewest: "नवीनतम योजनाएं पहले",
    sortOldest: "पुरानी योजनाएं पहले",
    sortDefault: "डिफ़ॉल्ट रैंकिंग",
    stateSelect: "राज्य / केंद्र शासित प्रदेश",
    occupationSelect: "व्यवसाय / पेशा",
    ageLabel: "आयु (वर्ष)",
    incomeLabel: "वार्षिक पारिवारिक आय (₹)",
    genderLabel: "लिंग",
    areaLabel: "क्षेत्र प्रकार",
    urban: "शहरी",
    rural: "ग्रामीण",
    disclaimerText: "यह उपकरण केवल मार्गदर्शन के लिए है। अंतिम सत्यापन आधिकारिक सरकारी पोर्टलों पर होता है।"
  },
  mr: {
    appTitle: "डिजिटल वेल्फेअर मार्गदर्शक",
    tagline: "शासकीय योजना शोध आणि पात्रता तपासणी पोर्टल",
    home: "मुख्य पृष्ठ",
    eligibilityCheck: "पात्रता तपासणी",
    schemesDirectory: "योजनांची यादी",
    howItWorks: "योजना कशा कार्य करतात",
    savedSchemes: "जतन केलेल्या योजना",
    searchPlaceholder: "योजना शोधा उदा. घरकुल, शेतकरी, कर्ज, शिष्यवृत्ती...",
    checkEligibilityBtn: "पात्रता तपासा",
    findMatchingSchemes: "पात्रता मूल्यांकन करा",
    resetForm: "माहिती रीसेट करा",
    popularSchemes: "प्रमुख केंद्र व राज्य शासन योजना",
    browseByCategory: "क्षेत्रानुसार योजना",
    all: "सर्व क्षेत्रे",
    viewDetails: "सविस्तर माहिती",
    applyNow: "अधिकृत पोर्टल",
    matchScore: "पात्रता टक्केवारी",
    eligible: "पात्र",
    reviewRequired: "अटी तपासणे गरजेचे",
    saveScheme: "बुकमार्क करा",
    saved: "जतन केले",
    requiredDocs: "आवश्यक कागदपत्रे",
    applicationSteps: "अर्ज करण्याची पायरी-पायरी प्रक्रिया",
    officialHelpline: "अधिकृत मदत क्रमांक",
    launchDate: "सुरुवात दिनांक",
    launchedOn: "सुरुवात दिनांक",
    launchedYear: "सुरुवात वर्ष",
    sortBy: "क्रमवारी",
    sortNewest: "नवीन योजना आधी",
    sortOldest: "जुनी योजना आधी",
    sortDefault: "मूळ क्रमवारी",
    stateSelect: "राज्य / केंद्रशासित प्रदेश",
    occupationSelect: "व्यवसाय / काम",
    ageLabel: "वय (वर्षे)",
    incomeLabel: "वार्षिक कौटुंबिक उत्पन्न (₹)",
    genderLabel: "लिंग",
    areaLabel: "भाग",
    urban: "शहरी",
    rural: "ग्रामीण",
    disclaimerText: "हे टूल केवळ प्राथमिक मार्गदर्शनासाठी आहे. अंतिम पडताळणी अधिकृत शासकीय संकेतस्थळावर केली जाते."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem("dwg_lang") as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("dwg_lang", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
