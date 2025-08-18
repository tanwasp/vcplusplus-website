'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageGuard from '../components/PageGuard';
import SectionGuard from '../components/SectionGuard';
import { projects, projectCategories, Project } from '../../data/projects';
import { getProjectStatusColor, getProjectCategoryColor } from '../../utils/colors';
import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const featuredProjects = projects.filter(project => project.featured);


  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectCategoryColor(project.category)}`}>
            {project.category}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-light-gray text-gray-900 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Team:</h4>
        <p className="text-sm text-gray-600">{project.teamMembers.join(', ')}</p>
      </div>
      
      <div className="flex gap-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-maroon hover:text-maroon/80 font-medium text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-maroon hover:text-maroon/80 font-medium text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );

  return (
    <PageGuard pageKey="projects">
      <div className="min-h-screen bg-background">
      <Navigation currentPage="projects" />

      <SectionGuard pageKey="projects" sectionKey="hero">
        {/* Hero Section */}
        <section className="bg-maroon text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore the innovative projects built by our community members
            </p>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="projects" sectionKey="featured-projects">
        {/* Featured Projects */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Highlighting our most impressive work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="projects" sectionKey="all-projects">
        {/* All Projects */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600">Browse our complete project portfolio</p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon"
              >
                {projectCategories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-900 mb-2">
                Status
              </label>
              <select
                id="status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="in-progress">In Progress</option>
                <option value="planning">Planning</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found matching your filters.</p>
            </div>
          )}
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="projects" sectionKey="project-cta">
        {/* Join Projects CTA */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Your Own Project</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have an idea for a project? Join VC++ and collaborate with fellow developers to bring your ideas to life.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-maroon text-white px-8 py-3 rounded-lg font-semibold hover:bg-maroon/90 transition-colors w-full sm:w-auto">
              Propose a Project
            </button>
            <button className="border-2 border-maroon text-maroon px-8 py-3 rounded-lg font-semibold hover:bg-maroon hover:text-white transition-colors w-full sm:w-auto">
              Join Existing Project
            </button>
          </div>
        </div>
        </section>
      </SectionGuard>

      <Footer />
      </div>
    </PageGuard>
  );
}