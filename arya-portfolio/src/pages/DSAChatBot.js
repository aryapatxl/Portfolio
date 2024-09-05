import React from 'react';
import './projects.css';
import '../App.css'
import DSAvid from "../videos/DSA-bot-demo.mov"


function ChatBotPage() {
  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden'}} >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header Proj-App-header" role="banner">
        <h1>
            Data Structures & Algorithms Chat Bot
        </h1>
      </header>
      <main>
        <section class="experience-block project-block">
            <div>
                <section class="about-block">
                    <h1  class="section-header">About</h1>
                    <div style={{marginLeft: "10.1%"}} class="experience-item">
                        <ul>
                            <li> Students often face challenges in mastering data structures and algorithms. As part of a personal project, I developed a chatbot designed to assist learners by providing clear and concise explanations of various data structures and algorithms. The <b>solution</b> is a chatbot that engages users in interactive conversations, answering their questions and offering detailed explanations. This tool aims to enhance understanding and support students in their learning journey by delivering accurate information and guidance on complex topics *UI changes still occuring*.
                            </li>
                        </ul>
                    </div>    
                </section>
            </div>
            
            <section class="techstack-block">
                <h1 class="section-header">Tech Stack</h1>
                <div style={{marginLeft: "10.2%"}} class="about-p experience-item">
                    <ul>
                        <p><b>User-Interface:</b> Next.js, Material UI</p>
                        <p><b>Backend:</b> Clerk for Google Sign-In</p>
                        <p><b>External API's:</b>  GROQ API</p>
                        <p><b>Deployment:</b> Vercel with CI/CD</p>
                        
                    </ul>          
                </div>    
            </section>

            <section class="Demo-block">
            <a class="custom-link" href="https://dsa-chat-bot.vercel.app" target="_blank" rel="github">
                <h1 class="section-header">Project Link</h1>  
                </a>

                <h1 class="section-header">Demo Video</h1>
                <div>
                    <video class="Video" controls>
                    <source src={DSAvid} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>    

               

            </section>
        </section>

      </main>
    </div>
  );
}

export default ChatBotPage;