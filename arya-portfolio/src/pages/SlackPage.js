import React from 'react';
import './projects.css';
import '../App.css'
import SlackBotDemo from "../videos/SlackBotDemo.mov"

function SlackPage() {
  return (
    <div style={{ backgroundColor: '#584566', minHeight: '100vh', overflow: 'hidden', color: '#f1eee9' }} >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header Proj-App-header" role="banner">
        <h1 style={{ color: '#f1eee9' }}>
            Diversity, Equity & Inclusion SlackBot
        </h1>
      </header>
      <main>
        <section class="experience-block project-block">
            <div>
                <section class="about-block">
                    <h1 style={{ color: '#f1eee9' }} class="section-header">About</h1>
                    <div style={{marginLeft: "10.1%"}} class="experience-item">
                        <ul>
                            <li style={{ color: '#f1eee9' }}>With the presence of international students in universities, adapting to professional and DEl-Oriented language can be a <b>significant challenge</b>. As a project for CHAOSS, I work alongside a team to solve this issue. Our <b>solution</b> is a Slack Bot that assists in correcting and guiding students toward the appropriate language use by creating a friendly and inclusive word checking bot that will check and detect messages that slack users send.</li>
                        </ul>
                    </div>    
                </section>
            </div>
            
            <section class="techstack-block">
                <h1 style={{ color: '#f1eee9' }} class="section-header">Tech Stack</h1>
                <div style={{marginLeft: "10.2%"}} class="about-p experience-item">
                    <ul>
                        <p style={{ color: '#f1eee9'}}><b>User-Interface:</b> Slack</p>
                        <p style={{ color: '#f1eee9'}}><b>Backend:</b> Bolt.js</p>
                        <p style={{ color: '#f1eee9'}}><b>External API's:</b> Alex.js, Free Dictionary API</p>
                        
                    </ul>          
                </div>    
            </section>

            <section class="Demo-block">
                <h1 class="section-header">Demo Video</h1>
                <div>
                    <video class="Video" controls>
                    <source src={SlackBotDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>    
            </section>
            <section>
                <div style={{marginLeft: "10.1%"}} class="experience-item">
                    <p style={{ color: '#f1eee9' }} > Note: This project was developed for an external stakeholder for exclusive use. As a result, the code is stored in a private GitHub repository, and the project link is not publicly accessible.</p>
                </div>    
            </section>
        </section>

      </main>
    </div>
  );
}

export default SlackPage;