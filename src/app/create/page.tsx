"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CreateSurvey() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateSurvey = () => {
    // Logic to handle survey creation (e.g., API call or state update)
    console.log("Survey Created:", { title, description });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create a New Survey</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateSurvey();
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Survey Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter survey title"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Survey Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter survey description"
            rows={4}
            required
          />
        </div>
        <Button type="submit" size="lg">
          Create Survey
        </Button>
      </form>
    </div>
  );
}