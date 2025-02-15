import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  return (
    <div className="retro-search-container">
      <input
        type="text"
        placeholder="Search recipes..."
        className="retro-search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSearch(query)}
      />
      <button
        onClick={() => onSearch(query)}
        className="retro-search-button"
      >
        🔍 Search
      </button>
    </div>
  );
}