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
                            <li style={{ color: '#f1eee9' }}> Cooking comes with challenges. I always forget the food I have at home and struggle to keep things fresh with new recipes. To address these issues, I am developing a full-stack inventory application designed to simplify meal preparation and inventory management. This web app allows users to create an account, add food items through both typing and photo uploads, delete items from their inventory, and generate recipes based on their current stock. By combining these features, the app aims to make managing your pantry and discovering new recipes more convenient and enjoyable!</li>
                        </ul>
                    </div>    
                </section>
            </div>
            
            <section class="techstack-block">
                <h1 style={{ color: '#f1eee9' }} class="section-header">Tech Stack</h1>
                <div style={{marginLeft: "10.2%"}} class="about-p experience-item">
                    <ul>
                        <p style={{ color: '#f1eee9'}}><b>User-Interface:</b> Material UI</p>
                        <p style={{ color: '#f1eee9'}}><b>Backend:</b> Firebase</p>
                        <p style={{ color: '#f1eee9'}}><b>External API's:</b> .. </p>
                        <p style={{ color: '#f1eee9'}}><b>Deployment:</b> Vercel</p>
                        
                    </ul>          
                </div>    
            </section>

            <section class="Demo-block">
                <h1 class="section-header">Demo Video Coming Soon</h1>
                <div>
                    
                </div>    
            </section>
        </section>

      </main>
    </div>
  );
}

export default SlackPage;