import React from 'react';
import githubLogo from './images/githubLogo.png';
import LinkedinLogo from './images/LinkedinLogo.png';
import CameraIcon from './images/CameraIcon.png';
import EmailIcon from './images/emailIcon.png';
import Resume from './images/resumeImg.png';
import './Masthead.css';

const TODAY = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// Vol = years since 2000 (her "founding year"-ish — easy to tweak)
const VOL = new Date().getFullYear() - 2000;
// Issue # — rough day-of-year, just for flavor
const startOfYear = new Date(new Date().getFullYear(), 0, 0);
const ISSUE = Math.floor((new Date() - startOfYear) / 86400000);

function Masthead() {
  return (
    <header className="masthead" role="banner">
      <div className="masthead-topline">
        <span>Vol. {VOL.toString().padStart(2, '0')}</span>
        <span className="masthead-topline-tagline">All the news that's fit to commit</span>
        <span>No. {ISSUE.toString().padStart(3, '0')}</span>
      </div>

      <div className="masthead-rule masthead-rule-double" aria-hidden="true" />

      <h1 className="masthead-title">
        <span className="masthead-the">The</span>
        <span className="masthead-name">Patel Times</span>
      </h1>

      <div className="masthead-rule" aria-hidden="true" />

      <div className="masthead-dateline">
        <span>{TODAY}</span>
        <span className="masthead-dateline-loc">BOSTON · LONDON · ONLINE EDITION</span>
        <span>Price: Free · Always</span>
      </div>

      <div className="masthead-rule masthead-rule-double" aria-hidden="true" />

      <nav className="masthead-nav" aria-label="Sections">
        <a href="#desk" className="masthead-section">Editor's Desk</a>
        <span className="masthead-bullet">•</span>
        <a href="#features" className="masthead-section">Features</a>
        <span className="masthead-bullet">•</span>
        <a href="#beat" className="masthead-section">Career Beat</a>
        <span className="masthead-bullet">•</span>
        <a href="#classifieds" className="masthead-section">Classifieds</a>
        <span className="masthead-bullet">•</span>
        <a href="#record" className="masthead-section">The Record</a>
      </nav>

      <div className="masthead-rule" aria-hidden="true" />

      <div className="masthead-contact">
        <a href="https://github.com/aryapatxl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="mailto:aryaxrp@gmail.com" aria-label="Email">
          <img src={EmailIcon} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/aryapatel-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={LinkedinLogo} alt="LinkedIn" />
        </a>
        <a href="https://aryapatelx.wordpress.com/" target="_blank" rel="noopener noreferrer" aria-label="Photography portfolio">
          <img src={CameraIcon} alt="Photography" />
        </a>
        <a
          href="https://drive.google.com/file/d/1THy3eWfh77Z_D0cZRWmmeyhCWU1bX0U6/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <img src={Resume} alt="Resume" />
        </a>
      </div>
    </header>
  );
}

export default Masthead;
