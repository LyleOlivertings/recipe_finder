// types.ts
export interface Recipe {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
  }
  
  export interface SearchBarProps {
    onSearch: (query: string) => void;
  }