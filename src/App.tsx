import React, {useState, MouseEvent, Key} from 'react';

import './App.css';

import {PrimeNumberPage} from './components/primeNumberPage';
import {FactorsPage} from './components/factorsPage';
import {MultiplePage} from './components/multiplePage';

function App() {

  type pageType = "Prime" | "Factors" | "Multiples"
  const initialPage: pageType = "Prime";

  const [showPage, setShowPage] = useState<pageType>(initialPage)

  const availablePages: String[] = ["質數", "因數", "倍數"]
    
  const buttonClicked = (e: MouseEvent<HTMLElement>) => {
    const button = (e.target as HTMLElement).innerHTML;
    console.log(button)
    if (button === "質數") {
      setShowPage("Prime")
    } else if (button === "因數") {
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
        return <button className="page-selector-btn" key={page as Key} onClick={buttonClicked}>{page}</button>
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
