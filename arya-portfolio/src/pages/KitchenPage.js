import React from 'react';
import './projects.css';
import '../App.css'
import KitchenGuru from "../videos/KitchenGuru.mov"

function SlackPage() {
  return (
    <div style={{ backgroundColor: '#584566', minHeight: '100vh', overflow: 'hidden', color: '#f1eee9' }} >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header Proj-App-header" role="banner">
        <h1 style={{ color: '#f1eee9' }}>
            Kitchen Guru
        </h1>
      </header>
      <main>
        <section class="experience-block project-block">
            <div>
                <section class="about-block">
                    <h1 style={{ color: '#f1eee9' }} class="section-header">About</h1>
                    <div style={{marginLeft: "10.1%"}} class="experience-item">
                        <ul>
                            <li style={{ color: '#f1eee9' }}> Cooking can be full of challenges. After a busy day at work, I often find myself forgetting what ingredients I already have at home. Plus, coming up with new recipes that use up my current stock of ingredients is a huge struggle. To fix these issues, I developed a full-stack web application that makes meal preparation and inventory management easier. The app lets users create an account through Google, add items and remove items in their inventory, and uses LLMs to generate new recipes based on their current stock, cuisine preferences, dietary restrictions, and the number of people they're cooking for.</li>
                        </ul>
                    </div>    
                </section>
            </div>
            
            <section class="techstack-block">
                <h1 style={{ color: '#f1eee9' }} class="section-header">Tech Stack</h1>
                <div style={{marginLeft: "10.2%"}} class="about-p experience-item">
                    <ul>
                        <p style={{ color: '#f1eee9'}}><b>User-Interface:</b> Next.js, Material UI</p>
                        <p style={{ color: '#f1eee9'}}><b>Backend:</b> Firebase for data management and Google Sign-In</p>
                        <p style={{ color: '#f1eee9'}}><b>External API's:</b>  GROQ API</p>
                        <p style={{ color: '#f1eee9'}}><b>Deployment:</b> Vercel with CI/CD</p>
                        
                    </ul>          
                </div>    
            </section>

            <section class="Demo-block">
            <a class="custom-link" href="https://kitchen-guru.vercel.app" target="_blank" rel="github">
                <h1 class="section-header">Project Link</h1>  
                </a>
                <h1 class="section-header">Demo Video</h1>
                <div>
                    <video class="Video" controls>
                    <source src={KitchenGuru} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>

            </section>
        </section>

      </main>
    </div>
  );
}

export default SlackPage;