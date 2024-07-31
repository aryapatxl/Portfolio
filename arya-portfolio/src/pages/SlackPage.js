import React from 'react';
import './projects.css';

function SlackPage() {
  return (
    <div className="slack-bot">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-head">
        <h1>Diversity, Equity & Inclusion SlackBot</h1>
      </header>
      <main>
        <body>
        <section class="abouty">
            <h1 class="section-head">About</h1>
            <div class="about-p">
                <p>With the presence of international students in universities, adapting to professional and DEl-Oriented language can be a significant challenge. As a project for CHAOSS I work alongside a team to solve this issue. We created a Slack Bot that assists in correcting and guiding students toward the appropriate language use by creating a friendly and inclusive word checking bot that will check and detect messages that slack users send.</p>
            </div>    
        </section>

        <section class="techstack-block">
            <h1 class="section-head">Tech Stack</h1>
            <div class="about-p">
                <h2>Frontend</h2>
                <h2>Backend</h2>
            </div>    
        </section>
        <section class="Demo-block">
            <h1 class="section-head">Demo Video</h1>
            <div class="Video">

            </div>    
        </section>
        <section>
            <div class="about-p">
                <p> Note: This project was developed for an external stakeholder for exclusive use. As a result, the code is stored in a private GitHub repository, and the project link is not publicly accessible.</p>
            </div>    
        </section>


        </body>

      </main>
    </div>
  );
}

export default SlackPage;