import React from 'react';
import Home from './components/home'; // Import your Home component
import Resume from './components/Resume'; // Import your Resume component

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full height of the viewport
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'left',
          padding: '10px',
          backgroundColor: '#333',
        }}
      >
        <a
          href="#home"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            fontSize: '16px',
          }}
        >
          Home
        </a>
        <a
          href="#writing sample"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            fontSize: '16px',
          }}
        >
          Writing Sample
        </a>
        <a
          href="#blog"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            fontSize: '16px',
          }}
        >
          Blog
        </a>
      </nav>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        {/* Resume Section */}
        <section id="resume">
          <Resume />
        </section>
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f4f4f9',
          lineHeight: '1.5',
        }}
      >
        <h2>Contact</h2>
        <a
          href="mailto:yangshuda215@gmail.com"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '16px',
          }}
        >
          yangshuda215@gmail.com
        </a>
        <p>Phone: (860)-308-3304</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center',
          padding: '10px 0',
        }}
      >
        <p>© 2025 Shuda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
