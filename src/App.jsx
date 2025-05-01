import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  NavBar,
  About, 
  Projects,
  Skills,
  Experience,
  ContactMe,
  Footer,
  NotFound,
} from '../src/components/index';

import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Analytics />
      <ToastContainer />
      <Router>
        <div className="bg-lightDesert">
          <NavBar />
          <Routes>
  <Route path="/" element={<Projects/>} /> 
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="/contact" element={<ContactMe />} />
  <Route path="*" element={<NotFound />} />
</Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
