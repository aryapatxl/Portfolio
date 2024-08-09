import React from 'react';
import './projects.css';
import '../App.css'
import EPIKvid from "../videos/EPIKVideo.MOV"

function WarrantsPage() {
  return (
    <div style={{  minHeight: '100vh', overflow: 'hidden' }} >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header Proj-App-header" role="banner">
        <h1>
            Warrants Analysis
        </h1>
      </header>
      <main>
        <section class="experience-block project-block">
            <div>
                <section class="about-block">
                    <h1 class="section-header">About</h1>
                    <div style={{marginLeft: "10.1%"}} class="experience-item">
                        <ul>
                            <li>This project was part of an investigative journalism story for The Boston Globe. Although the story was not published and may still be being worked on, I can share some details about the work involved. The goal of this project was to automate tasks that would take humans hundreds of hours to complete. We had thousands of JPEG images of court documents and needed to efficiently scan them into machine-readable text, perform similarity checks, and summarization of the documents.</li>
                        </ul>
                    </div>    
                </section>
            </div>
            
            <section class="techstack-block">
                <h1 class="section-header">Tech Stack</h1>
                <div style={{marginLeft: "10.2%"}} class="about-p experience-item">
                    <ul>
                        <p><b>Programming:</b> Python</p>
                        <p><b>External Libraries & APIs:</b> Torch, Transformers, Matplotlib, and Pandas</p>
                        
                    </ul>          
                </div>    
            </section>

            <section class="Demo-block">
                <a class="custom-link"href="https://github.com/aryapatxl/Warrants-Text-Summerizer-" target="_blank" rel="github">
                <h1 class="section-header">GitHub Link</h1>  
                </a>
            </section>
            <section>
                <div style={{marginLeft: "10.1%"}} class="experience-item">
                    <p  > Note: This project was developed for an external stakeholder for exclusive use. As a result, the *full* code is stored in a private GitHub repository, and the project link is not publicly accessible.</p>
                </div>    
            </section>
        </section>

      </main>
    </div>
  );
}

export default WarrantsPage;