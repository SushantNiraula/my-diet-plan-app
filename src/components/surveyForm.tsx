"use client";
import React, { useState } from "react";

const questions = [
  {
    question: "What is your name?",
    type: "text",
  },
  {
    question: "What is your age?",
    type: "number",
  },
  {
    question: "What is your current address?",
    type: "text",
  },
  {
    question: "What is your current weight?",
    type: "number",
  },
  {
    question: "What is your current height?",
    type: "number",
  },
  {
    question: "What is your current BMI?",
    type: "number",
  },
  {
    question: "What is your current BMI?",
    type: "number",
  },
  {
    question: "What is your current BMR?",
    type: "number",
  },
  {
    question: "Which gender do you belogn to?",
    type: "radio",
    options: ["Male", "Female", "Other"],
  },
  {
    question: "Do you follow any specific diet plan?",
    type: "text",
  },

  {
    question: "Do you exercise regularly?",
    type: "radio",
    options: ["Yes", "No", "Sometimes"],
  },
  {
    question: "What are your dietary preferences?",
    type: "checkbox",
    options: ["Vegetarian", "Vegan", "Pescatarian", "Non-vegetarian", "Other"],
  },
  {
    question: "Do you have any medical conditions?",
    type: "textarea",
  },
  {
    question: "What is your typical daily routine?",
    type: "textarea",
  },
  {
    question: "How many meals do you eat per day?",
    type: "number",
  },
  {
    question: "What is your goal?",
    type: "radio",
    options: ["Weight loss", "Muscle gain", "Maintenance", "Other"],
  },
  {
    question: "Do you drink water regularly?",
    type: "radio",
    options: ["Yes", "No", "Sometimes"],
  },
  {
    question: "What is your sleep schedule like?",
    type: "text",
  },
  {
    question: "Do you take any supplements?",
    type: "radio",
    options: ["Yes", "No", "Sometimes"],
  },
];

export const SurveyForm = () => {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>(
    questions.reduce(
      (acc, q) => ({ ...acc, [q.question]: q.type === "checkbox" ? [] : "" }),
      {}
    )
  );
  const [savedAnswers, setSavedAnswers] = useState<
    Record<string, string | string[]>
  >({});
  console.log(`this is the survey`, savedAnswers);
  const handleChange = (question: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedAnswers({ ...answers });
    console.log("Survey answers saved:", answers);
  };

  const renderInput = (q: (typeof questions)[0]) => {
    switch (q.type) {
      case "text":
        return (
          <input
            type="text"
            value={answers[q.question] as string}
            onChange={(e) => handleChange(q.question, e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
          />
        );
      case "textarea":
        return (
          <textarea
            value={answers[q.question] as string}
            onChange={(e) => handleChange(q.question, e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            rows={3}
          />
        );
      case "number":
        return (
          <input
            type="number"
            value={answers[q.question] as string}
            onChange={(e) => handleChange(q.question, e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
          />
        );
      case "radio":
        return (
          <div className="space-y-2">
            {q.options?.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`${q.question}-${option}`}
                  name={q.question}
                  value={option}
                  checked={(answers[q.question] as string) === option}
                  onChange={(e) => handleChange(q.question, e.target.value)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor={`${q.question}-${option}`}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <div className="space-y-2">
            {q.options?.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={`${q.question}-${option}`}
                  name={q.question}
                  value={option}
                  checked={(answers[q.question] as string[]).includes(option)}
                  onChange={(e) => {
                    const currentAnswers = answers[q.question] as string[];
                    const newAnswers = e.target.checked
                      ? [...currentAnswers, option]
                      : currentAnswers.filter((a) => a !== option);
                    handleChange(q.question, newAnswers);
                  }}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor={`${q.question}-${option}`}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Diet and Lifestyle Survey
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300"
            >
              <label
                htmlFor={`question-${index}`}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {q.question}
              </label>
              <div className="mt-1">{renderInput(q)}</div>
            </div>
          ))}
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Submit Survey
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
