import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
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
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Nav>
      <main>

        {!contactSelected ? (
          <>

            <Gallery currentCategory={currentCategory}></Gallery>
            <Resume></Resume>
            <About></About>

          </>
        ) : (
          <ContactForm></ContactForm>
        )}

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
