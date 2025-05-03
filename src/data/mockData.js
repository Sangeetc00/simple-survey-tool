// // src/data/mockData.js
// // This file contains mock data to simulate backend responses

// export const mockSurveys = [
//     {
//       id: "survey-1",
//       title: "Customer Satisfaction Survey",
//       description: "Help us improve our service by sharing your experience",
//       createdAt: "2025-04-20T10:30:00Z",
//       updatedAt: "2025-04-20T10:30:00Z",
//       status: "active", // active, draft, closed
//       questions: [
//         {
//           id: "q1",
//           type: "rating",
//           required: true,
//           title: "How would you rate your overall experience?",
//           description: "Please rate from 1 to 5",
//           options: {
//             min: 1,
//             max: 5,
//             minLabel: "Very Dissatisfied",
//             maxLabel: "Very Satisfied"
//           }
//         },
//         {
//           id: "q2",
//           type: "multipleChoice",
//           required: true,
//           title: "Which of our products did you purchase?",
//           description: "Select all that apply",
//           options: {
//             allowMultiple: true,
//             choices: [
//               "Product A",
//               "Product B",
//               "Product C",
//               "Product D"
//             ]
//           }
//         },
//         {
//           id: "q3",
//           type: "text",
//           required: false,
//           title: "Do you have any additional feedback?",
//           description: "Please share any thoughts or suggestions",
//           options: {
//             maxLength: 500
//           }
//         }
//       ]
//     },
//     {
//       id: "survey-2",
//       title: "Employee Engagement Survey",
//       description: "Annual assessment of workplace satisfaction",
//       createdAt: "2025-04-15T14:20:00Z",
//       updatedAt: "2025-04-16T09:15:00Z",
//       status: "active",
//       questions: [
//         {
//           id: "q1",
//           type: "rating",
//           required: true,
//           title: "How satisfied are you with your current role?",
//           description: "Please rate from 1 to 5",
//           options: {
//             min: 1,
//             max: 5,
//             minLabel: "Very Dissatisfied",
//             maxLabel: "Very Satisfied"
//           }
//         },
//         {
//           id: "q2",
//           type: "text",
//           required: true,
//           title: "What aspects of your job do you enjoy the most?",
//           description: "",
//           options: {
//             maxLength: 300
//           }
//         }
//       ]
//     },
//     {
//       id: "survey-3",
//       title: "Website Usability Test",
//       description: "Help us improve our website",
//       createdAt: "2025-04-10T08:15:00Z",
//       updatedAt: "2025-04-10T08:15:00Z",
//       status: "draft",
//       questions: [
//         {
//           id: "q1",
//           type: "multipleChoice",
//           required: true,
//           title: "How did you find our website?",
//           description: "Select one option",
//           options: {
//             allowMultiple: false,
//             choices: [
//               "Search engine",
//               "Social media",
//               "Friend or colleague",
//               "Advertisement",
//               "Other"
//             ]
//           }
//         }
//       ]
//     }
//   ];
  
//   export const mockResponses = [
//     {
//       id: "response-1",
//       surveyId: "survey-1",
//       submittedAt: "2025-04-21T15:45:00Z",
//       answers: [
//         {
//           questionId: "q1",
//           value: 4
//         },
//         {
//           questionId: "q2",
//           value: ["Product A", "Product C"]
//         },
//         {
//           questionId: "q3",
//           value: "Great products, but delivery could be faster."
//         }
//       ]
//     },
//     {
//       id: "response-2",
//       surveyId: "survey-1",
//       submittedAt: "2025-04-22T10:30:00Z",
//       answers: [
//         {
//           questionId: "q1",
//           value: 5
//         },
//         {
//           questionId: "q2",
//           value: ["Product B"]
//         },
//         {
//           questionId: "q3",
//           value: "Excellent service and product quality!"
//         }
//       ]
//     }
//   ];
  
//   // Question type definitions - useful for form building
//   export const questionTypes = [
//     {
//       id: "text",
//       label: "Text Input",
//       icon: "align-left",
//       description: "Short or long text responses"
//     },
//     {
//       id: "multipleChoice",
//       label: "Multiple Choice",
//       icon: "list-checks",
//       description: "Select one or multiple options"
//     },
//     {
//       id: "rating",
//       label: "Rating Scale",
//       icon: "star",
//       description: "Rate on a numeric scale"
//     },
//     {
//       id: "boolean",
//       label: "Yes/No",
//       icon: "toggle-left",
//       description: "Simple yes or no answer"
//     },
//     {
//       id: "date",
//       label: "Date",
//       icon: "calendar",
//       description: "Date selection"
//     }
//   ];