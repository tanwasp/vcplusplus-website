'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageGuard from '../components/PageGuard';
import SectionGuard from '../components/SectionGuard';
import { resources, resourceCategories, difficultyLevels, Resource } from '../../data/resources';
import { getDifficultyColor } from '../../utils/colors';
import { useState } from 'react';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;
    const searchMatch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && difficultyMatch && searchMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tutorial':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'documentation':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'tool':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'course':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'practice':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'community':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };


  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-maroon">
            {getCategoryIcon(resource.category)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
              {resource.isPaid && (
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                  Paid
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-gray-600 text-sm">
          {resource.isExternal && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{resource.description}</p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {resource.tags.map((tag) => (
            <span key={tag} className="bg-light-gray text-gray-900 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={resource.url}
        target={resource.isExternal ? "_blank" : "_self"}
        rel={resource.isExternal ? "noopener noreferrer" : ""}
        className="inline-flex items-center gap-2 text-maroon hover:text-maroon/80 font-medium text-sm"
      >
        Visit Resource
        {resource.isExternal && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </a>
    </div>
  );

  return (
    <PageGuard pageKey="resources">
      <div className="min-h-screen bg-background">
      <Navigation currentPage="resources" />

      <SectionGuard pageKey="resources" sectionKey="hero">
        {/* Hero Section */}
        <section className="bg-maroon text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Resources</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Curated collection of tutorials, tools, and resources to accelerate your programming journey
            </p>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="resources" sectionKey="search-filters">
        {/* Search and Filters */}
      <section className="py-12 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-900 mb-2">
                  Search Resources
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maroon"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon"
                >
                  {resourceCategories.map((category) => (
                    <option key={category.key} value={category.key}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-900 mb-2">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon"
                >
                  {difficultyLevels.map((level) => (
                    <option key={level.key} value={level.key}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="resources" sectionKey="resources-grid">
        {/* Resources Grid */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-lg text-gray-600">
              Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-600 text-lg mb-4">No resources found matching your criteria.</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="text-maroon hover:text-maroon/80 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="resources" sectionKey="contribute-cta">
        {/* Contribute Resources CTA */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Know a Great Resource?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Help fellow developers by suggesting useful tutorials, tools, or learning materials to add to our collection.
          </p>
          <button className="bg-maroon text-white px-8 py-3 rounded-lg font-semibold hover:bg-maroon/90 transition-colors">
            Suggest a Resource
          </button>
        </div>
        </section>
      </SectionGuard>

      <Footer />
      </div>
    </PageGuard>
  );
}