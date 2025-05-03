export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  createdAt: number;
  updatedAt: number;
  isPublished: boolean;
  createdBy: string; // User ID or email
}

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  title: string;
  isRequired: boolean;
  order: number;
}

export interface TextQuestion extends BaseQuestion {
  type: "text";
  multiline: boolean;
  placeholder?: string;
}

export interface SingleSelectQuestion extends BaseQuestion {
  type: "single-select";
  options: string[];
  allowOther: boolean;
}

export interface MultiSelectQuestion extends BaseQuestion {
  type: "multi-select";
  options: string[];
  allowOther: boolean;
  minSelections?: number;
  maxSelections?: number;
}

export interface RatingQuestion extends BaseQuestion {
  type: "rating";
  minLabel?: string;
  maxLabel?: string;
}

export interface YesNoQuestion extends BaseQuestion {
  type: "yes-no";
}

export type QuestionType = 'text' | 'multipleChoice';

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[];
}

export interface SurveyResponse {
  id: string;
  surveyId: string;
  answers: Answer[];
  submittedAt: number;
  metadata: {
    userAgent?: string;
    language?: string;
    timeToComplete?: number; // In seconds
  };
}

export interface BaseAnswer {
  questionId: string;
}

export interface TextAnswer extends BaseAnswer {
  value: string;
}

export interface SingleSelectAnswer extends BaseAnswer {
  selectedOption: string;
}

export interface MultiSelectAnswer extends BaseAnswer {
  selectedOptions: string[];
}

export interface RatingAnswer extends BaseAnswer {
  rating: number;
}

export interface YesNoAnswer extends BaseAnswer {
  isYes: boolean;
}

export type Answer =
  | TextAnswer
  | SingleSelectAnswer
  | MultiSelectAnswer
  | RatingAnswer
  | YesNoAnswer;
