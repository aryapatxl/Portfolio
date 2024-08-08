import React from 'react';
import './projects.css';
import '../App.css'
import CalcImage from "../images/CalcAPI.png"

function CalcPage() {
  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden'}} >
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <header className="App-header Proj-App-header"  role="banner">
        <h1>
            Financial Calculator API
        </h1>
      </header>
      <main>
        <section class="experience-block project-block">
            <div>
                <section class="about-block">
                    <h1 style={{ color: '#373a44' }} class="section-header">About</h1>
                    <div style={{marginLeft: "10.1%"}} class="experience-item">
                        <ul>
                            <li style={{ color: '#373a44' }}> Inspired by the Intro to Finance course I took during my time at Boston University, I created a Financial Calculator API that handles basic financial calculations. It makes HTTP POST requests to specified endpoints, processes these requests, and returns results in JSON format. This project was a great way for me to familiarize myself with the inner workings of ASP.NET Core in preparation for my internship at Reliance Inc.</li>
                        </ul>
                    </div>    
                </section>
            </div>
            
            <section class="techstack-block">
                <h1 style={{ color: '#373a44' }} class="section-header">Tech Stack</h1>
                <div style={{marginLeft: "10.2%"}} class="about-p experience-item">
                    <ul>
                        <p style={{ color: '#373a44'}}><b>User-Interface:</b> Swagger</p>
                        <p style={{ color: '#373a44'}}><b>Backend:</b> C#</p>
                        <p style={{ color: '#373a44'}}><b>Framework:</b> ASP .NET Core</p>
                        
                    </ul>          
                </div>    
            </section>

            <section class="Demo-block">
                <h1 class="section-header">Project Visual</h1>
                <div>
                    <img src={CalcImage} class="Video"></img>
                </div>    
            </section>

        </section>

      </main>
    </div>
  );
}

export default CalcPage;