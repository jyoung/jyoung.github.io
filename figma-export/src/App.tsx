import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';
import { Hobbies } from './components/Hobbies';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <EducationCertifications />
      <Hobbies />
      <Footer />
    </div>
  );
}
