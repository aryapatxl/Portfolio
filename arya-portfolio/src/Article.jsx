import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Article.css';

function pickPullQuote(project) {
  if (project.pullQuote) return project.pullQuote;
  return project.tagline;
}

function Article({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="article-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — full article`}
        >
          <motion.article
            className="article-page"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 60, opacity: 0, rotateX: -8 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: 60, opacity: 0, rotateX: -8 }}
            transition={{ type: 'spring', stiffness: 150, damping: 22 }}
          >
            <button className="article-close" onClick={onClose} aria-label="Close article">
              ×
            </button>

            <div className="article-folio">
              <span>The Patel Times</span>
              <span>{project.section || 'Features'} · A1</span>
            </div>
            <div className="article-rule article-rule-double" />

            <header className="article-header">
              <div className="article-kicker">{project.subtitle}</div>
              <h1 className="article-headline">{project.title}</h1>
              <p className="article-deck">{project.tagline}</p>
              <div className="article-byline">
                <span>
                  By <strong>Arya Patel</strong>
                </span>
                <span className="article-byline-role">{project.role}</span>
              </div>
              <div className="article-rule" />
            </header>

            <div className="article-body">
              {project.cover && (
                <figure className="article-figure">
                  <img src={project.cover} alt={project.title} />
                  <figcaption>
                    <strong>{project.title}.</strong> {project.tagline}
                  </figcaption>
                </figure>
              )}
              {!project.cover && (
                <figure className="article-figure article-figure-placeholder">
                  <div
                    className="article-placeholder"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${project.coverAccent || '#a02633'} 0%, ${project.coverColor || '#d4b27a'} 70%)`,
                    }}
                  >
                    <span>{project.coverLabel || project.title}</span>
                  </div>
                  <figcaption>
                    <strong>Above:</strong> {project.tagline}
                  </figcaption>
                </figure>
              )}

              <div className="article-columns">
                <p>
                  <span className="article-dropcap">{project.problem.charAt(0)}</span>
                  {project.problem.slice(1)}
                </p>

                <blockquote className="article-pullquote">"{pickPullQuote(project)}"</blockquote>

                <h3 className="article-subhead">What was built</h3>
                <ul className="article-list">
                  {project.build.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                <h3 className="article-subhead">On the tech</h3>
                <p className="article-stack">
                  {project.stack.map((s, i) => (
                    <span key={s}>
                      <strong>{s}</strong>
                      {i < project.stack.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </p>

                {project.links && project.links.length > 0 && (
                  <p className="article-jump">
                    {project.links.map((link, i) =>
                      link.to ? (
                        <Link key={i} to={link.to} className="article-jump-link">
                          {link.label} →
                        </Link>
                      ) : (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="article-jump-link"
                        >
                          {link.label} →
                        </a>
                      )
                    )}
                  </p>
                )}

                <p className="article-end">— 30 —</p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Article;
