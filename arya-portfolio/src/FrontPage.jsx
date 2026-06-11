import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Article from './Article';
import projects from './projectsData';
import './FrontPage.css';

function Story({ project, onOpen, index }) {
  return (
    <motion.article
      className="fp-story"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(project);
        }
      }}
      aria-label={`Open article: ${project.title}`}
    >
      <div className="fp-kicker">{project.subtitle}</div>
      <h2 className="fp-headline">{project.title}</h2>
      <p className="fp-deck">{project.tagline}</p>
      <div className="fp-photo">
        {project.cover ? (
          <img src={project.cover} alt={project.title} />
        ) : (
          <div
            className="fp-photo-placeholder"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${project.coverAccent || '#a02633'} 0%, ${project.coverColor || '#d4b27a'} 70%)`,
            }}
          >
            <span>{project.coverLabel || project.title}</span>
          </div>
        )}
      </div>
      <p className="fp-caption">
        <strong>{project.title}.</strong> {project.tagline}
      </p>
      <p className="fp-byline">
        By <strong>Arya Patel</strong> · <span className="fp-byline-role">{project.role}</span>
      </p>
      <p className="fp-jump">Read full story →</p>
    </motion.article>
  );
}

function FrontPage() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="fp">
        <div className="fp-grid">
          {projects.map((p, i) => (
            <Story key={p.id} project={p} onOpen={setActive} index={i} />
          ))}
        </div>
      </div>
      <Article project={active} onClose={() => setActive(null)} />
    </>
  );
}

export default FrontPage;
