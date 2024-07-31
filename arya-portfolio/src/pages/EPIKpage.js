import React from 'react';
import './projects.css';
import '../App.css'
import EPIKvid from "../videos/EPIKVideo.MOV"

function EpikPage() {
  return (
    <div style={{ backgroundColor: '#F4C578', minHeight: '100vh', overflow: 'hidden',color: '#373a44' }} >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header Proj-App-header" style={{backgroundColor: "#F4C578"}} role="banner">
        <h1 style={{ color: '#373a44' }}>
            AI Conversation Catalyst
        </h1>
      </header>
      <main>
        <section class="experience-block project-block">
            <div>
                <section class="about-block">
                    <h1 style={{ color: '#373a44' }} class="section-header">About</h1>
                    <div style={{marginLeft: "10.1%"}} class="experience-item">
                        <ul>
                            <li style={{ color: '#373a44' }}>The EPIK Project is a non-profit organization dedicated to combating human trafficking in the US by reducing sexual exploitation. EPIK tackles this problem by deploying fake advertisements to attract potential perpetrators, then their volunteers engage in “therapeutic” conversations with the perpetrators. These conversations are critical for dissuading individuals from committing sexual exploitation, however the <b>problem</b> is that they can often be difficult to navigate and emotionally draining. Our team developed a <b>solution</b>: a conversation analysis tool designed to assist volunteers in managing these conversations effectively, thereby enhancing their ability to prevent human trafficking.</li>
                        </ul>
                    </div>    
                </section>
            </div>
            
            <section class="techstack-block">
                <h1 style={{ color: '#373a44' }} class="section-header">Tech Stack</h1>
                <div style={{marginLeft: "10.2%"}} class="about-p experience-item">
                    <ul>
                        <p style={{ color: '#373a44'}}><b>User-Interface:</b> Hugging Face</p>
                        <p style={{ color: '#373a44'}}><b>Backend:</b> Python</p>
                        <p style={{ color: '#373a44'}}><b>External Libraries & APIs:</b> Torch, Transformers, Gradio, LangChain, OpenAI API, COSMIC Model, SpaCy, NLTK, Matplotlib, and Pandas</p>
                        
                    </ul>          
                </div>    
            </section>

            <section class="Demo-block">
                <h1 class="section-header">Demo Video</h1>
                <div>
                    <video class="Video" controls>
                    <source src={EPIKvid} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>    
            </section>
            <section>
                <div style={{marginLeft: "10.1%"}} class="experience-item">
                    <p style={{ color: '#373a44' }} > Note: This project was developed for an external stakeholder for exclusive use. As a result, the code is stored in a private GitHub repository, and the project link is not publicly accessible.</p>
                </div>    
            </section>
        </section>

      </main>
    </div>
  );
}

export default EpikPage;