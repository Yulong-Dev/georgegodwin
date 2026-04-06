import { ExternalLink, Github, Tag, Lock, EyeOff } from 'lucide-react'

export default function ProjectCard({ project, featured = false }) {
  const { title, description, image, liveUrl, githubUrl, tags, category, isPrivate } = project

  const hasLive   = liveUrl   && liveUrl   !== '#'
  const hasGithub = githubUrl && githubUrl !== '#'

  return (
    <div className={`group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col ${featured ? '' : ''}`}>

      {/* Image */}
      <div className="relative overflow-hidden h-48">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <div className="text-center">
              <Tag className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="font-mono text-xs text-slate-600">No image yet</p>
              <p className="font-mono text-xs text-slate-700 mt-1">Add image URL in projects.js</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 font-mono text-xs px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-cyan-400">
          {category}
        </span>

        {/* Link icons overlay — hidden entirely when isPrivate */}
        {!isPrivate && (
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {hasLive && (
              <a
                href={liveUrl}
                target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-950/90 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-950 text-white transition-all"
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {hasGithub && (
              <a
                href={githubUrl}
                target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-950/90 border border-slate-700 flex items-center justify-center hover:bg-slate-700 text-white transition-all"
                title="GitHub Repo"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

        {/* Private badge on image */}
        {isPrivate && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-slate-950/90 border border-slate-600 text-slate-400">
            <Lock className="w-3 h-3" /> Private
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
          {title}
        </h3>
        <p className="font-body text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">

          {/* Live link */}
          {isPrivate ? (
            <span className="flex items-center gap-1.5 text-xs font-body text-slate-600">
              <EyeOff className="w-3.5 h-3.5" /> Links Hidden
            </span>
          ) : hasLive ? (
            <a
              href={liveUrl}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-body font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs font-body text-slate-600">
              <ExternalLink className="w-3.5 h-3.5" /> Not Live
            </span>
          )}

          {/* GitHub link */}
          {!isPrivate && (
            hasGithub ? (
              <a
                href={githubUrl}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-body font-semibold text-slate-400 hover:text-white transition-colors ml-auto"
              >
                <Github className="w-3.5 h-3.5" /> Source Code
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-xs font-body text-slate-600 ml-auto">
                <Lock className="w-3.5 h-3.5" /> Private Repo
              </span>
            )
          )}

        </div>
      </div>
    </div>
  )
}
