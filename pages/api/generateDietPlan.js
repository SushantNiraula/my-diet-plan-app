// pages/api/generateDietPlan.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userData = req.body;
    const prompt = generateDietPlanPrompt(userData); // Generate a prompt based on user data

    try {
      // Call the LLaMA API (or GROQ model)
      const response = await axios.post('https://groq-api-endpoint.com/generate', {
        model: 'llama', // Assuming using the LLaMA model
        prompt,
        max_tokens: 500,
      });

      const dietPlan = response.data;
      res.status(200).json(dietPlan);
    } catch (error) {
      console.error('Error generating diet plan:', error);
      res.status(500).json({ error: 'Failed to generate diet plan' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

const generateDietPlanPrompt = (data) => {
  return `Create a personalized diet plan based on the following information:
  Age: ${data.question0}
  Gender: ${data.question1}
  Weight: ${data.question2}
  Height: ${data.question3}
  Allergies: ${data.question4}
  Diet Plan: ${data.question5}
  Exercise: ${data.question6}
  Dietary Preferences: ${data.question7}
  Medical Conditions: ${data.question8}
  Daily Routine: ${data.question9}
  Meals per day: ${data.question10}
  Goal: ${data.question11}
  Water Consumption: ${data.question12}
  Sleep Schedule: ${data.question13}
  Supplements: ${data.question14}`;
};