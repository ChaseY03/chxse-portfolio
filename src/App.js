// // App.js
// //import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar.js';
// import Home from './components/home.js';
// import Projects from './components/projects.js';
// import Contact from './components/contact.js';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { ThemeProvider } from '@mui/material/styles';
import theme from './data/theme';
import Navbar from "./components/navbar";
import StarScene from "./components/starscene";
import HomeSection from "./components/sections/home";
import SkillsSection from "./components/sections/skills";
import ProjectsSection from "./components/sections/projects";
import ContactSection from "./components/sections/contact";
import Footer from './components/sections/footer';

export default function App() {
  return (
       <ThemeProvider theme={theme}>
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarScene />

      <Navbar />
      <section id="home"><HomeSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
    </div>
    </ThemeProvider>
  );
}
