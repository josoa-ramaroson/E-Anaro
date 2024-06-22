
import { LandingPage } from './langing-page';
import About from './langing-page/components/about';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/main';
import { Login, Register } from './auth';
import Home from './home';
import ChatPage from './chat';
import GeneratePdfSummary from './generate-pdf';
import Course from './course';
import Convert from './convert';
import Create from './create';
import CourseDetails from './course-details';

function App() {
  return (<Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/pdf" element={<GeneratePdfSummary />} />
      <Route path="/cours" element={<Course />} />
      <Route path="/convert" element={<Convert />} />
      <Route path="/create" element={<Create />} />
      <Route path="/cours/:courseTitle" element={<CourseDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
