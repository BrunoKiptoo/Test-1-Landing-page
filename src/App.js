


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cube from './components/Cube';
import LandingPage from './components/LandingPage';
import MembersModal from './components/MembersModal';
import Page2 from './components/EventsModal';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
// import Modal from './components/Modal';
// import CurvedBox from './components/CurvedBox';


function App() {
  return (
    <Router>
      {/* <CurvedBox /> */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/page1" element={<MembersModal />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
    </Routes>
  </Router>
  );
};

export default App;
