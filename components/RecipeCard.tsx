import { Recipe } from "@/types";

interface RecipeCardProps {
    recipe: Recipe;
    retroStyle?: boolean;
  }
  
  export default function RecipeCard({ recipe, retroStyle }: RecipeCardProps) {
    return (
      <div className={`${
        retroStyle 
          ? 'retro-card bg-[#e3c598] border-4 border-[#6b4f2a] hover:shadow-retro'
          : 'modern-card'
      } p-4 rounded-lg transition-all`}>
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover mb-4 border-4 border-[#6b4f2a]"
        />
        <h3 className={`text-lg ${
          retroStyle ? 'text-[#6b4f2a] font-pixel' : 'modern-title'
        }`}>
          {recipe.title}
        </h3>
        <div className={`flex justify-between mt-2 ${
          retroStyle ? 'text-[#6b4f2a]' : 'text-gray-600'
        }`}>
          <span>⏲️ {recipe.readyInMinutes}m</span>
          <span>👥 {recipe.servings}</span>
        </div>
      </div>
    );
  }