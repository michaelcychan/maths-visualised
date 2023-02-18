import React, {useState} from 'react';

import './App.css';

import {PrimeNumberPage} from './components/primeNumberPage';
import {FactorsPage} from './components/factorsPage';
import {MultiplePage} from './components/multiplePage';

function App() {

  type pageType = "Prime" | "Factors" | "Multiples"
  const initialPage: pageType = "Prime";

  const [showPage, setShowPage] = useState<pageType>(initialPage)

  const availablePages: string[] = ["質數", "因數", "倍數"]
    
  const buttonClicked = (targetPage: string) => {
    if (targetPage === "質數") {
      setShowPage("Prime")
    } else if (targetPage === "因數") {
      setShowPage("Factors")
    } else {
      setShowPage("Multiples")
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
          一起學數學！
      </header>
    <section className="page-selector">
        {availablePages.map(page => {
        return <button className="page-selector-btn" key={page} onClick={() => buttonClicked(page)}>{page}</button>
      })}
    </section>
    {showPage === "Prime"
      ? <PrimeNumberPage />
      : showPage === "Factors"
        ? <FactorsPage />
        : <MultiplePage />
    }
    </div>
  );
}

export default App;
