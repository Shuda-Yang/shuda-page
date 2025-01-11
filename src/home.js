import React from 'react';

function Home() {
  return (
    <div>
      <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>My Portfolio</h1>
      </header>
      <main style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Welcome to My Website</h2>
        <p>This is my first Home Page built with React.js!</p>
      </main>
      <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', marginTop: '50px' }}>
        <p>© 2025 Shuda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
