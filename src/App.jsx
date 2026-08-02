import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Process from './pages/Process';

// The real deploy uses clean URLs (/portfolio) at the domain root. The
// single-file preview build is served from an arbitrary path, so it falls
// back to hash routing. The GitHub Pages build is still clean URLs, but
// served under /ripcurl/, so it needs a basename instead.
const Router = import.meta.env.VITE_PREVIEW_BUILD ? HashRouter : BrowserRouter;
const basename = import.meta.env.VITE_PREVIEW_BUILD ? undefined : import.meta.env.VITE_BASE_PATH;

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router basename={basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<Process />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App