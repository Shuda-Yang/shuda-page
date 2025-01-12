import React from 'react';

function Resume() {
  return (
    <div
      id="resume"
      style={{
        textAlign: 'center',
        margin: '20px auto',
        padding: '30px',
        maxWidth: '600px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: '15px', color: '#333' }}>My Resume</h2>
      <p style={{ marginBottom: '20px', color: '#555' }}>
        Click the button below to download my resume:
      </p>
      <a
        href="/Shuda_Yang resume.pdf" // Ensure this matches your file name in the public folder
        download
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007bff',
          textDecoration: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Shuda's Resume
      </a>
    </div>
  );
}

export default Resume;
