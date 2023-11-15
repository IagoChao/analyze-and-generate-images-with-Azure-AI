import React from 'react';

function App() {
  // need a title with a subtext. below that, a input to introduce a url.
  // below that, a button to submit the url and other to generate a new image using IA.
  // below that, a image to show the result of IA.
  // below that, a button to download the image.
  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer vision</h1>
        <label htmlFor="url">Inserta URL o el prompt:</label>
        <input type="text" name="url" id="url" />
        <button type="button">Analizar</button>
        <img src="" alt="" />
        <button type="button">Generar</button>
      </header>
    </div>
  );
}

export default App;
