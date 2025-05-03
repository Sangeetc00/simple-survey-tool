import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Question, QuestionType } from "@/types/survey.types";
import { useState } from "react";

interface QuestionListProps {
  questions: Question[];
  newQuestion: string;
  setNewQuestion: (question: string) => void;
  onAddQuestion: (type: QuestionType, options?: string[]) => void;
  onRemoveQuestion: (id: number) => void;
}

export function QuestionList({
  questions,
  newQuestion,
  setNewQuestion,
  onAddQuestion,
  onRemoveQuestion,
}: QuestionListProps) {
  // types
  const [selectedType, setSelectedType] = useState<QuestionType>("text");
  const [options, setOptions] = useState<string[]>(["Option 1", "Option 2"]);

  // func
  const handleAddOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const handleRemoveOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestionWithOptions = () => {
    if (selectedType === "multipleChoice") {
      onAddQuestion(selectedType, options);
    } else {
      onAddQuestion(selectedType);
    }
    setOptions(["Option 1", "Option 2"]); // Reset options after adding
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter question text"
          />
          <Select
            defaultValue="text"
            onValueChange={(value: QuestionType) => setSelectedType(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select question type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">Text Answer</SelectItem>
              <SelectItem value="multipleChoice">Multiple Choice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Options Management UI */}
        {selectedType === "multipleChoice" && (
          <div className="ml-4 space-y-2">
            <p className="text-sm font-medium text-gray-700">Options:</p>
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder={`Option ${index + 1}`}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveOption(index)}
                  disabled={options.length <= 2}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAddOption}
            >
              Add Option
            </Button>
          </div>
        )}

        <Button
          type="button"
          onClick={handleAddQuestionWithOptions}
          disabled={!newQuestion.trim()}
        >
          Add Question
        </Button>
      </div>

      {questions.map((question) => (
        <div key={question.id} className="space-y-2 p-4 border rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">{question.text}</span>
              <span className="text-sm text-gray-500">
                ({question.type === "text" ? "Text Answer" : "Multiple Choice"})
              </span>
            </div>
            <Button
              type="button"
              variant="destructive"
              onClick={() => onRemoveQuestion(question.id)}
            >
              Remove
            </Button>
          </div>

          {/* Preview of answer type */}
          <div className="ml-4">
            {question.type === "text" ? (
              <Textarea
                disabled
                placeholder="Text answer will appear here"
                className="max-w-[400px]"
              />
            ) : (
              <div className="space-y-2">
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input type="radio" disabled />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
