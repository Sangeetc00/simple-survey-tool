// // src/services/surveyService.js
// // This service simulates API calls to a backend for survey operations
// import { mockSurveys, mockResponses } from '../data/mockData';

// // Helper to simulate network delay (makes the app feel more realistic)
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// class SurveyService {
//   constructor() {
//     // Initialize local storage if not already set
//     this.initLocalStorage();
//   }

//   // Set up localStorage with initial data if empty
//   initLocalStorage() {
//     if (!localStorage.getItem('surveys')) {
//       localStorage.setItem('surveys', JSON.stringify(mockSurveys));
//     }
    
//     if (!localStorage.getItem('responses')) {
//       localStorage.setItem('responses', JSON.stringify(mockResponses));
//     }
//   }

//   // Get surveys from "database" (localStorage)
//   async getSurveys() {
//     // Simulate API request delay
//     await delay(300);
    
//     try {
//       const surveys = JSON.parse(localStorage.getItem('surveys')) || [];
//       return { success: true, data: surveys };
//     } catch (error) {
//       console.error("Error fetching surveys:", error);
//       return { success: false, error: "Failed to fetch surveys" };
//     }
//   }

//   // Get a single survey by ID
//   async getSurveyById(id) {
//     await delay(200);
    
//     try {
//       const surveys = JSON.parse(localStorage.getItem('surveys')) || [];
//       const survey = surveys.find(s => s.id === id);
      
//       if (!survey) {
//         return { success: false, error: "Survey not found" };
//       }
      
//       return { success: true, data: survey };
//     } catch (error) {
//       console.error(`Error fetching survey ${id}:`, error);
//       return { success: false, error: "Failed to fetch survey" };
//     }
//   }

//   // Create a new survey
//   async createSurvey(surveyData) {
//     await delay(500);
    
//     try {
//       const surveys = JSON.parse(localStorage.getItem('surveys')) || [];
      
//       // Generate a unique ID
//       const newId = `survey-${Date.now()}`;
      
//       // Create survey with metadata
//       const newSurvey = {
//         id: newId,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         status: 'draft',
//         ...surveyData
//       };
      
//       // Save to "database"
//       localStorage.setItem('surveys', JSON.stringify([...surveys, newSurvey]));
      
//       return { success: true, data: newSurvey };
//     } catch (error) {
//       console.error("Error creating survey:", error);
//       return { success: false, error: "Failed to create survey" };
//     }
//   }

//   // Update an existing survey
//   async updateSurvey(id, surveyData) {
//     await delay(400);
    
//     try {
//       const surveys = JSON.parse(localStorage.getItem('surveys')) || [];
//       const surveyIndex = surveys.findIndex(s => s.id === id);
      
//       if (surveyIndex === -1) {
//         return { success: false, error: "Survey not found" };
//       }
      
//       // Update the survey
//       const updatedSurvey = {
//         ...surveys[surveyIndex],
//         ...surveyData,
//         updatedAt: new Date().toISOString()
//       };
      
//       surveys[surveyIndex] = updatedSurvey;
//       localStorage.setItem('surveys', JSON.stringify(surveys));
      
//       return { success: true, data: updatedSurvey };
//     } catch (error) {
//       console.error(`Error updating survey ${id}:`, error);
//       return { success: false, error: "Failed to update survey" };
//     }
//   }

//   // Delete a survey
//   async deleteSurvey(id) {
//     await delay(350);
    
//     try {
//       const surveys = JSON.parse(localStorage.getItem('surveys')) || [];
//       const filteredSurveys = surveys.filter(s => s.id !== id);
      
//       if (filteredSurveys.length === surveys.length) {
//         return { success: false, error: "Survey not found" };
//       }
      
//       localStorage.setItem('surveys', JSON.stringify(filteredSurveys));
      
//       // Also delete associated responses
//       this.deleteResponsesBySurveyId(id);
      
//       return { success: true };
//     } catch (error) {
//       console.error(`Error deleting survey ${id}:`, error);
//       return { success: false, error: "Failed to delete survey" };
//     }
//   }

//   // Get responses for a specific survey
//   async getSurveyResponses(surveyId) {
//     await delay(300);
    
//     try {
//       const responses = JSON.parse(localStorage.getItem('responses')) || [];
//       const surveyResponses = responses.filter(r => r.surveyId === surveyId);
      
//       return { success: true, data: surveyResponses };
//     } catch (error) {
//       console.error(`Error fetching responses for survey ${surveyId}:`, error);
//       return { success: false, error: "Failed to fetch survey responses" };
//     }
//   }

//   // Submit a new response to a survey
//   async submitSurveyResponse(surveyId, answers) {
//     await delay(600);
    
//     try {
//       const responses = JSON.parse(localStorage.getItem('responses')) || [];
      
//       const newResponse = {
//         id: `response-${Date.now()}`,
//         surveyId,
//         submittedAt: new Date().toISOString(),
//         answers
//       };
      
//       localStorage.setItem('responses', JSON.stringify([...responses, newResponse]));
      
//       return { success: true, data: newResponse };
//     } catch (error) {
//       console.error(`Error submitting response for survey ${surveyId}:`, error);
//       return { success: false, error: "Failed to submit survey response" };
//     }
//   }

//   // Delete all responses for a survey (helper for deleteSurvey)
//   deleteResponsesBySurveyId(surveyId) {
//     try {
//       const responses = JSON.parse(localStorage.getItem('responses')) || [];
//       const filteredResponses = responses.filter(r => r.surveyId !== surveyId);
//       localStorage.setItem('responses', JSON.stringify(filteredResponses));
//     } catch (error) {
//       console.error(`Error deleting responses for survey ${surveyId}:`, error);
//     }
//   }
// }

// // Create a singleton instance
// const surveyService = new SurveyService();

// export default surveyService;