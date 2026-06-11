import './App.css';
import '@fontsource/black-han-sans';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/400-italic.css';
import '@fontsource/lora/700.css';
import '@fontsource/pt-serif/400.css';
import '@fontsource/pt-serif/400-italic.css';
import '@fontsource/pt-serif/700.css';
import { motion } from 'framer-motion';
import Masthead from './Masthead';
import FrontPage from './FrontPage';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function NewsItem({ kicker, headline, deck, dateline, byline, body, accent }) {
  return (
    <motion.article
      className="news-item"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="news-kicker-row">
        <span className="news-kicker">{kicker}</span>
        {accent && <span className="news-accent">{accent}</span>}
      </div>
      <h3 className="news-headline">{headline}</h3>
      {deck && <p className="news-deck">{deck}</p>}
      <p className="news-byline">
        By <strong>Arya Patel</strong>
        {byline && <span className="news-byline-role"> · {byline}</span>}
        {dateline && <span className="news-dateline"> — {dateline}</span>}
      </p>
      <p className="news-body">{body}</p>
    </motion.article>
  );
}

function SectionHeader({ id, label, children }) {
  return (
    <div id={id} className="paper-section-head">
      <div className="paper-section-rule" />
      <h2 className="paper-section-label">{label}</h2>
      <div className="paper-section-rule" />
      {children && <p className="paper-section-deck">{children}</p>}
    </div>
  );
}

