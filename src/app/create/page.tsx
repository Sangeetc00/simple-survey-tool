"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import { SurveyHeader } from "@/components/survey-creator/SurveyHeader";
import { QuestionList } from "@/components/survey-creator/QuestionList";
import { Question, QuestionType } from "@/types/survey.types";

export default function CreateSurvey() {
  const router = useRouter(); // Initialize useRouter
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = (type: QuestionType, options?: string[]) => {
    if (newQuestion.trim()) {
      const newQuestionObj: Question = {
        id: Date.now(),
        text: newQuestion.trim(),
        type,
        options: type === 'multipleChoice' ? options : undefined
      };
      setQuestions([...questions, newQuestionObj]);
      setNewQuestion("");
    }
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter(question => question.id !== id));
  };

  const handleCreateSurvey = () => {
    console.log("Survey Created:", {
      title,
      description,
      questions: questions.map(q => q.text)
    });
  };

  return (
    <div className="container mx-auto ">
      {/* Back Button */}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => router.back()} // Navigate to the previous page
        className="mb-8 cursor-pointer"
      >
        ← Back
      </Button>

      <h1 className="text-3xl font-bold mb-6">Create a New Survey</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateSurvey();
        }}
        className="space-y-4"
      >
        <SurveyHeader
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
        
        <QuestionList
          questions={questions}
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          onAddQuestion={handleAddQuestion}
          onRemoveQuestion={handleRemoveQuestion}
        />

        <Button type="submit" size="lg" disabled={questions.length === 0}>
          Create Survey
        </Button>
      </form>
    </div>
  );
}