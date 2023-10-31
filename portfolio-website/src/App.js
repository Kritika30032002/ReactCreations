import React from 'react';
import './App.css';
import profileImg from './profile-photo.jpg';

function App() {
  return (
    <div className="App">

      <header className="App-header background-image">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <img src={profileImg} alt="Profile Image" />
      </header>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>Hello! I'm John Doe, a software developer from New York, USA. I specialize in building responsive websites and applications.</p>
      </section>

      <section className="section" id="skill">
        <h2>My Skills</h2>
        <button className='btn'>HTML</button>
        <button className='btn'>CSS</button>
        <button className='btn'>JavaScript</button>
        <button className='btn'>React</button>
        <button className='btn'>Node.js</button>
      </section>

      <section className="section" id="project">
        <h2>My Projects</h2>
        <ul>
          <li>
            <h3>Project 1: E-commerce Platform</h3>

            <p><li><strong>Technology</strong>: HTML, CSS, JavaScript, React, Node.js</li>

              <li><strong>Project Detail</strong>: An e-commerce platform where users can browse and purchase products. It offers features like product search, user authentication, and shopping cart functionality. The backend is built using Node.js and MongoDB, while the frontend is built using React.js and Redux.</li>
            </p>
          </li>
          <li>
            <h3>Project 2: Personal Blog Website</h3>
            <p>
              <li><strong>Technology</strong>: HTML, CSS, JavaScript</li>
              <li><strong>Project Detail</strong>: A personal blog website where users can read and interact with various blog posts. The website features a clean and minimalistic design, and includes functionality for adding comments, liking posts, and subscribing to newsletters.</li>
            </p>
          </li>
          <li>
            <h3>Project 3: Movie Recommendation System</h3>
            <p>
              <li><strong>Technology</strong>: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</li>
              <li><strong>Project Detail</strong>: A movie recommendation system that utilizes machine learning algorithms to predict user preferences based on their past behavior. The frontend is built using React.js and Redux, while the backend is built using Node.js, Express, and MongoDB.</li>
            </p>
          </li>
        </ul>
      </section>

      <section className="section" id="contact">
        <h2>Contact Me</h2>
        <p>If you have any questions or want to collaborate, feel free to contact me:</p>
        <ul>
          <li>Email: https://www.john@johndoe.in</li>
          <li>LinkedIn: https://www.linkedin.com/in/johndoe</li>
          <li>GitHub: https://www.github.com/johndoe</li>
        </ul>
      </section>

      <footer className="App-footer">
        <p>© 2023 | John Doe</p>
      </footer>
    </div>
  );
}

export default App;
