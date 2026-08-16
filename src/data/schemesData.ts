import { Scheme, UserProfile, EvaluationResult } from "../types";

export const SCHEMES_DATA: Scheme[] = [
  {
    id: "pmay-u",
    name: "Pradhan Mantri Awas Yojana - Urban (PMAY-U 2.0)",
    nameHi: "प्रधानमंत्री आवास योजना - शहरी (PMAY-U 2.0)",
    nameMr: "प्रधानमंत्री आवास योजना - शहरी",
    category: "Housing",
    department: "Ministry of Housing and Urban Affairs",
    description: "Interest subsidy and financial assistance for urban families to build, purchase, or upgrade affordable houses.",
    descriptionHi: "शहरी परिवारों को किफायती घर बनाने, खरीदने या अपग्रेड करने के लिए ब्याज सब्सिडी और वित्तीय सहायता।",
    descriptionMr: "शहरी कुटुंबांसाठी परवडणारी घरे बांधण्यासाठी, खरेदी करण्यासाठी किंवा सुधारण्यासाठी व्याज अनुदान आणि आर्थिक मदत.",
    benefits: "Subsidy up to ₹2.5 Lakhs on home loans for EWS/LIG families, plus interest subvention for MIG families.",
    minAge: 18,
    maxIncome: 900000,
    allowedAreas: ["Urban"],
    allowedOccupations: ["All"],
    allowedGender: ["All"],
    steps: [
      "Check eligibility under EWS (Income < ₹3L), LIG (₹3L - ₹6L) or MIG (₹6L - ₹9L).",
      "Ensure applicant or immediate family does not own a pucca house in India.",
      "Submit Aadhaar, Income certificate, and land/house property papers on PMAY Urban portal.",
      "Track application status using the generated UIN on state housing portal."
    ],
    requiredDocs: [
      "Aadhaar Card of all family members",
      "Income Certificate / ITR / Salary Slip",
      "Property purchase document or land title",
      "Bank Account details linked with Aadhaar (DBT enabled)",
      "Affidavit of not owning a pucca house"
    ],
    officialUrl: "https://pmay-urban.gov.in/",
    helpline: "1800-11-3377 / 1800-11-3388",
    launchDate: "25 June 2015",
    launchDateHi: "25 जून 2015",
    launchDateMr: "२५ जून २०१५",
    launchYear: 2015,
    tags: ["Housing", "Urban", "Subsidy", "PMAY", "Interest Subvention"],
    popular: true
  },
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    nameHi: "पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)",
    nameMr: "पीएम-किसान (प्रधानमंत्री किसान सन्मान निधी)",
    category: "Farmers & Agriculture",
    department: "Ministry of Agriculture and Farmers Welfare",
    description: "Direct income support of ₹6,000 per year in three equal installments of ₹2,000 directly to landholding farmers' bank accounts.",
    descriptionHi: "भूमिधारक किसानों के बैंक खातों में ₹2,000 की तीन समान किस्तों में प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।",
    descriptionMr: "जमीनधारक शेतकऱ्यांच्या बँक खात्यात दरवर्षी ₹६,००० रुपयांची थेट आर्थिक मदत.",
    benefits: "Direct Benefit Transfer (DBT) of ₹6,000 per year directly to bank account.",
    minAge: 18,
    allowedOccupations: ["Farmer"],
    allowedGender: ["All"],
    steps: [
      "Verify landholding records in state land registry (Khata/Khasra).",
      "Complete e-KYC on the PM-KISAN portal or via biometric CSC.",
      "Link Aadhaar with active bank account for DBT clearance.",
      "Check name in beneficiary list on pmkisan.gov.in."
    ],
    requiredDocs: [
      "Landholding Ownership Papers (7/12, Khatauni)",
      "Aadhaar Card",
      "Aadhaar-seeded Bank Account Passbook",
      "Active Mobile Number linked with Aadhaar"
    ],
    officialUrl: "https://pmkisan.gov.in/",
    helpline: "155261 / 011-24300606",
    launchDate: "24 February 2019",
    launchDateHi: "24 फरवरी 2019",
    launchDateMr: "२४ फेब्रुवारी २०१९",
    launchYear: 2019,
    tags: ["Farmer", "DBT", "Income Support", "Agriculture"],
    popular: true
  },
  {
    id: "pmkmy",
    name: "PM Kisan Maandhan Yojana (PM-KMY)",
    nameHi: "प्रधानमंत्री किसान मानधन योजना",
    nameMr: "प्रधानमंत्री किसान मानधन योजना",
    category: "Senior Citizens & Pension",
    department: "Ministry of Agriculture & LIC India",
    description: "Voluntary pension scheme for small and marginal farmers guaranteeing an assured monthly pension of ₹3,000 upon reaching age 60.",
    descriptionHi: "छोटे और सीमांत किसानों के लिए ऐच्छिक पेंशन योजना जो 60 वर्ष की आयु के बाद ₹3,000 प्रतिमाह सुनिश्चित पेंशन देती है।",
    descriptionMr: "६० वर्षे पूर्ण झाल्यावर दरमहा ₹३,००० निश्चित पेन्शन देणारी योजना.",
    benefits: "Assured minimum monthly pension of ₹3,000 after 60 years of age.",
    minAge: 18,
    maxAge: 40,
    allowedOccupations: ["Farmer"],
    maxIncome: 300000,
    allowedGender: ["All"],
    steps: [
      "Ensure age is between 18 and 40 years.",
      "Visit nearest Common Service Centre (CSC) with Aadhaar and Bank Passbook.",
      "Monthly contribution ranges from ₹55 to ₹200 depending on entry age (matched 1:1 by Central Govt).",
      "Obtain Pension Card with auto-debit consent from bank."
    ],
    requiredDocs: [
      "Aadhaar Card",
      "Savings Bank Account Passbook / IFSC Code",
      "Cultivable Land Record Document (< 2 Hectares)"
    ],
    officialUrl: "https://maandhan.in/",
    helpline: "1800-267-6888",
    launchDate: "12 September 2019",
    launchDateHi: "12 सितंबर 2019",
    launchDateMr: "१२ सप्टेंबर २०१९",
    launchYear: 2019,
    tags: ["Pension", "Farmer", "Senior Citizens", "Social Security"]
  },
  {
    id: "pmmy-mudra",
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (PMMY)",
    nameMr: "प्रधानमंत्री मुद्रा योजना",
    category: "Business & Micro-Finance",
    department: "Department of Financial Services / MUDRA",
    description: "Collateral-free micro loans up to ₹20 Lakhs (Shishu up to ₹50K, Kishor up to ₹5L, Tarun up to ₹10L, Tarun Plus up to ₹20L) for non-corporate micro enterprises.",
    descriptionHi: "गैर-कॉर्पोरेट सूक्ष्म उद्यमों के लिए ₹20 लाख तक के बिना किसी गारंटी के सूक्ष्म ऋण।",
    descriptionMr: "बिना तारण लहान आणि सूक्ष्म व्यवसायांसाठी ₹२० लाखांपर्यंत कर्ज.",
    benefits: "Collateral-free institutional bank loans with low interest rates and no processing fee for Shishu category.",
    minAge: 18,
    maxAge: 65,
    allowedOccupations: ["Self-employed / Business", "Daily wage / Labour", "Unemployed", "Homemaker", "Other"],
    allowedGender: ["All"],
    steps: [
      "Prepare a concise business plan or expansion requirement note.",
      "Choose category: Shishu (Up to ₹50,000), Kishor (₹50,000 to ₹5 Lakhs), or Tarun (₹5 Lakhs to ₹20 Lakhs).",
      "Approach any commercial bank, RRB, MFI, or apply online via UdyamiMitra portal.",
      "Submit identity, address, and quotation for machinery/goods to be purchased."
    ],
    requiredDocs: [
      "Identity Proof (Aadhaar / Voter ID / PAN)",
      "Address Proof (Electricity bill / Ration card)",
      "Business License / Udyam Registration Certificate",
      "Quotations of items/machinery to be bought",
      "Bank Statements for past 6 months (if existing business)"
    ],
    officialUrl: "https://www.mudra.org.in/",
    helpline: "1800-180-1111 / 1800-11-0001",
    launchDate: "8 April 2015",
    launchDateHi: "8 अप्रैल 2015",
    launchDateMr: "८ एप्रिल २०१५",
    launchYear: 2015,
    tags: ["Business", "Micro-Loan", "Collateral Free", "Startup", "MUDRA"],
    popular: true
  },
  {
    id: "nsp-scholarship",
    name: "National Scholarship Portal (NSP Post-Matric & Central Sector)",
    nameHi: "राष्ट्रीय छात्रवृत्ति पोर्टल (एनएसपी पोस्ट-मैट्रिक)",
    nameMr: "नॅशनल स्कॉलरशिप पोर्टल",
    category: "Education & Youth",
    department: "Ministry of Minority Affairs / Ministry of Education",
    description: "Unified scholarship portal offering financial support for school, college, and university students based on merit and income.",
    descriptionHi: "मेधावी और ज़रूरतमंद छात्रों के लिए एकीकृत छात्रवृत्ति पोर्टल जो स्कूल और कॉलेज शुल्क में सहायता प्रदान करता है।",
    descriptionMr: "शालेय आणि महाविद्यालयीन विद्यार्थ्यांसाठी शिष्यवृत्ती योजना.",
    benefits: "Direct financial grant of ₹10,000 to ₹50,000 per year directly to student's bank account for tuition & maintenance.",
    minAge: 14,
    maxAge: 30,
    allowedOccupations: ["Student"],
    maxIncome: 800000,
    allowedGender: ["All"],
    steps: [
      "Register as a new student on scholarships.gov.in using Aadhaar.",
      "Select scheme according to category (Pre-Matric, Post-Matric, Merit-cum-Means, MCM).",
      "Upload previous academic mark sheets and income certificate.",
      "Submit application for verification by Institute Nodal Officer (INO)."
    ],
    requiredDocs: [
      "Student Aadhaar Card",
      "Previous Academic Mark Sheet / Report Card",
      "Family Income Certificate (issued by competent authority)",
      "Institute Admission Fee Receipt & Bonafide Student Certificate",
      "Bank Account details in student's name"
    ],
    officialUrl: "https://scholarships.gov.in/",
    helpline: "0120-6619540",
    launchDate: "1 July 2015",
    launchDateHi: "1 जुलाई 2015",
    launchDateMr: "१ जुलै २०१५",
    launchYear: 2015,
    tags: ["Education", "Scholarship", "Student", "Central Sector"],
    popular: true
  },
  {
    id: "pmjay-ayushman",
    name: "Ayushman Bharat - PM-JAY (Pradhan Mantri Jan Arogya Yojana)",
    nameHi: "आयुष्मान भारत - पीएम-जेएवाई (जन आरोग्य योजना)",
    nameMr: "आयुष्मान भारत - पीएम जन आरोग्य योजना",
    category: "Healthcare & Insurance",
    department: "National Health Authority (NHA)",
    description: "Health assurance scheme providing cashless secondary and tertiary hospitalization cover up to ₹5 Lakhs per family per year, plus free cover for all senior citizens age 70+.",
    descriptionHi: "प्रति वर्ष प्रति परिवार ₹5 लाख तक का कैशलेस इलाज, तथा 70 वर्ष से अधिक के सभी वरिष्ठ नागरिकों के लिए मुफ्त स्वास्थ्य सुरक्षा।",
    descriptionMr: "दरवर्षी प्रति कुटुंब ₹५ लाखांपर्यंत मोफत आणि कॅशलेस वैद्यकीय उपचार.",
    benefits: "Cashless treatment up to ₹5 Lakhs per annum across 29,000+ empanelled public and private hospitals.",
    minAge: 0,
    maxIncome: 500000,
    allowedOccupations: ["All"],
    allowedGender: ["All"],
    steps: [
      "Check if your name exists in SECC 2011 list or verify age 70+ for Ayushman Vaya Vandana card.",
      "Visit any empanelled hospital or Ayushman Mitra booth at Public Health Centre.",
      "Authenticate identity using Aadhaar and biometric/OTP.",
      "Get Ayushman Golden Card issued instantly."
    ],
    requiredDocs: [
      "Aadhaar Card",
      "Ration Card / Family ID",
      "Active Mobile Number"
    ],
    officialUrl: "https://pmjay.gov.in/",
    helpline: "14555 / 1800-111-565",
    launchDate: "23 September 2018",
    launchDateHi: "23 सितंबर 2018",
    launchDateMr: "२३ सप्टेंबर २०१८",
    launchYear: 2018,
    tags: ["Healthcare", "Hospitalization", "Ayushman Bharat", "Insurance", "Senior Citizens 70+"],
    popular: true
  },
  {
    id: "lakhpati-didi",
    name: "Lakhpati Didi Scheme (DAY-NRLM)",
    nameHi: "लखपति दीदी योजना",
    nameMr: "लखपति दीदी योजना",
    category: "Women & Child Care",
    department: "Ministry of Rural Development",
    description: "Empowering women in Self-Help Groups (SHGs) with skill training, enterprise guidance, and interest-free micro-credit to earn at least ₹1 Lakh annually.",
    descriptionHi: "स्वयं सहायता समूहों (SHG) की महिलाओं को व्यावसायिक प्रशिक्षण और ब्याज मुक्त ऋण से कम से कम ₹1 लाख वार्षिक आय हासिल करने में मदद।",
    descriptionMr: "महिला बचत गटांना कौशल्य विकास आणि उद्योजकतेसाठी सहाय्य.",
    benefits: "Technical training (LED making, agriculture, tailoring, drone piloting), revolving fund, and bank linkage up to ₹5 Lakhs.",
    minAge: 18,
    maxAge: 60,
    allowedGender: ["Female"],
    allowedAreas: ["Rural", "Urban"],
    allowedOccupations: ["Homemaker", "Self-employed / Business", "Daily wage / Labour", "Farmer", "Other"],
    steps: [
      "Join a local Self-Help Group (SHG) under Deendayal Antyodaya Yojana - NRLM.",
      "Participate in skill development workshops arranged by Block Development Office.",
      "Formulate a micro-enterprise project plan (livestock, handicraft, retail, drone operation).",
      "Avail Community Investment Fund (CIF) and bank credit linkage."
    ],
    requiredDocs: [
      "Aadhaar Card",
      "SHG Membership Certificate / Passbook",
      "Bank Account details",
      "Passport size photographs"
    ],
    officialUrl: "https://nrlm.gov.in/",
    helpline: "1800-110-001",
    launchDate: "15 August 2023",
    launchDateHi: "15 अगस्त 2023",
    launchDateMr: "१५ ऑगस्ट २०२३",
    launchYear: 2023,
    tags: ["Women", "SHG", "Rural Development", "Lakhpati Didi", "Skill"],
    popular: true
  },
  {
    id: "pm-vishwakarma",
    name: "PM Vishwakarma Scheme",
    nameHi: "पीएम विश्वकर्मा योजना",
    nameMr: "पीएम विश्वकर्मा योजना",
    category: "Employment & Skill",
    department: "Ministry of Micro, Small and Medium Enterprises",
    description: "Holistic support scheme for traditional artisans and craftspeople across 18 trades including carpenters, blacksmiths, goldsmiths, potters, cobblers, and tailors.",
    descriptionHi: "18 पारंपरिक व्यवसायों से जुड़े बढ़ई, लोहार, कुम्हार, दर्जी और कारीगरों के लिए टूलकिट प्रोत्साहन और रियायती ऋण।",
    descriptionMr: "पारंपरिक कारागीर आणि बलुतेदारांसाठी toolkit प्रोत्साहन आणि कर्ज योजना.",
    benefits: "PM Vishwakarma Certificate & ID Card, 5-7 days basic skill training with ₹500/day stipend, ₹15,000 toolkit incentive, and collateral-free loans up to ₹3 Lakhs @ 5% interest.",
    minAge: 18,
    allowedOccupations: ["Self-employed / Business", "Daily wage / Labour", "Homemaker", "Other"],
    allowedGender: ["All"],
    steps: [
      "Ensure applicant practices one of the 18 traditional trades in family environment.",
      "Register at nearest Common Service Centre (CSC) using Aadhaar and biometric authentication.",
      "Pass 3-stage verification (Gram Panchayat / ULB, District Implementation Committee, Screening Committee).",
      "Receive digital ID, complete skill training, and receive ₹15,000 toolkit voucher."
    ],
    requiredDocs: [
      "Aadhaar Card",
      "Mobile number linked to Aadhaar",
      "Bank Account Details",
      "Trade Declaration Document"
    ],
    officialUrl: "https://pmvishwakarma.gov.in/",
    helpline: "1800-267-7777",
    launchDate: "17 September 2023",
    launchDateHi: "17 सितंबर 2023",
    launchDateMr: "१७ सप्टेंबर २०२३",
    launchYear: 2023,
    tags: ["Artisans", "Skill Development", "Craftsmen", "Loan", "Toolkit Incentive"],
    popular: true
  },
  {
    id: "pm-svanidhi",
    name: "PM SVANidhi (Street Vendor's AtmaNirbhar Nidhi)",
    nameHi: "पीएम स्वनिधि (स्ट्रीट वेंडर आत्मनिर्भर निधि)",
    nameMr: "पीएम स्वनिधी योजना",
    category: "Business & Micro-Finance",
    department: "Ministry of Housing and Urban Affairs",
    description: "Special micro-credit facility providing collateral-free working capital loans starting from ₹10,000 up to ₹50,000 for street vendors.",
    descriptionHi: "स्ट्रीट वेंडरों और रेहड़ी-पटरी वालों के लिए ₹10,000 से ₹50,000 तक का बिना किसी गारंटी का वर्किंग कैपिटल लोन।",
    descriptionMr: "फेरीवाल्यांसाठी कार्यभांडवल उपलब्ध करून देणारी योजना.",
    benefits: "First tranche loan of ₹10,000 (7% interest subsidy on timely repayment), second tranche ₹20,000, third tranche ₹50,000 + cashback up to ₹1,200/year on digital transactions.",
    minAge: 18,
    allowedAreas: ["Urban"],
    allowedOccupations: ["Self-employed / Business", "Daily wage / Labour", "Other"],
    steps: [
      "Obtain Certificate of Vending (CoV) / Identity Card issued by Urban Local Body (ULB).",
      "Apply online via pmsvanidhi.mohua.gov.in or through local lending institution / CSC.",
      "Receive quick sanction without collateral.",
      "Repay in monthly installments to unlock higher loan tiers and cashback."
    ],
    requiredDocs: [
      "Aadhaar Card / Voter ID",
      "Urban Local Body Vending Certificate / Survey Letter",
      "Bank Account Passbook"
    ],
    officialUrl: "https://pmsvanidhi.mohua.gov.in/",
    helpline: "1800-11-1979",
    launchDate: "1 June 2020",
    launchDateHi: "1 जून 2020",
    launchDateMr: "१ जून २०२०",
    launchYear: 2020,
    tags: ["Street Vendors", "Micro Loan", "Urban", "SVANidhi", "Digital Cashbacks"]
  },
  {
    id: "ppy-pension",
    name: "Atal Pension Yojana (APY)",
    nameHi: "अटल पेंशन योजना (APY)",
    nameMr: "अटल पेन्शन योजना",
    category: "Senior Citizens & Pension",
    department: "PFRDA / Ministry of Finance",
    description: "Guaranteed monthly pension scheme for unorganized sector workers starting from ₹1,000 to ₹5,000 per month upon reaching 60 years of age.",
    descriptionHi: "असंगठित क्षेत्र के श्रमिकों के लिए ₹1,000 से ₹5,000 तक की गारंटीकृत मासिक पेंशन योजना।",
    descriptionMr: "असंघटित क्षेत्रातील कामगारांसाठी दरमहा निश्चित पेन्शन.",
    benefits: "Guaranteed pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000/month after age 60, with same pension to spouse after death and corpus returned to nominee.",
    minAge: 18,
    maxAge: 40,
    allowedOccupations: ["Self-employed / Business", "Daily wage / Labour", "Unemployed", "Homemaker", "Farmer", "Other"],
    allowedGender: ["All"],
    steps: [
      "Visit bank branch where savings account is maintained or apply via netbanking.",
      "Select target monthly pension amount (₹1,000 - ₹5,000).",
      "Provide auto-debit authorization for monthly/quarterly contribution.",
      "Receive PRAN (Permanent Retirement Account Number) card."
    ],
    requiredDocs: [
      "Aadhaar Card",
      "Savings Bank Account Passbook",
      "Active Mobile Number"
    ],
    officialUrl: "https://www.npscra.nsdl.co.in/scheme-details.php",
    helpline: "1800-110-069",
    launchDate: "9 May 2015",
    launchDateHi: "9 मई 2015",
    launchDateMr: "९ मे २०१५",
    launchYear: 2015,
    tags: ["Pension", "Senior Citizens", "APY", "Unorganized Workers"]
  },
  {
    id: "standup-india",
    name: "Stand-Up India Scheme",
    nameHi: "स्टैंड-अप इंडिया योजना",
    nameMr: "स्टँड-अप इंडिया योजना",
    category: "Business & Micro-Finance",
    department: "Department of Financial Services",
    description: "Bank loans between ₹10 Lakhs and ₹1 Crore for setting up greenfield enterprises by SC/ST or Women entrepreneurs.",
    descriptionHi: "अनुसूचित जाति / जनजाति या महिला उद्यमियों द्वारा नया व्यवसाय शुरू करने के लिए ₹10 लाख से ₹1 करोड़ का बैंक ऋण।",
    descriptionMr: "महिला व अनुसूचित जाती/जमातीच्या नवउद्योजकांसाठी कर्ज.",
    benefits: "Bank loan covering up to 85% of project cost with margin money assistance.",
    minAge: 18,
    allowedGender: ["Female", "Male", "Other"],
    allowedOccupations: ["Self-employed / Business", "Unemployed", "Other"],
    steps: [
      "Ensure applicant is an SC/ST individual or a Woman entrepreneur.",
      "Prepare detailed project report for greenfield venture in manufacturing, services, agri-allied, or trading.",
      "Register on standupmitra.in portal and submit loan application.",
      "Lender processes loan through SIDBI portal with handholding support."
    ],
    requiredDocs: [
      "Aadhaar Card & PAN Card",
      "Category Certificate (for SC/ST applicants)",
      "Detailed Business Plan & Project Financials",
      "Proof of Business Premises Title or Lease"
    ],
    officialUrl: "https://www.standupmitra.in/",
    helpline: "1800-180-1122",
    launchDate: "5 April 2016",
    launchDateHi: "5 अप्रैल 2016",
    launchDateMr: "५ एप्रिल २०१६",
    launchYear: 2016,
    tags: ["Women Entrepreneur", "SC/ST", "Business Loan", "Greenfield"]
  },
  {
    id: "pm- Surya-ghar",
    name: "PM-Surya Ghar: Muft Bijli Yojana",
    nameHi: "पीएम-सूर्य घर: मुफ्त बिजली योजना",
    nameMr: "पीएम-सूर्य घर योजना",
    category: "Housing",
    department: "Ministry of New and Renewable Energy",
    description: "Rooftop solar subsidy scheme giving up to 300 units of free electricity per month for residential households with central subsidy up to ₹78,000.",
    descriptionHi: "प्रति माह 300 यूनिट तक मुफ्त बिजली देने के लिए आवासीय छतों पर सोलर पैनल स्थापना पर ₹78,000 तक की वित्तीय सब्सिडी।",
    descriptionMr: "घरावर सोलर पॅनेल बसवून मोफत वीज मिळवण्याची योजना.",
    benefits: "Direct Central Government subsidy up to ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW or higher systems.",
    minAge: 18,
    allowedOccupations: ["All"],
    allowedGender: ["All"],
    steps: [
      "Register on pmsuryaghar.gov.in with state electricity DISCOM consumer account number.",
      "Submit application for rooftop solar installation feasibility clearance.",
      "Get installation done through any empanelled vendor registered with DISCOM.",
      "Upon net-meter installation, central subsidy is credited directly to bank account within 30 days."
    ],
    requiredDocs: [
      "Latest Electricity Bill",
      "Aadhaar Card of Property Owner",
      "Rooftop Photograph",
      "Bank Cancelled Cheque / Passbook for subsidy transfer"
    ],
    officialUrl: "https://pmsuryaghar.gov.in/",
    helpline: "15555",
    launchDate: "13 February 2024",
    launchDateHi: "13 फरवरी 2024",
    launchDateMr: "१३ फेब्रुवारी २०२४",
    launchYear: 2024,
    tags: ["Solar", "Free Electricity", "Rooftop", "Housing", "Green Energy"],
    popular: true
  },
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana (SSY)",
    nameHi: "सुकन्या समृद्धि योजना (SSY)",
    nameMr: "सुकन्या समृद्धी योजना",
    category: "Women & Child Care",
    department: "Ministry of Women & Child Development / Post Office & Banks",
    description: "High-interest savings scheme dedicated to the education and marriage expense fund for girl children below 10 years of age.",
    descriptionHi: "10 वर्ष से कम उम्र की बालिकाओं की शिक्षा और विवाह निधि के लिए उच्च ब्याज दर वाली बचत योजना।",
    descriptionMr: "मुलींच्या शिक्षणासाठी व विवाहासाठी विशेष बचत योजना.",
    benefits: "Attractive government interest rate (~8.2% per annum) with tax exemption under Section 80C and tax-free maturity returns.",
    minAge: 0,
    maxAge: 10,
    allowedGender: ["Female"],
    steps: [
      "Open account in name of girl child before she turns 10 years old.",
      "Visit any Post Office branch or authorized commercial bank.",
      "Deposit minimum ₹250 per financial year (up to max ₹1.5 Lakhs per year).",
      "Matures on completion of 21 years from date of opening or upon marriage after age 18."
    ],
    requiredDocs: [
      "Birth Certificate of Girl Child",
      "Aadhaar & Address Proof of Parent / Guardian",
      "Passport size photograph of child and parent"
    ],
    officialUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
    helpline: "1800-266-6868",
    launchDate: "22 January 2015",
    launchDateHi: "22 जनवरी 2015",
    launchDateMr: "२२ जानेवारी २०१५",
    launchYear: 2015,
    tags: ["Girl Child", "High Interest", "Tax Free", "Education", "Post Office"]
  },
  {
    id: "e-shram",
    name: "e-Shram Social Security Card for Unorganized Workers",
    nameHi: "ई-श्रम कार्ड - असंगठित श्रमिक सुरक्षा",
    nameMr: "ई-श्रम कार्ड योजना",
    category: "Employment & Skill",
    department: "Ministry of Labour and Employment",
    description: "National Database of Unorganized Workers (NDUW) providing a 12-digit Universal Account Number (UAN) and direct access to accidental insurance & central welfare schemes.",
    descriptionHi: "असंगठित श्रमिकों के लिए 12-अंकों का यूएएन कार्ड और प्रत्यक्ष सामाजिक सुरक्षा लाभ।",
    descriptionMr: "असंगठित क्षेत्रातील कामगारांसाठी सामाजिक सुरक्षा कार्ड.",
    benefits: "Free 12-digit UAN card, PMSBY accident cover of ₹2 Lakhs for accidental death/permanent disability, and seamless access to central social security payouts.",
    minAge: 16,
    maxAge: 59,
    allowedOccupations: ["Daily wage / Labour", "Self-employed / Business", "Farmer", "Homemaker", "Other"],
    allowedGender: ["All"],
    steps: [
      "Visit eshram.gov.in or nearest CSC centre.",
      "Enter Aadhaar linked mobile number and complete OTP authentication.",
      "Fill occupation details, skill credentials, and permanent bank account number.",
      "Download and print instantly generated e-Shram UAN Card."
    ],
    requiredDocs: [
      "Aadhaar Card",
      "Mobile number linked with Aadhaar",
      "Bank Account details (Passbook)"
    ],
    officialUrl: "https://eshram.gov.in/",
    helpline: "14434",
    launchDate: "26 August 2021",
    launchDateHi: "26 अगस्त 2021",
    launchDateMr: "२६ ऑगस्ट २०२१",
    launchYear: 2021,
    tags: ["e-Shram", "Unorganized Workers", "Labor Card", "UAN", "Social Security"],
    popular: true
  }
];

