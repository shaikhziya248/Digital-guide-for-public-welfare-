import React, { createContext, useContext, useState, useEffect } from "react";
import { SavedSchemeItem, ApplicationStatus } from "../types";

interface SavedContextType {
  savedItems: SavedSchemeItem[];
  toggleSaveScheme: (schemeId: string) => void;
  isSaved: (schemeId: string) => boolean;
  updateStatus: (schemeId: string, status: ApplicationStatus) => void;
  updateNotes: (schemeId: string, notes: string) => void;
}

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedItems, setSavedItems] = useState<SavedSchemeItem[]>(() => {
    try {
      const stored = localStorage.getItem("dwg_saved_schemes");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("dwg_saved_schemes", JSON.stringify(savedItems));
  }, [savedItems]);

  const toggleSaveScheme = (schemeId: string) => {
    setSavedItems((prev) => {
      const exists = prev.some((item) => item.schemeId === schemeId);
      if (exists) {
        return prev.filter((item) => item.schemeId !== schemeId);
      } else {
        return [
          ...prev,
          {
            schemeId,
            savedAt: new Date().toISOString(),
            status: "Saved",
          },
        ];
      }
    });
  };

  const isSaved = (schemeId: string): boolean => {
    return savedItems.some((item) => item.schemeId === schemeId);
  };

  const updateStatus = (schemeId: string, status: ApplicationStatus) => {
    setSavedItems((prev) =>
      prev.map((item) =>
        item.schemeId === schemeId ? { ...item, status } : item
      )
    );
  };

  const updateNotes = (schemeId: string, notes: string) => {
    setSavedItems((prev) =>
      prev.map((item) =>
        item.schemeId === schemeId ? { ...item, notes } : item
      )
    );
  };

  return (
    <SavedContext.Provider
      value={{ savedItems, toggleSaveScheme, isSaved, updateStatus, updateNotes }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error("useSaved must be used within SavedProvider");
  }
  return context;
};
