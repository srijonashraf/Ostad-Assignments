import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Service from './components/Service';

const App = () => {
  return (
    <div className='d-flex flex-column gap-4'>
      <Header />
      <Hero />
      <About />
      <Project />
      <Service />
      <Footer />
    </div>
  );
};

export default App;