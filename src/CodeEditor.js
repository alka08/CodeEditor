import React, { useState } from 'react';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState(`function helloWorld() {
    console.log('Hello, World!');
  }`);
  const [isLocked, setIsLocked] = useState(false);

  const handleCopyClick = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const handleLockToggle = () => {
    setIsLocked(!isLocked);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const { selectionStart, selectionEnd } = event.target;
      const newCode =
        code.substring(0, selectionStart) + '  ' + code.substring(selectionEnd);
      setCode(newCode);
    }
  };

  return (
    <>
    <div className='app'>
     {/* <h3> CodeEditor</h3> */}
     <p className='heading'>CodeEditor</p>
    <div className="editor-container">
    <div className="code-editor">
      <div className="code-toolbar">
        <button onClick={handleCopyClick} className="code-button">
          Copy
        </button>
       
        <button
          onClick={handleLockToggle}
          className={`code-button ${isLocked ? 'locked' : ''}`}
        >
          {isLocked ? 'Unlock' : 'Lock'}
        </button>
      </div>
      <textarea
        value={code}
        onChange={handleCodeChange}
        onKeyDown={handleKeyDown}
        readOnly={isLocked}
        className="code-textarea"
        spellCheck="false"
      />
 <button className="code-button">Save</button>   
    </div>
    <div className="output">
      
          <h4>Output</h4>
          <div className="output-content">Hello World !</div>
          
        </div>
         
        </div>
        </div>
    </>
  
  );
};

export default CodeEditor;
