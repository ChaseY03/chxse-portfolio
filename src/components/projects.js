import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Container, useMediaQuery, useTheme } from '@mui/material';


const exampleProjects = [
  { id: 1, name: 'CareNexa', description: 'A medical personnel data management app using Google Cloud' },
  { id: 2, name: 'Roamio', description: 'A mobile navigation app with weather API integration' },
  { id: 3, name: '3', description: 'A mobile navigation app with weather API integration' },
  { id: 4, name: '4', description: 'A mobile navigation app with weather API integration' },
  { id: 5, name: '5', description: 'A mobile navigation app with weather API integration' },
  
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const theme = useTheme();
  
  // Detect if the screen is small (mobile or tablet)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch projects from an API (or use static data as fallback)
  useEffect(() => {
    const fetchProjects = async () => {
      //replace this with an API fetch
      setProjects(exampleProjects);
    };

    fetchProjects();
  }, []);  // Empty array means the effect runs once when the component mounts

  return (
    <Container maxWidth="xl" >
      <div className="projects">
        {!isSmallScreen && (
          <>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <Spline scene="https://prod.spline.design/nzszmEj5h9825tVf/scene.splinecode" />
            </div>
            {/* Project Stars Overlay */}
            <div className="stars" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="star"
                  style={{
                    position: 'absolute',
                    top: `${50 + Math.sin(index) * 20}%`, // Change the x, y for positioning stars
                    left: `${50 + Math.cos(index) * 30}%`,
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: 'white',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2, 
                  }}
                  onClick={() => alert(`Details for ${project.name}`)} 
                >
                  <span>{project.name}</span>
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* For small screens, display simplified layout */}
        {isSmallScreen && (
          <>
            <h2>My Projects</h2>
            <div className="project-cards">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <button onClick={() => alert(`Details for ${project.name}`)}>See Details</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
