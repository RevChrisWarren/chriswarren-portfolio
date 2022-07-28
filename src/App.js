import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState('Portfolio')

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    // if (currentPage === 'ContactForm') {
    //   return <ContactForm />;
    // }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      <main>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
