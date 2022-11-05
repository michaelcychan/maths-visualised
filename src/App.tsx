import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

import {GenerateNumberGrid} from './components/generateNumberGrid'

function App() {

  const arrayNum: Number[] = Array.from(Array(100).keys()).map(x => x+1);

  return (
    <div className="App">
      <header className="App-header">
        
          Learn Maths Together!

      </header>
      <section>
        <GenerateNumberGrid arrayNum={arrayNum}/>
      </section>
    </div>
  );
}

export default App;
