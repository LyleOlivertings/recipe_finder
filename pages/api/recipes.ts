import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;
  const apiKey = process.env.SPOONACULAR_API_KEY;

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${q}&apiKey=${apiKey}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
}