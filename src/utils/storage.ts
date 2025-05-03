import { Survey, SurveyResponse } from '../types/survey.types';

// Survey storage functions
export const SURVEYS_STORAGE_KEY = 'survey-tool-surveys';

export const getSurveys = (): Survey[] => {
  if (typeof window === 'undefined') return [];
  
  const storedSurveys = localStorage.getItem(SURVEYS_STORAGE_KEY);
  if (!storedSurveys) return [];
  
  try {
    return JSON.parse(storedSurveys);
  } catch (error) {
    console.error('Failed to parse surveys from local storage', error);
    return [];
  }
};

export const saveSurvey = (survey: Survey): void => {
  if (typeof window === 'undefined') return;
  
  const surveys = getSurveys();
  const existingIndex = surveys.findIndex(s => s.id === survey.id);
  
  if (existingIndex >= 0) {
    surveys[existingIndex] = survey;
  } else {
    surveys.push(survey);
  }
  
  localStorage.setItem(SURVEYS_STORAGE_KEY, JSON.stringify(surveys));
};

export const deleteSurvey = (id: string): void => {
  if (typeof window === 'undefined') return;
  
  const surveys = getSurveys();
  const filteredSurveys = surveys.filter(survey => survey.id !== id);
  
  localStorage.setItem(SURVEYS_STORAGE_KEY, JSON.stringify(filteredSurveys));
};

export const getSurveyById = (id: string): Survey | undefined => {
  const surveys = getSurveys();
  return surveys.find(survey => survey.id === id);
};

// Survey response storage functions
export const RESPONSES_STORAGE_KEY = 'survey-tool-responses';

export const getResponses = (surveyId?: string): SurveyResponse[] => {
  if (typeof window === 'undefined') return [];
  
  const storedResponses = localStorage.getItem(RESPONSES_STORAGE_KEY);
  if (!storedResponses) return [];
  
  try {
    const responses = JSON.parse(storedResponses) as SurveyResponse[];
    if (surveyId) {
      return responses.filter(response => response.surveyId === surveyId);
    }
    return responses;
  } catch (error) {
    console.error('Failed to parse responses from local storage', error);
    return [];
  }
};

export const saveResponse = (response: SurveyResponse): void => {
  if (typeof window === 'undefined') return;
  
  const responses = getResponses();
  responses.push(response);
  
  localStorage.setItem(RESPONSES_STORAGE_KEY, JSON.stringify(responses));
};
