import "./global.css"
import './App.css';
import githubLogo from './images/githubLogo.png'
import LinkedinLogo from './images/LinkedinLogo.png'
import CameraIcon from './images/CameraIcon.png'
import EmailIcon from './images/emailIcon.png'
function App() {
  return (
    <div className="App">
      <header className="App-header" role="banner">
        <h1 className="rakkas-regular">Arya Patel</h1>
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
      </header>
      <main>
        
        <p className="rakkas-regular">asdflkasdj;fakdfkas</p>
      </main>
    </div>
  );
}

export default App;