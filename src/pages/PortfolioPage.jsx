import { useState, useMemo } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import { Search, X } from 'lucide-react'

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  // useMemo ensures filtered list updates immediately on every state change
  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchCat    = active === 'All' || p.category === active
      const matchSearch = !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      return matchCat && matchSearch
    })
  }, [active, search])

  const clearFilters = () => {
    setActive('All')
    setSearch('')
  }

  const hasFilters = active !== 'All' || search !== ''

  return (
    <div className="page-enter pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label"><span className="w-6 h-px bg-cyan-400 inline-block" /> What I've Built</p>
          <h1 className="section-title">Portfolio</h1>
          <p className="font-body text-slate-400 mt-3 max-w-xl">
            {projects.length} projects built across fintech, e-commerce, and SaaS.
            Each one represents a real problem solved with clean code.
          </p>
        </div>

        {/* Filter bar — NO reveal class here so it never hides */}
        <div className="sticky top-16 z-30 bg-slate-950/95 backdrop-blur-md py-4 mb-8 border-b border-slate-800/50">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

            {/* Search */}
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 w-full sm:max-w-xs">
              <Search className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-transparent font-body text-sm text-white outline-none placeholder:text-slate-600 flex-1"
              />
              {search && (
                <button onClick={() => setSearch('')} className="text-slate-500 hover:text-white transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200 ${
                    active === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Clear button */}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 font-mono text-xs text-red-400 hover:text-red-300 transition-colors ml-auto flex-shrink-0"
              >
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <p className="font-mono text-xs text-slate-600 mb-6">
          Showing <span className="text-cyan-400">{filtered.length}</span> / {projects.length} projects
          {hasFilters && (
            <span className="text-slate-600">
              {active !== 'All' && ` · Category: "${active}"`}
              {search && ` · Search: "${search}"`}
            </span>
          )}
        </p>

        {/* Grid — cards do NOT use reveal class (avoids observer re-run issues) */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filtered.map((project) => (
              // key changes force React to remount cards when filter changes
              <div key={`${project.id}-${active}-${search}`} className="animate-fade-up">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="font-display text-xl text-slate-400 mb-2">No projects found</h3>
            <p className="font-body text-sm text-slate-600 mb-5">
              No projects match "{search || active}". Try clearing your filters.
            </p>
            <button onClick={clearFilters} className="btn-outline text-sm">
              Clear Filters
            </button>
          </div>
        )}

        
      </div>
    </div>
  )
}