const skills = {
  Languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  Frameworks: ['React', 'Angular', 'Next.js', 'Node.js', 'Express', 'TanStack', 'React Native', 'Firebase'],
  'AI & Data': ['GPT-4', 'GROQ', 'Claude', 'RAG', 'NLP', 'Prompt Engineering', 'Hugging Face', 'Flourish'],
  Infrastructure: ['AWS', 'Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'Vercel', 'PostHog'],
  Practice: ['Git', 'Conductor', 'REST APIs', 'Agile', 'Figma', 'User Research'],
};

function App() {
  return (
    <div className="newsprint">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Masthead />

      <main className="paper">
        {/* ─── EDITOR'S DESK ─────────────────────────────────── */}
        <section id="desk" className="paper-section">
          <SectionHeader label="From the Editor's Desk" />
          <motion.article
            className="desk"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="desk-kicker">A NOTE FROM THE EDITOR</div>
            <h2 className="desk-headline">A reporter who learned to write to the machine.</h2>
            <p className="desk-byline">
              By <strong>Arya Patel</strong> · <span>Editor-in-Chief, Software Engineer</span>
            </p>
            <div className="desk-body">
              <p>
                <span className="desk-dropcap">I</span> grew up convinced I'd be a journalist. I loved the lede — that
                first sentence whose only job is to make you keep reading — and I loved that a good story could change
                what someone did on Monday morning. Then I found code, and discovered the lede was still the job: write
                the first line so the rest writes itself.
              </p>
              <p>
                These days I ship software at <strong>Barclays</strong> on a regulatory data platform called Lighthouse,
                and I'm a founding engineer at <strong>Chaos</strong>, a dating app live on the App Store. I work across
                the stack, spend a lot of time near AI, and care a lot about how interfaces feel — the way a story cares
                about how it reads aloud.
              </p>
              <p className="desk-signoff">
                Welcome to the Patel Times. Today's front page is below.
              </p>
            </div>
          </motion.article>
        </section>

        {/* ─── FEATURES ──────────────────────────────────────── */}
        <section id="features" className="paper-section">
          <SectionHeader label="Features">click a story to read it in full</SectionHeader>
          <FrontPage />
        </section>

        {/* ─── CAREER BEAT ───────────────────────────────────── */}
        <section id="beat" className="paper-section">
          <SectionHeader label="Career Beat">Filed dispatches from where I've worked.</SectionHeader>
          <div className="news-grid">
            <NewsItem
              kicker="Now Reporting · Banking"
              headline="Arya Patel ships 50+ features on regulatory platform at Barclays."
              deck="Lighthouse goes from view-only tool to full-stack platform; first production CI/CD pipeline on BCP2 lands without a runbook."
              dateline="London"
              byline="Software Engineer · Feb 2025 – Present"
              accent="NEW"
              body="At Barclays, Patel has scaled Lighthouse — an internal regulatory data platform — from UI to full-stack, owning data display, add/edit and drafting using component-based architecture. She independently navigated OpenShift, Docker and Kubernetes to get the team's first production CI/CD pipeline on Barclays' internal BCP2 platform shipped from scratch. She also contributed to AskRex, an internal compliance chatbot backed by an AWS-hosted LLM retrieval pipeline, engineering prompts and shaping how data surfaces to users. On the side: Python scripts to clean post-trade data, and direct MS SQL queries to manage regulatory records."
            />
            <NewsItem
              kicker="Startup Desk · Consumer"
              headline="Founding engineer at dating app Chaos owns notifications from zero to production."
              deck="Live on the App Store, 6,000 downloads, and the AI agents are booking the dates now."
              dateline="Remote"
              byline="Founding Engineer · Jan 2025 – Present"
              accent="STARTUP"
              body="At Chaos, Patel engineered the notifications system end-to-end — defining use cases, designing the data model, and building delivery infrastructure from zero to production on a live App Store dating app with 6,000 downloads. She created AI agents on Browserbase to automate date reservations, collapsing a multi-step flow into one optimized interaction, and ships full-stack features and fixes across the codebase as a part-time team member. Impact extends beyond engineering: end-to-end audits that informed PostHog instrumentation, user testing sessions that translated into shipped features, and contributions to MVP scoping, marketing ideation and product direction."
            />
            <NewsItem
              kicker="Project Desk · Civic Data"
              headline="Spark! PM keeps 9 teams on the rails across NBC, The Grio and City of Boston."
              deck="Agile delivery, weekly client syncs, leadership presentations — Trello kept the trains running on time."
              dateline="Boston"
              byline="Project Manager · Sep 2023 – May 2024"
              body="Patel established Agile delivery across three client organizations — NBC, The Grio and the City of Boston — managing 9 cross-functional teams simultaneously and running sprint planning on Trello to keep data science projects on track from kickoff to delivery. She ran weekly client syncs, facilitated technical alignment between engineering and stakeholders, presented progress to leadership, and resolved blockers tailored to each client's unique needs."
            />
            <NewsItem
              kicker="Engineering Desk · E-commerce"
              headline="Reliance intern ships standalone Financial Calculator API while juggling live storefront."
              deck="20+ resolved issues, 10+ REST endpoints, and a healthier page-load story by the end of summer."
              dateline="Cypress, CA"
              byline="Software Engineering Intern · Jun 2023 – Sep 2023"
              body="At Reliance Inc., Patel resolved 20+ issues across an unfamiliar codebase and tech stack, created a Financial Calculator API with 10+ REST endpoints, and shipped it as a standalone service while integrating separate features into a live e-commerce platform. She optimized page-load performance through targeted bug fixes — building hands-on debugging skills with browser developer tools along the way."
            />
            <NewsItem
              kicker="Data Desk · Climate"
              headline="IGS intern turns climate datasets into 30+ public-facing visualizations."
              deck="Statistical analysis in Python supports an equitable energy transition; Flourish does the rest."
              dateline="Boston"
              byline="Data Science Intern · Mar 2023 – May 2023"
              body="At the Institute for Global Sustainability, Patel applied advanced statistical analysis across large datasets in Python to uncover insights supporting an equitable energy transition. She built 30+ interactive Flourish visualizations for public-facing data stories that directly supported published research."
            />
            <NewsItem
              kicker="Education Desk"
              headline="Juni Learning instructor posts 100% pass rate across Python, Java and Scratch students."
              deck="Custom lesson plans for 10+ students, each adapted to their own learning style."
              dateline="Remote"
              byline="Computer Science Instructor · Jun 2022 – May 2023"
              body="Patel authored customized lesson plans by adapting to over 10 students' learning styles and backgrounds, resulting in a 100% pass rate for programming assessments and courses in Python, Java and Scratch."
            />
            <NewsItem
              kicker="Research Desk · NLP"
              headline="Questrom research assistant tunes NLP algorithm with PhD lead, tags 7,000+ lines."
              deck="Performance and speed wins on the algorithm; high-quality training datasets for downstream ML."
              dateline="Boston"
              byline="Research Assistant · Jun 2022 – Dec 2022"
              body="Patel collaborated closely with a PhD student to optimize an NLP algorithm, delivering meaningful performance and speed improvements. She conducted extensive research and data tagging of 7,000+ lines of content from top companies, contributing to high-quality training datasets for ML applications."
            />
          </div>
        </section>

        {/* ─── FELLOWSHIPS ───────────────────────────────────── */}
        <section className="paper-section">
          <SectionHeader label="Fellowships & Programs" />
          <div className="news-grid news-grid-two">
            <NewsItem
              kicker="Fellowship · AI Engineering"
              headline="Headstarter AI fellowship: weekly AI builds, agentic workflows, fast iteration."
              dateline="Remote · 2024"
              byline="Software Engineering Fellow"
              body="Built and shipped AI-driven full-stack projects on a weekly cadence with a cohort of engineers — emphasis on prompt engineering, agentic workflows, and rapid iteration."
            />
            <NewsItem
              kicker="Fellowship · Product"
              headline="SurbhiLately PM fellowship: case studies on market dynamics, user needs."
              dateline="Remote · 2022"
              byline="PM Fellow"
              body="Applied practical PM skills to conduct in-depth case studies of market dynamics and user needs, and developed strategies to address complex business challenges."
            />
          </div>
        </section>

        {/* ─── CLASSIFIEDS (SKILLS) ──────────────────────────── */}
        <section id="classifieds" className="paper-section">
          <SectionHeader label="Classifieds">Available for hire, debate and good coffee.</SectionHeader>
          <motion.div
            className="classifieds"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="classifieds-ad">
                <div className="classifieds-ad-head">{group}</div>
                <p className="classifieds-ad-body">{items.join(' · ')}</p>
              </div>
            ))}
            <div className="classifieds-ad classifieds-ad-hire">
              <div className="classifieds-ad-head">Wanted</div>
              <p className="classifieds-ad-body">
                Curious engineers, generous reviewers, and anyone shipping something that has to feel right. Reach out
                at <strong>aryaxrp@gmail.com</strong>.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ─── THE RECORD ────────────────────────────────────── */}
        <section id="record" className="paper-section">
          <SectionHeader label="The Record">Where the formal stuff lives.</SectionHeader>
          <div className="record">
            <motion.div
              className="record-entry"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="record-label">Education</span>
              <h3>Bachelor of Arts in Computer Science, Boston University</h3>
              <p>Minor in Business Administration &amp; Management · Dean's List</p>
            </motion.div>
            <motion.div
              className="record-entry"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="record-label">Secondary</span>
              <h3>IB Diploma · Sunny Hills High School</h3>
            </motion.div>
            <motion.div
              className="record-entry"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="record-label">Arts &amp; Style</span>
              <h3>Freelance Photographer (2024)</h3>
              <p>
                Started a graduation photography business, growing it through social media.{' '}
                <a
                  href="https://aryapatelx.wordpress.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="record-link"
                >
                  See the portfolio →
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── COLOPHON / FOOTER ─────────────────────────────── */}
        <footer className="paper-colophon">
          <div className="paper-colophon-rule" />
          <p>
            <strong>The Patel Times</strong> · Published from a single laptop, served with caffeine.
          </p>
          <p>
            Set in <em>Playfair Display</em> and <em>PT Serif</em>. Edited and engineered by Arya Patel.{' '}
            <span aria-hidden="true">— 30 —</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
