import { Navigation } from './components/Navigation';
import { Hero }       from './sections/Hero';
import { Services }   from './sections/Services';
import { Work }       from './sections/Work';
import { About }      from './sections/About';
import { Process }    from './sections/Process';
import { Engage }     from './sections/Engage';
import { FAQ }        from './sections/FAQ';
import { Contact }    from './sections/Contact';
import { Footer }     from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080d1f] text-slate-200 font-sans antialiased">
      <Navigation />

      <main id="main-content">
        <Hero />
        <Services />
        <Work />
        <About />
        <Process />
        <Engage />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
