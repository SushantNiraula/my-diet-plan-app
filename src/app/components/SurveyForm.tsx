// components/SurveyForm.tsx
'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import AgeInput from './AgeInput';
import GenderInput from './GenderInput';
import WeightInput from './WeightInput';
import HeightInput from './HeightInput';
import AllergiesInput from './AllergiesInput';

const questions = [
  { name: 'age', component: AgeInput },
  { name: 'gender', component: GenderInput },
  { name: 'weight', component: WeightInput },
  { name: 'height', component: HeightInput },
  { name: 'allergies', component: AllergiesInput }
];

type SurveyFormProps = Record<string, unknown>;

const SurveyForm: React.FC<SurveyFormProps> = () => {
  const { handleSubmit, formState: { errors } } = useForm<FieldValues>();
  const [answers, setAnswers] = useState<{ [key: string]: string | boolean | undefined }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setAnswers(prev => ({ ...prev, ...data }));
    console.log('Survey Data:', answers);

    try {
      // Send the collected answers to the backend API to generate diet plan
      const response = await axios.post('/api/generateDietPlan', answers);
      console.log('Diet Plan:', response.data);
    } catch (error) {
      console.error('Error generating diet plan:', error);
    }
  };

  const handleNext = (data: FieldValues) => {
    setAnswers((prev) => ({ ...prev, ...data }));
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const CurrentQuestion = questions[currentQuestionIndex].component;

  return (
    <form onSubmit={handleSubmit(currentQuestionIndex === questions.length - 1 ? onSubmit : handleNext)}>
      <h1 className='text-center'>Survey</h1>
      <CurrentQuestion 
        value={answers[questions[currentQuestionIndex].name]}
        onChange={(value) => setAnswers(prev => ({ ...prev, [questions[currentQuestionIndex].name]: value }))}
      />
      {errors[questions[currentQuestionIndex].name] && <span>This field is required</span>}
      
      <button type="submit">
        {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
      </button>
    </form>
  );
};

export default SurveyForm;