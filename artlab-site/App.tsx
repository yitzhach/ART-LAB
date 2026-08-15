import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import StudentPages from './components/StudentPages';
import Syllabus from './components/Syllabus';
import Payment from './components/Payment';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Classes />
        <Gallery />
        <StudentPages />
        <Syllabus />
        <Payment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
