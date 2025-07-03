import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Circle, 
  Search, 
  Moon, 
  Sun, 
  MapPin,
  Code,
  Layers,
  Zap,
  Globe,
  Database,
  GitBranch
} from 'lucide-react';

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

interface RoadmapSection {
  id: string;
  title: string;
  icon: React.ComponentType;
  description: string;
  items: RoadmapItem[];
}

const roadmapData: RoadmapSection[] = [
  {
    id: 'fundamentals',
    title: 'JavaScript Fundamentals',
    icon: Code,
    description: 'Master the core JavaScript concepts before diving into React',
    items: [
      { id: 'js-basics', title: 'Variables, Functions, and Scope', description: 'Understanding let, const, var, function declarations, and lexical scoping', category: 'fundamentals' },
      { id: 'js-arrays', title: 'Arrays and Objects', description: 'Working with data structures, destructuring, and spread operators', category: 'fundamentals' },
      { id: 'js-async', title: 'Asynchronous JavaScript', description: 'Promises, async/await, and handling asynchronous operations', category: 'fundamentals' },
      { id: 'js-modules', title: 'ES6+ Features', description: 'Arrow functions, template literals, classes, and modules', category: 'fundamentals' },
      { id: 'js-dom', title: 'DOM Manipulation', description: 'Understanding the Document Object Model and basic DOM operations', category: 'fundamentals' }
    ]
  },
  {
    id: 'react-basics',
    title: 'React Basics',
    icon: Layers,
    description: 'Learn the fundamentals of React and component-based architecture',
    items: [
      { id: 'react-intro', title: 'What is React?', description: 'Understanding React, JSX, and the virtual DOM concept', category: 'react-basics' },
      { id: 'react-components', title: 'Components and Props', description: 'Creating functional components and passing data with props', category: 'react-basics' },
      { id: 'react-state', title: 'State Management', description: 'Managing component state with useState hook', category: 'react-basics' },
      { id: 'react-events', title: 'Event Handling', description: 'Handling user interactions and form submissions', category: 'react-basics' },
      { id: 'react-lists', title: 'Lists and Keys', description: 'Rendering dynamic lists and understanding key props', category: 'react-basics' },
      { id: 'react-conditional', title: 'Conditional Rendering', description: 'Showing/hiding elements based on state and props', category: 'react-basics' }
    ]
  },
  {
    id: 'hooks',
    title: 'React Hooks',
    icon: Zap,
    description: 'Master React hooks for state management and side effects',
    items: [
      { id: 'use-state', title: 'useState Hook', description: 'Managing local component state with useState', category: 'hooks' },
      { id: 'use-effect', title: 'useEffect Hook', description: 'Handling side effects, API calls, and cleanup', category: 'hooks' },
      { id: 'use-context', title: 'useContext Hook', description: 'Consuming context for global state management', category: 'hooks' },
      { id: 'use-reducer', title: 'useReducer Hook', description: 'Managing complex state logic with useReducer', category: 'hooks' },
      { id: 'use-memo', title: 'useMemo and useCallback', description: 'Performance optimization with memoization', category: 'hooks' },
      { id: 'custom-hooks', title: 'Custom Hooks', description: 'Creating reusable logic with custom hooks', category: 'hooks' }
    ]
  },
  {
    id: 'routing',
    title: 'Routing & Navigation',
    icon: MapPin,
    description: 'Build single-page applications with client-side routing',
    items: [
      { id: 'react-router', title: 'React Router Setup', description: 'Installing and configuring React Router for navigation', category: 'routing' },
      { id: 'routes', title: 'Routes and Links', description: 'Creating routes and navigation links', category: 'routing' },
      { id: 'nested-routes', title: 'Nested Routes', description: 'Building complex navigation structures', category: 'routing' },
      { id: 'protected-routes', title: 'Protected Routes', description: 'Implementing authentication-based routing', category: 'routing' },
      { id: 'route-params', title: 'Route Parameters', description: 'Handling dynamic routes and URL parameters', category: 'routing' }
    ]
  },
  {
    id: 'state-management',
    title: 'State Management',
    icon: Database,
    description: 'Learn advanced state management patterns and libraries',
    items: [
      { id: 'context-api', title: 'Context API', description: 'Global state management with React Context', category: 'state-management' },
      { id: 'redux', title: 'Redux Toolkit', description: 'Predictable state management with Redux', category: 'state-management' },
      { id: 'zustand', title: 'Zustand', description: 'Lightweight state management alternative', category: 'state-management' },
      { id: 'react-query', title: 'React Query/TanStack Query', description: 'Server state management and caching', category: 'state-management' },
      { id: 'state-patterns', title: 'State Management Patterns', description: 'Best practices for organizing application state', category: 'state-management' }
    ]
  },
  {
    id: 'styling',
    title: 'Styling & UI',
    icon: Globe,
    description: 'Master different approaches to styling React applications',
    items: [
      { id: 'css-modules', title: 'CSS Modules', description: 'Scoped CSS with CSS Modules', category: 'styling' },
      { id: 'styled-components', title: 'Styled Components', description: 'CSS-in-JS with styled-components', category: 'styling' },
      { id: 'tailwind', title: 'Tailwind CSS', description: 'Utility-first CSS framework', category: 'styling' },
      { id: 'ui-libraries', title: 'UI Component Libraries', description: 'Using libraries like Material-UI, Ant Design, Chakra UI', category: 'styling' },
      { id: 'responsive-design', title: 'Responsive Design', description: 'Creating mobile-first, responsive layouts', category: 'styling' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Concepts',
    icon: GitBranch,
    description: 'Advanced patterns and optimization techniques',
    items: [
      { id: 'performance', title: 'Performance Optimization', description: 'React.memo, useMemo, useCallback, and code splitting', category: 'advanced' },
      { id: 'testing', title: 'Testing', description: 'Unit testing with Jest and React Testing Library', category: 'advanced' },
      { id: 'error-boundaries', title: 'Error Boundaries', description: 'Handling errors gracefully in React applications', category: 'advanced' },
      { id: 'ssr', title: 'Server-Side Rendering', description: 'Next.js and server-side rendering concepts', category: 'advanced' },
      { id: 'typescript', title: 'TypeScript with React', description: 'Adding type safety to React applications', category: 'advanced' },
      { id: 'patterns', title: 'Design Patterns', description: 'Higher-order components, render props, and compound components', category: 'advanced' }
    ]
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedTheme ? savedTheme === 'dark' : systemPrefersDark);

    // Load completed items
    const savedProgress = localStorage.getItem('react-roadmap-progress');
    if (savedProgress) {
      setCompletedItems(JSON.parse(savedProgress));
    }

    // Load expanded sections
    const savedExpanded = localStorage.getItem('react-roadmap-expanded');
    if (savedExpanded) {
      setExpandedSections(JSON.parse(savedExpanded));
    } else {
      // Default to first section expanded
      setExpandedSections(['fundamentals']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('react-roadmap-progress', JSON.stringify(completedItems));
  }, [completedItems]);

  useEffect(() => {
    localStorage.setItem('react-roadmap-expanded', JSON.stringify(expandedSections));
  }, [expandedSections]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleCompletion = (itemId: string) => {
    setCompletedItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredRoadmapData = roadmapData.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const totalItems = roadmapData.reduce((acc, section) => acc + section.items.length, 0);
  const completedCount = completedItems.length;
  const progressPercentage = (completedCount / totalItems) * 100;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
      } border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                React Roadmap
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                {roadmapData.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                      darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Complete React.js Roadmap
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Master React.js from fundamentals to advanced concepts with this comprehensive learning path
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Progress
              </span>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {completedCount}/{totalItems} ({Math.round(progressPercentage)}%)
              </span>
            </div>
            <div className={`w-full bg-gray-200 rounded-full h-3 ${darkMode ? 'bg-gray-700' : ''}`}>
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              darkMode ? 'text-gray-400' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search roadmap items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
        </div>

        {/* Roadmap Sections */}
        <div className="space-y-6">
          {filteredRoadmapData.map((section, index) => {
            const IconComponent = section.icon;
            const isExpanded = expandedSections.includes(section.id);
            const sectionCompletedCount = section.items.filter(item => completedItems.includes(item.id)).length;
            const sectionProgress = (sectionCompletedCount / section.items.length) * 100;
            
            return (
              <div
                key={section.id}
                id={section.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm' 
                    : 'bg-white/70 border-gray-200 backdrop-blur-sm'
                } ${isExpanded ? 'shadow-xl' : 'shadow-md'}`}
              >
                <div
                  className={`p-6 cursor-pointer transition-all duration-200 ${
                    isExpanded ? 'pb-4' : ''
                  }`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {section.title}
                        </h3>
                        <p className={`text-sm mt-1 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {section.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {sectionCompletedCount}/{section.items.length}
                        </div>
                        <div className={`w-16 bg-gray-200 rounded-full h-2 mt-1 ${
                          darkMode ? 'bg-gray-700' : ''
                        }`}>
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${sectionProgress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className={`transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className={`w-5 h-5 ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => {
                        const isCompleted = completedItems.includes(item.id);
                        
                        return (
                          <div
                            key={item.id}
                            className={`flex items-start space-x-3 p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                              darkMode 
                                ? 'bg-gray-700/50 hover:bg-gray-700/70' 
                                : 'bg-gray-50 hover:bg-gray-100'
                            } ${isCompleted ? 'opacity-75' : ''}`}
                            onClick={() => toggleCompletion(item.id)}
                          >
                            <div className="flex-shrink-0 mt-1">
                              {isCompleted ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <Circle className={`w-5 h-5 ${
                                  darkMode ? 'text-gray-400' : 'text-gray-400'
                                }`} />
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-medium ${
                                darkMode ? 'text-white' : 'text-gray-900'
                              } ${isCompleted ? 'line-through' : ''}`}>
                                {item.title}
                              </h4>
                              <p className={`text-sm mt-1 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {filteredRoadmapData.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No roadmap items found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;