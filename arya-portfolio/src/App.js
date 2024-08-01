
import './App.css';
import "@fontsource/black-han-sans"
import githubLogo from './images/githubLogo.png'
import LinkedinLogo from './images/LinkedinLogo.png'
import CameraIcon from './images/CameraIcon.png'
import EmailIcon from './images/emailIcon.png'
import RedArrow1 from './images/redArrow1.png'
import slackImage from './images/slackImage.jpg'
import SwipeToSlide from "./Carousel";
import Arrow2 from './images/Arrow2.png'
import Arrow3 from './images/Arrow3.png'
function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header" role="banner">
        <h1>Arya Patel</h1>
        <div className="button-container">
          <a href="https://github.com/aryapatxl" target="_blank" rel="github">
            <img src={githubLogo} alt="GitHub Logo" className="image-button" />
          </a>
          <a href="mailto:aryaxrp@gmail.com" target="_blank" rel="github">
            <img src={EmailIcon} alt="Email Logo" className=" image-button email-button" />
          </a>
          <a href="https://www.linkedin.com/in/aryapatel-/" target="_blank" rel="github">
            <img src={LinkedinLogo} alt="GitHub Logo" className="image-button" />
          </a>
          <a href="https://aryapatelx.wordpress.com/" target="_blank" rel="github">
            <img src={CameraIcon} alt="Camera Logo" className=" image-button camera-button" />
          </a>
        </div>
        <img src={RedArrow1} alt="Red Arrow" className="red-arrow" />

      </header>
      <main>
      <body>
    
      <section class="about-block">
    <h1 class="section-header">About</h1>

    <div class="experience-item">
      <i class="fas fa-code"></i>
      <div>
        <p> Hi! I'm Arya. I am an aspiring engineer, aspiring author and photographer.   </p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="projects-block">
  <h1 class="section-header">Projects</h1>
    <SwipeToSlide/>
  </section>

  <section class="experience-block" >
    <h1 class="section-header E">Experience</h1>
    <img src={Arrow2} alt="LOVED client work" className="Arrow2" />
    <div class="experience-item">
      <i class="fas fa-project-diagram"></i>
      <div>
        <h2>Project Manager, Boston University, Spark!</h2>
        <p>Sep 2023 - May 2024</p>
        <ul>
          <li>Managed data science projects for NBC, The Grio & The City of Boston. Facilitated client interactions and chaired meetings, ensuring clear communication and alignment on project goals. Guided teams using Agile methodologies to develop and execute a strategic roadmap for technical projects.</li>
        </ul>
      </div>
    </div>

    <div class="experience-item">
      <i class="fas fa-code"></i>
      <div>
        <h2>Software Engineering Intern, Glocal</h2>
        <p>Sep 2023 - Jan 2024</p>
        <ul>
          <li>Developed and implemented debugging strategies to build out features in mobile and web applications using React and React Native. Improved overall app functionality, reliability, and enhanced UI/UX design.</li>
        </ul>
      </div>
    </div>

    <div class="experience-item">
      <i class="fas fa-laptop-code"></i>
      <div>
        <h2>Software Engineering Intern, Reliance Inc.</h2>
        <p>Jun 2023 - Sep 2023</p>
        <ul>
          <li class="peak">Devised creative solutions to debug and develop the company's Web API's, E-commerce store, and perform unit testing, contributing to the overall functionality and performance of the systems. Collaborated with a skilled development team, engaging in daily meetings to assess project progress, identify areas for improvement, and ensure efficient delivery of high-quality software solutions.</li>
        </ul>
      </div>
    </div>

    <div class="experience-item">
      <i class="fas fa-database"></i>
      <div>
        <h2>Data Analyst Intern, Institute for Global Sustainability</h2>
        <p>Mar 2023 - May 2023</p>
        <ul>
          <li>Spearheaded the implementation of Python-based data processing techniques, resulting in a remarkable 55% increase in processing efficiency. Employed advanced data cleaning, filtering, aggregation, and merging methods to handle large volumes of raw data effectively. Developed over 30 interactive data visualizations related to environmental and social justice using Flourish, enabling stakeholders to gain valuable insights and make data-driven decisions.</li>
        </ul>
      </div>
      <img src={Arrow3} alt="First Internship" className="Arrow3" />
    </div>

    <div class="experience-item">
      <i class="fas fa-project-diagram"></i>
      <div>
        <h2>Computer Science Instructor, Juni Learning</h2>
        <p>June 2022 - May 2023</p>
        <ul>
          <li>	Authored customized lesson plans by adapting to over 10 students’ learning styles and backgrounds, resulting in a 100% pass rate for programming assessments and courses in Python, Java, and Scratch.</li>
        </ul>
      </div>
    </div>

    <div class="experience-item">
      <i class="fas fa-search"></i>
      <div>
        <h2>Research Assistant, Questrom School of Business</h2>
        <p>Jun 2022 - Dec 2022</p>
        <ul>
          <li>Collaborated closely with a Ph.D. student to optimize an NLP algorithm, resulting in significant performance and speed improvements. Leveraged analytical skills and attention to detail to fine-tune the algorithm. Conducted extensive research and data tagging of over 7000 lines of content from top companies, contributing to the development of high-quality training datasets for machine learning applications.</li>
          
        </ul>
      </div>
    </div>
  </section>

  <section>
    <h1 class="section-header FellowSpace">Fellowships</h1>

    <div class="experience-item">
      <i class="fas fa-code"></i>
      <div>
        <h2>Software Engineering Fellowship, Headstarter AI</h2>
        <p>July 2024 - Present</p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>

    <div class="experience-item">
      <i class="fas fa-code"></i>
      <div>
        <h2>Product Managemenet Fellowship, SurbhiLately PM Fellowship </h2>
        <p>July 2022 - Sep 2022</p>
        <ul>
          <li>Applied practical product management skills to conduct in-depth case studies, demonstrating a deep understanding of market dynamics and user needs. Developed innovative solutions and strategies to address complex business challenges effectively.</li>
        </ul>
      </div>
    </div>
  </section>
</body>
        
        
      </main>
    </div>
  );
}

export default App;