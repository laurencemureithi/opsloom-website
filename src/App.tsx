import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Videos from './pages/Videos';
import Insights from './pages/Insights';
import Resources from './pages/Resources';
import Team from './pages/Team';
import Contact from './pages/Contact';
import BookDemo from './pages/BookDemo';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Loader />
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudies />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<Insights />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-a-demo" element={<BookDemo />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
