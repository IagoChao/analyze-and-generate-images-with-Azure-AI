import React from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  // need a title with a subtext. below that, a input to introduce a url.
  // below that, a button to submit the url and other to generate a new image using IA.
  // below that, a image to show the result of IA.
  // below that, a button to download the image.

  // need a function to analyze the image.
  // need a function to generate a new image.
  // need a function DisplayResults to  show the result of IA.
  
  //Add a work in progress indicator to the UI while the image is being analyzed.

  const handleClick = () => {
    const url = document.getElementById('url').value;
    // Add indicator to the UI while the image is being analyzed.
    const indicator = document.createElement('p');
    indicator.textContent = 'Analizando imagen...';
    document.body.appendChild(indicator);
    // analyze the image.
    analyzeImage(url)
      .then(result => {
        // remove indicator.
        document.body.removeChild(indicator);
        // show the result of IA.
        displayResults(result);
      })
      .catch(err => console.log(err));
  }

  const displayResults = (result) => {
    // show the result of IA.
    const img = document.createElement('img');
    // if not contains url, show the image of url in input.
    if (!result.url) {
      const url = document.getElementById('url').value;
      img.src = url;
    }
    document.body.appendChild(img);
    // Show json result and below of them the url analyzed.
    const json = document.createElement('pre');
    json.textContent = JSON.stringify(result, null, 2);
    document.body.appendChild(json);
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer vision</h1>
        <label htmlFor="url">Inserta URL o el prompt:</label>
        <input type="text" name="url" id="url" />
        <button type="button" onClick={handleClick} >Analizar</button>
        <img src="" alt="" />
        <button type="button">Generar</button>
      </header>
    </div>
  );
}

export default App;
