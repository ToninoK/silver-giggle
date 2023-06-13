import React, { useRef, useState } from 'react';

import logo from './logo.svg';
import './App.css';


function DownloadButton({ base64String, fileName }) {
  const linkRef = useRef(null);

  const handleDownload = () => {
    linkRef.current.href = `data:application/octet-stream;base64,${base64String}`;
    linkRef.current.download = fileName;
    linkRef.current.click();
  };

  return (
    <div>
      <a ref={linkRef} style={{ display: 'none' }}></a>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}


const App = () => {
  const [base64String, setBase64String] = useState('');
  const [fileName, setFileName] = useState('');

  const handleBase64Change = (event) => {
    setBase64String(event.target.value);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };
  return (<div className='container'>
      <h1>Download File</h1>
      <div className='form-group'>
        <label>Base64 String:</label>
        <textarea className='bigbox' type="text" value={base64String} onChange={handleBase64Change} />
      </div>
      <div className='form-group'>
        <label>File Name:</label>
        <input type="text" value={fileName} onChange={handleFileNameChange} />
      </div>
      <div>
        <DownloadButton base64String={base64String} fileName={fileName} />
      </div>
    </div>
  );
};

export default App;
