export type CategoryType = 
  | "All"
  | "Housing"
  | "Farmers & Agriculture"
  | "Education & Youth"
  | "Business & Micro-Finance"
  | "Women & Child Care"
  | "Healthcare & Insurance"
  | "Senior Citizens & Pension"
  | "Employment & Skill";

export interface Scheme {
  id: string;
  name: string;
  nameHi?: string;
  nameMr?: string;
  category: CategoryType;
  department: string;
  description: string;
  descriptionHi?: string;
  descriptionMr?: string;
  benefits: string;
  minAge?: number;
  maxAge?: number;
  maxIncome?: number; // annual household income in INR
  allowedOccupations?: string[];
  allowedAreas?: ("Urban" | "Rural")[];
  allowedGender?: ("Female" | "Male" | "Other" | "All")[];
  allowedStates?: string[]; // Empty or "All" means nationwide
  steps: string[];
  requiredDocs: string[];
  officialUrl: string;
  helpline?: string;
  launchDate?: string;
  launchDateHi?: string;
  launchDateMr?: string;
  launchYear?: number;
  tags: string[];
  popular?: boolean;
}

export interface UserProfile {
  age: number | "";
  income: number | "";
  gender: string;
  occupation: string;
  state: string;
  area: "Urban" | "Rural" | "";
  casteCategory: string;
  differentlyAbled: boolean;
  minority: boolean;
  extraInfo: string;
}

export interface EvaluationResult {
  scheme: Scheme;
  isEligible: boolean;
  matchScore: number; // 0 to 100
  reasons: string[];
  missingCriteria: string[];
}

export type ApplicationStatus = "Saved" | "Applied" | "In Review" | "Approved";

export interface SavedSchemeItem {
  schemeId: string;
  savedAt: string;
  status: ApplicationStatus;
  notes?: string;
}

export type Language = "en" | "hi" | "mr";
