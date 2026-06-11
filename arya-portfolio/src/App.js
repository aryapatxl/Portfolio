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
                the stack, spend a lot of time near AI, and care about how interfaces feel — the way a story cares about
                how it reads aloud.
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
              headline="Patel ships 50+ features on Barclays' regulatory data platform."
              deck="From barebones interface to production-ready tool."
              dateline="London"
              byline="Software Engineer · Feb 2025 – Present"
              accent="NEW"
              body="Took Lighthouse from a barebones interface to something the team actually relies on — 50+ features, optimistic UI, the first real CI/CD pipeline on BCP2. Also helped shape AskRex, an internal compliance chatbot, and wrote a lot of Python and SQL on the side."
            />
            <NewsItem
              kicker="Startup Desk · Consumer"
              headline="Founding engineer at an early-stage consumer startup."
              deck="Across the stack on a live product."
              dateline="Remote"
              byline="Founding Engineer · Jan 2025 – Present"
              accent="STARTUP"
              body={
                <>
                  Founding engineer at an early-stage consumer startup. Shipping across the stack on a live product,
                  owning core systems end to end, and weighing in on the parts of building a company that have nothing
                  to do with code.{' '}
                  <a
                    href="https://apps.apple.com/us/app/chaos-curated-date-nights/id6753730431"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-body-link"
                  >
                    Download on the App Store →
                  </a>
                </>
              }
            />
            <NewsItem
              kicker="Project Desk · Civic Data"
              headline="PM keeps 9 teams on track across NBC, The Grio and City of Boston."
              deck="Agile, weekly syncs, one very busy Trello board."
              dateline="Boston"
              byline="Project Manager · Sep 2023 – May 2024"
              body="Ran Agile delivery for NBC, The Grio, and the City of Boston — nine teams, three clients, one Trello board doing a lot of heavy lifting. Weekly syncs, leadership updates, and the quiet work of unblocking people before they noticed they were stuck."
            />
            <NewsItem
              kicker="Engineering Desk · E-commerce"
              headline="Reliance intern ships a standalone Financial Calculator API."
              deck="20+ issues closed, 10+ REST endpoints, faster loads."
              dateline="Cypress, CA"
              byline="Software Engineering Intern · Jun 2023 – Sep 2023"
              body="Spent the summer in an unfamiliar codebase, closing 20+ issues and shipping a standalone Financial Calculator API with 10+ REST endpoints. Plus a quieter win: faster page loads and a permanent working friendship with the browser dev tools."
            />
            <NewsItem
              kicker="Data Desk · Climate"
              headline="IGS intern turns climate data into 30+ public visualizations."
              deck="Python and Flourish, for an equitable energy transition."
              dateline="Boston"
              byline="Data Science Intern · Mar 2023 – May 2023"
              body="Dug through climate datasets in Python for the Institute for Global Sustainability, hunting for what an equitable energy transition actually looks like in the numbers. Turned the findings into 30+ Flourish visualizations that ended up in published research."
            />
            <NewsItem
              kicker="Education Desk"
              headline="Juni instructor posts 100% pass rate across Python, Java and Scratch."
              deck="Custom lesson plans, 10+ students, zero fails."
              dateline="Remote"
              byline="Computer Science Instructor · Jun 2022 – May 2023"
              body="Taught 10+ kids Python, Java, and Scratch — custom lesson plans for each one, tuned to how they actually learned instead of how a textbook thought they should. The result: a 100% pass rate and a lot of small whiteboard victories."
            />
            <NewsItem
              kicker="Research Desk · NLP"
              headline="Questrom RA tunes an NLP algorithm and tags 7,000+ lines of data."
              deck="Faster algorithm, cleaner training data."
              dateline="Boston"
              byline="Research Assistant · Jun 2022 – Dec 2022"
              body="Teamed up with a PhD student to make an NLP algorithm faster and smarter. Tagged 7,000+ lines of corporate text along the way — the unglamorous foundation behind every model that ever ends up working."
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
