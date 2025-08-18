// Color utility functions for consistent styling
export const colorClasses = {
  // Text colors
  text: {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary', 
    muted: 'text-text-muted',
    onDark: 'text-text-on-dark',
    onDarkSecondary: 'text-text-on-dark-secondary',
    onDarkMuted: 'text-text-on-dark-muted',
  },
  
  // Background colors
  bg: {
    primary: 'bg-background',
    maroon: 'bg-maroon',
    lightGray: 'bg-light-gray',
    darkGray: 'bg-dark-gray',
    white: 'bg-white',
  },
  
  // Border colors
  border: {
    gray: 'border-gray-200',
    maroon: 'border-maroon',
  },
  
  // Button styles
  button: {
    primary: 'bg-maroon text-white hover:bg-maroon/90 transition-colors',
    secondary: 'border-2 border-maroon text-maroon hover:bg-maroon hover:text-white transition-colors',
    disabled: 'bg-gray-200 text-gray-600 cursor-not-allowed',
  }
};

// Helper function to get event type colors
export const getEventTypeColor = (type: string) => {
  const colors = {
    workshop: 'bg-blue-100 text-blue-800',
    hackathon: 'bg-green-100 text-green-800', 
    talk: 'bg-purple-100 text-purple-800',
    meeting: 'bg-yellow-100 text-yellow-800',
    social: 'bg-pink-100 text-pink-800',
  };
  return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

// Helper function to get project category colors
export const getProjectCategoryColor = (category: string) => {
  const colors = {
    web: 'bg-purple-100 text-purple-800',
    mobile: 'bg-blue-100 text-blue-800',
    ai: 'bg-red-100 text-red-800', 
    game: 'bg-green-100 text-green-800',
    system: 'bg-orange-100 text-orange-800',
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

// Helper function to get project status colors
export const getProjectStatusColor = (status: string) => {
  const colors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    planning: 'bg-yellow-100 text-yellow-800',
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

// Helper function to get difficulty colors
export const getDifficultyColor = (difficulty: string) => {
  const colors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };
  return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};