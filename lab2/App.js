import logo from './logo.svg';
import './App.css';
// src/components/TextToHTMLGenerator.js

import React, { useState } from 'react';

function TextToHTMLGenerator() {
  const [inputText, setInputText] = useState('');
  const [generatedHTML, setGeneratedHTML] = useState('');
  const [isOutputVisible, setIsOutputVisible] = useState(true); 
  const handleGenerateHTML = () => {
    const htmlCode = `<div>${inputText}</div>`;
    setGeneratedHTML(htmlCode);
  };

  const toggleOutputVisibility = () => {
    setIsOutputVisible(!isOutputVisible); 
  };

  return (
    <div className="TextInputBlock">
      <textarea
        placeholder="Enter your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="GenerateButton" onClick={handleGenerateHTML}>
        Generate HTML
      </button>
      <button className="ToggleOutputButton" onClick={toggleOutputVisibility}>
        {isOutputVisible ? 'Hide Output' : 'Show Output'}
      </button>
      {isOutputVisible && ( 
        <div className="GeneratedHTML">
          <strong>Generated HTML:</strong>
          <div dangerouslySetInnerHTML={{ __html: generatedHTML }} />
        </div>
      )}
    </div>
  );
}

export default TextToHTMLGenerator;
