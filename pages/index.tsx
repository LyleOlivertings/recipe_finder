"use client";

import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import RetroFarmUI from '../components/RetroFarmUI';

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async (query: string) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/recipes?q=${query}`);
      const data = await res.json();
      setRecipes(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RetroFarmUI>
      <div className="max-w-4xl mx-auto px-4">
        {/* Recipe Finder Header */}
        <div className="retro-panel mb-8">
          <h1 className="retro-title">🍳 Recipe Cookbook</h1>
          <div className="max-w-md mx-auto mt-4">
            <SearchBar onSearch={searchRecipes} />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="retro-loading">
            <div className="retro-spinner"></div>
            Searching Grandma's Recipes...
          </div>
        )}

        {/* Recipe Row */}
        <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {recipes.map(recipe => (
            <div key={recipe.id} className="flex-shrink-0 w-72 md:w-full">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && recipes.length === 0 && (
          <div className="retro-empty-state">
            🥕 Enter ingredients to find recipes!
          </div>
        )}
      </div>
    </RetroFarmUI>
  );
}