
import './App.css';
import "@fontsource/black-han-sans"
import githubLogo from './images/githubLogo.png'
import LinkedinLogo from './images/LinkedinLogo.png'
import CameraIcon from './images/CameraIcon.png'
import EmailIcon from './images/emailIcon.png'
import RedArrow1 from './images/redArrow1.png'
import AryaText from './images/Arya-rans.png'
import SwipeToSlide from "./Carousel";
import Arrow2 from './images/Arrow2.png'
import Arrow3 from './images/Arrow3.png'
import Resume from './images/resumeImg.png'
import sparkIcon from './images/spark.png'
import pinIcon from './images/pin.png'
import relIcon from'./images/reli.png'
import enerIcon from'./images/energy.png'
import junIcon from './images/juni.png'
import resIcon from './images/res.png'
import cursorIcon from './images/cursor.png'
import prodIcon from './images/prod.png'
import camera2 from './images/camera.png'

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header" role="banner">
        <img src={AryaText} alt="Arya Patel" className="arya-header" />
        <div className="button-container">
          <a href="https://github.com/aryapatxl" target="_blank" rel="github">
            <img src={githubLogo} alt="GitHub Logo" className="image-button" />
          </a>
          <a href="mailto:aryaxrp@gmail.com" target="_blank" rel="github">
            <img src={EmailIcon} alt="Email Logo" className=" image-button email-button" />
          </a>
          <a href="https://www.linkedin.com/in/aryapatel-/" target="_blank" rel="github">
            <img src={LinkedinLogo} alt="GitHub Logo" className="image-button l-button" />
          </a>
          <a href="https://aryapatelx.wordpress.com/" target="_blank" rel="github">
            <img src={CameraIcon} alt="Camera Logo" className=" image-button camera-button" />
          </a>
          <a href="https://drive.google.com/file/d/1THy3eWfh77Z_D0cZRWmmeyhCWU1bX0U6/view?usp=share_link" target="_blank" rel="github">
            <img src={Resume} alt="Resume Link" className=" image-button resume-button" />
          </a>
        </div>
        <img src={RedArrow1} alt="Red Arrow" className="red-arrow" />

      </header>
      <main>

    
      <section class="about-block">
    <h1 class="about-header section-header">About</h1>

    <div class="experience-item">
      <i class="fas fa-code"></i>
      
      <div>
        
        <p> Hi! I'm Arya. I am an aspiring professional with diverse experience in software engineering, project management and data science.    </p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="projects-block">
  <h1 class="section-header proj-header ">Projects</h1>
    <SwipeToSlide/>
  </section>

  <section class="experience-block">
  <h1 class="section-header E head">Experience</h1>
  <img src={Arrow2} alt="LOVED client work" className="Arrow2" />

  <div class="experience-item">
    <i class="fas fa-project-diagram"></i>
    <a href="https://www.bu.edu/spark/" target="_blank" class="experience-link">
      <img src={sparkIcon} alt="Spark" className="exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Project Manager, Boston University, Spark!
        <p class="exp-dates">Sep 2023 - May 2024</p>
      </h2>
      <ul>
        <li>Managed data science projects for NBC, The Grio & The City of Boston. Facilitated client interactions and chaired meetings, ensuring clear communication and alignment on project goals. Guided teams using Agile methodologies to develop and execute a strategic roadmap for technical projects.</li>
      </ul>
    </div>
  </div>

  <div class="experience-item first-exp">
    <i class="fas fa-code"></i>
    <a href="https://www.glocal.io" target="_blank" class="experience-link">
      <img src={pinIcon} alt="Pin" className="exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Software Engineering Intern, Glocal
        <p class="exp-dates">Sep 2023 - Jan 2024</p>
      </h2>
      <ul>
        <li>Developed and implemented debugging strategies to build out features in mobile and web applications using React and React Native. Improved overall app functionality, reliability, and enhanced UI/UX design.</li>
      </ul>
    </div>
  </div>

  <div class="experience-item">
    <i class="fas fa-laptop-code"></i>
    <a href="https://reliance.com/" target="_blank" class="experience-link">
      <img src={relIcon} alt="Pin" className="rel-button exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Software Engineering Intern, Reliance Inc.
        <p class="exp-dates">Jun 2023 - Sep 2023</p>
      </h2>
      <ul>
        <li class="peak">Devised creative solutions to debug and develop the company's Web API's, E-commerce store, and perform unit testing, contributing to the overall functionality and performance of the systems. Collaborated with a skilled development team, engaging in daily meetings to assess project progress, identify areas for improvement, and ensure efficient delivery of high-quality software solutions.</li>
      </ul>
    </div>
  </div>

  <div class="experience-item">
    <i class="fas fa-database"></i>
    <a href="https://visualizingenergy.org" target="_blank" class="experience-link">
      <img src={enerIcon} alt="Pin" className="exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Data Analyst Intern, Institute for Global Sustainability
        <p class="exp-dates">Mar 2023 - May 2023</p>
      </h2>
      <ul>
        <li>Spearheaded the implementation of Python-based data processing techniques, resulting in a remarkable 55% increase in processing efficiency. Employed advanced data cleaning, filtering, aggregation, and merging methods to handle large volumes of raw data effectively. Developed over 30 interactive data visualizations related to environmental and social justice using Flourish, enabling stakeholders to gain valuable insights and make data-driven decisions.</li>
      </ul>
    </div>
    <img src={Arrow3} alt="First Internship" className="Arrow3" />
  </div>

  <div class="experience-item">
    <i class="fas fa-project-diagram"></i>
    <a href="https://junilearning.com/" target="_blank" class="experience-link">
      <img src={junIcon} alt="Pin" className=" exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Computer Science Instructor, Juni Learning
        <p class="exp-dates">June 2022 - May 2023</p>
      </h2>
      <ul>
        <li>Authored customized lesson plans by adapting to over 10 students’ learning styles and backgrounds, resulting in a 100% pass rate for programming assessments and courses in Python, Java, and Scratch.</li>
      </ul>
    </div>
  </div>

  <div class="experience-item">
    <i class="fas fa-search"></i>
    <a href="https://www.bu.edu/questrom/?utm_source=google&utm_medium=cpc&utm_campaign=bgquestrom&utm_content=questrom&utm_term=questrom-brand-terms&gad_source=1&gbraid=0AAAAAD3g9v-xFH9mCVLr-vqUkIXYHmC01&gclid=Cj0KCQjwiOy1BhDCARIsADGvQnBbEZRnQzQ8gQYRHyBojMtAsro2SabhJj9Et8p0yH30GUgVvBs1XkkaApgPEALw_wcB" target="_blank" class="experience-link">
      <img src={resIcon} alt="Pin" className="exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Research Assistant, Questrom School of Business
        <p class="exp-dates">Jun 2022 - Dec 2022</p>
      </h2>
      <ul>
        <li>Collaborated closely with a Ph.D. student to optimize an NLP algorithm, resulting in significant performance and speed improvements. Leveraged analytical skills and attention to detail to fine-tune the algorithm. Conducted extensive research and data tagging of over 7000 lines of content from top companies, contributing to the development of high-quality training datasets for machine learning applications.</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <h1 class="section-header head FellowSpace">Fellowships</h1>

  <div class="experience-item">
    <i class="fas fa-code"></i>
    <a href="https://headstarter.co" target="_blank" class="experience-link">
      <img src={cursorIcon} alt="cursor" className="exp-button head-button" />
    </a>
    <div className="exp-margin-b">
      
      <h2 class="experience-title">
        Software Engineering Fellowship, Headstarter AI
        <p class="exp-dates">2024</p>
      </h2>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>

  <div class="experience-item">
    <i class="fas fa-code"></i>
    <a href="https://jemi.so/surbhilately" target="_blank" class="experience-link">
      <img src={prodIcon} alt="cursor" className="exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Product Management Fellowship, SurbhiLately PM Fellowship
        <p class="exp-dates">2022</p>
      </h2>
      <ul>
        <li>Applied practical product management skills to conduct in-depth case studies, demonstrating a deep understanding of market dynamics and user needs. Developed innovative solutions and strategies to address complex business challenges effectively.</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <h1 class="section-header head FellowSpace">Other</h1>

  <div class="experience-item">
    <i class="fas fa-code"></i>
    <a href="" target="_blank" class="experience-link">
      <img src={camera2} alt="cursor" className="exp-button" />
    </a>
    <div className="exp-margin-b">
      <h2 class="experience-title">
        Freelance Photographer
        <p class="exp-dates">2024</p>
      </h2>
      <ul>
        <li>Started a graduation photography business, using social media to advertise.</li>
      </ul>
    </div>
  </div>
</section>

  <section>
    <h1 class="section-header head FellowSpace">Education</h1>

    <div class="experience-item">
      <i class="fas fa-code"></i>
      <div>
        <h2>Bachelors of Arts in Computer Science, Boston University</h2>

        <ul>
          <li>Minored in Business Administration & Management</li>
        </ul>
      </div>
    </div>

    <div class="experience-item">
      <i class="fas fa-code"></i>
      <div>
        <h2>High School Diploma & IB Diploma, Sunny Hills High School </h2>


      </div>
    </div>
  </section>

  
      </main>
    </div>
  );
}

export default App;