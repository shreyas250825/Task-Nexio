import { Navigation } from './components/Navigation';
import { Hero }       from './sections/Hero';
import { Statement }  from './sections/Statement';
import { Work }       from './sections/Work';
import { Services }   from './sections/Services';
import { About }      from './sections/About';
import { Process }    from './sections/Process';
import { Engage }     from './sections/Engage';
import { FAQ }        from './sections/FAQ';
import { Contact }    from './sections/Contact';
import { Footer }     from './sections/Footer';

export default function App() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Statement />
        <Work />
        <Services />
        <About />
        <Process />
        <Engage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
