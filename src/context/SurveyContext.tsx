"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Survey } from '../types/survey.types';
import { saveSurvey, getSurveys, deleteSurvey, getSurveyById as getStoredSurveyById } from '../utils/storage';

interface SurveyContextType {
  surveys: Survey[];
  activeSurvey: Survey | null;
  createSurvey: (survey: Omit<Survey, 'id' | 'createdAt' | 'updatedAt'>) => Survey;
  updateSurvey: (survey: Survey) => Survey;
  removeSurvey: (id: string) => void;
  getSurveyById: (id: string) => Survey | undefined;
  setActiveSurvey: (survey: Survey | null) => void;
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const SurveyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [activeSurvey, setActiveSurvey] = useState<Survey | null>(null);

  useEffect(() => {
    const loadedSurveys = getSurveys();
    setSurveys(loadedSurveys);
  }, []);

  const createSurvey = (surveyData: Omit<Survey, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = Date.now();
    const newSurvey: Survey = {
      ...surveyData,
      id: nanoid(),
      createdAt: now,
      updatedAt: now,
    };
    
    const updatedSurveys = [...surveys, newSurvey];
    setSurveys(updatedSurveys);
    saveSurvey(newSurvey);
    return newSurvey;
  };

  const updateSurvey = (survey: Survey) => {
    const updatedSurvey = {
      ...survey,
      updatedAt: Date.now(),
    };
    
    const updatedSurveys = surveys.map(s => 
      s.id === updatedSurvey.id ? updatedSurvey : s
    );
    
    setSurveys(updatedSurveys);
    saveSurvey(updatedSurvey);
    return updatedSurvey;
  };

  const removeSurvey = (id: string) => {
    const updatedSurveys = surveys.filter(survey => survey.id !== id);
    setSurveys(updatedSurveys);
    deleteSurvey(id);
  };

  const getSurveyById = (id: string) => {
    return surveys.find(survey => survey.id === id) || getStoredSurveyById(id);
  };

  return (
    <SurveyContext.Provider 
      value={{ 
        surveys, 
        activeSurvey, 
        createSurvey, 
        updateSurvey, 
        removeSurvey, 
        getSurveyById, 
        setActiveSurvey 
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurveyContext = () => {
  const context = useContext(SurveyContext);
  if (context === undefined) {
    throw new Error('useSurveyContext must be used within a SurveyProvider');
  }
  return context;
};