export function evaluateProfile(profile: UserProfile): EvaluationResult[] {
  const age = typeof profile.age === "number" ? profile.age : null;
  const income = typeof profile.income === "number" ? profile.income : null;
  const job = profile.occupation;
  const area = profile.area;
  const gender = profile.gender;
  const state = profile.state;
  const extra = profile.extraInfo.toLowerCase();

  return SCHEMES_DATA.map((scheme) => {
    const reasons: string[] = [];
    const missingCriteria: string[] = [];
    let score = 50; // base score

    // Age check
    if (age !== null) {
      if (scheme.minAge !== undefined && age < scheme.minAge) {
        missingCriteria.push(`Minimum age required is ${scheme.minAge} years (Current: ${age})`);
        score -= 30;
      } else if (scheme.maxAge !== undefined && age > scheme.maxAge) {
        missingCriteria.push(`Maximum age limit is ${scheme.maxAge} years (Current: ${age})`);
        score -= 30;
      } else {
        reasons.push(`Age (${age}) satisfies scheme guidelines.`);
        score += 10;
      }
    }

    // Income check
    if (income !== null) {
      if (scheme.maxIncome !== undefined && income > scheme.maxIncome) {
        missingCriteria.push(`Household income exceeds cap of ₹${scheme.maxIncome.toLocaleString("en-IN")}`);
        score -= 35;
      } else {
        reasons.push(`Income (₹${income.toLocaleString("en-IN")}) is within eligible limits.`);
        score += 15;
      }
    }

    // Occupation check
    if (job) {
      if (scheme.allowedOccupations && !scheme.allowedOccupations.includes("All") && !scheme.allowedOccupations.includes(job)) {
        missingCriteria.push(`Occupation '${job}' is not directly targeted by this scheme.`);
        score -= 25;
      } else if (scheme.allowedOccupations) {
        reasons.push(`Occupation matches scheme focus (${job}).`);
        score += 20;
      }
    }

    // Area check
    if (area && scheme.allowedAreas && scheme.allowedAreas.length > 0) {
      if (!scheme.allowedAreas.includes(area as "Urban" | "Rural")) {
        missingCriteria.push(`Scheme is restricted to ${scheme.allowedAreas.join(" or ")} regions.`);
        score -= 20;
      } else {
        reasons.push(`Area (${area}) matches location scope.`);
        score += 10;
      }
    }

    // Gender check
    if (gender && scheme.allowedGender && !scheme.allowedGender.includes("All")) {
      if (!scheme.allowedGender.includes(gender as "Female" | "Male" | "Other")) {
        missingCriteria.push(`Scheme specifies beneficiary gender as ${scheme.allowedGender.join(", ")}.`);
        score -= 25;
      } else {
        reasons.push(`Gender criteria met (${gender}).`);
        score += 15;
      }
    }

    // State check
    if (state && scheme.allowedStates && scheme.allowedStates.length > 0 && !scheme.allowedStates.includes("All")) {
      if (!scheme.allowedStates.includes(state)) {
        missingCriteria.push(`Scheme currently active in specified states.`);
        score -= 15;
      }
    }

    // Keyword relevance in extra info
    if (extra) {
      const matchedTag = scheme.tags.some(t => extra.includes(t.toLowerCase()));
      if (matchedTag) {
        reasons.push(`Additional profile details match key scheme focus.`);
        score += 10;
      }
    }

    // Cap score 0 to 100
    const finalScore = Math.max(5, Math.min(98, score));
    const isEligible = missingCriteria.length === 0 && finalScore >= 50;

    return {
      scheme,
      isEligible,
      matchScore: finalScore,
      reasons,
      missingCriteria,
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}
