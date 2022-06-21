import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Images of Projects by Chris Warren"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}></Nav>
      <main>
        <div>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
