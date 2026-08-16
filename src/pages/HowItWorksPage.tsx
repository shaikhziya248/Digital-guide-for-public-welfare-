import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  FileCheck,
  CreditCard,
  Building,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export const HowItWorksPage: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const steps = [
    {
      num: "01",
      title: "Provide Demographic & Financial Attributes",
      desc: "Fill in key parameters such as age bracket, annual household income, occupation, and state location on the Eligibility Checker.",
      icon: <FileCheck className="w-6 h-6 text-blue-600" />
    },
    {
      num: "02",
      title: "Algorithmic Rule Evaluation",
      desc: "Our client-side matching rule engine compares your profile against scheme specifications (income caps, target occupations, area scopes) to calculate fit confidence %.",
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />
    },
    {
      num: "03",
      title: "Document Preparation & DBT Bank Seeding",
      desc: "Gather required identity credentials (Aadhaar, Income Certificate, Property Documents) and ensure your bank account is linked for Direct Benefit Transfer (DBT).",
      icon: <CreditCard className="w-6 h-6 text-emerald-600" />
    },
    {
      num: "04",
      title: "Official Government Portal Direct Registration",
      desc: "Click directly to official central or state portals (e.g. myScheme, PMAY, PM-KISAN, NSP) to complete official registration without middleman fees.",
      icon: <Building className="w-6 h-6 text-amber-600" />
    }
  ];

  const faqs = [
    {
      q: "Are my personal details stored or sent to any third-party server?",
      a: "No. The Digital Welfare Guide runs 100% locally on your browser (client-side). Your input values (age, income, occupation) are evaluated instantly in memory and are never uploaded, stored, or sold."
    },
    {
      q: "What is Direct Benefit Transfer (DBT) and why is Aadhaar seeding necessary?",
      a: "Direct Benefit Transfer (DBT) is the official mechanism where government subsidies and payments are credited directly into your Aadhaar-linked bank account without middleman intervention. Ensuring your bank account is Aadhaar-seeded guarantees payment clearance."
    },
    {
      q: "How do I get an Income Certificate?",
      a: "An Income Certificate is issued by your State Revenue Department, District Magistrate, or Tehsildar office. Most state e-District portals allow online application using salary slips, ITR, or self-declaration."
    },
    {
      q: "Is there any charge to use this website?",
      a: "No. The Digital Welfare Guide is a free, public discovery utility. Furthermore, government scheme applications on official portals do not require paying any private broker."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Top Header */}
      <div className="bg-slate-900 text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Operational Guide & Process</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            How The Welfare Engine Works
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Understand how our dynamic rule evaluation system connects you with government welfare opportunities, document preparation tips, and official registration channels.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-16">
        
        {/* Step-by-Step Flow */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-black text-slate-900">4-Step Discovery Flow</h2>
            <p className="text-xs text-slate-500 mt-1">From initial profile entry to official registration.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-black text-lg text-slate-900 shadow-sm flex-shrink-0">
                  {step.icon}
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Step {step.num}</div>
                  <h3 className="text-base font-extrabold text-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-center">
            <Link
              to="/eligibility"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-2xl transition shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <span>Test My Eligibility Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-1">Common queries regarding public scheme eligibility and documentation.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left bg-slate-50 hover:bg-slate-100/80 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </main>

    </div>
  );
};
