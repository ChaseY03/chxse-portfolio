import "../App.css";
import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import {
  Container,
  useMediaQuery,
  useTheme,
  Popover,
  Typography,
} from "@mui/material";

const exampleProjects = [
  {
    id: 1,
    name: "CareNexa",
    description: "Medical personnel data management app using Google Cloud",
    link: "https://github.com/ChaseY03/CareNexa",
  },
  {
    id: 2,
    name: "Roamio",
    description: "Mobile navigation app with weather API integration",
    link: "https://github.com/ChaseY03/RoamioApp",
  },
  {
    id: 3,
    name: "Apollo - In progress",
    description: "Mental health application for WearOS",
    link: "https://github.com/ChaseY03/apollo-app",
  },
  {
    id: 4,
    name: "In progress",
    description: "Project 4",
    status: "in-progress",
  },
  {
    id: 5,
    name: "In progress",
    description: "Project 5",
    status: "in-progress",
  },
];

export default function PlanetProjects() {
  const [projects, setProjects] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchProjects = async () => {
      setProjects(exampleProjects);
    };
    fetchProjects();
  }, []);

  return (
    <Container maxWidth="xl">
      <div
        className="projects"
        style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
      >
        {!isSmallScreen && (
          <>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Spline scene="https://prod.spline.design/nzszmEj5h9825tVf/scene.splinecode" />
            </div>

            {/* Stars overlay */}
            <div
              className="stars"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="star"
                  style={{
                    position: "absolute",
                    top: `${50 + Math.sin(index) * 20}%`,
                    left: `${50 + Math.cos(index) * 30}%`,
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => {
                    setAnchorEl(e.currentTarget);
                    setSelectedProject(project);
                    setIsHovering(true);
                  }}
                >
                  ★
                </div>
              ))}
            </div>

            {/* Popover */}
            <Popover
              open={Boolean(anchorEl && selectedProject && isHovering)}
              anchorEl={anchorEl}
              onClose={() => {
                setAnchorEl(null);
                setSelectedProject(null);
                setIsHovering(false);
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              slotProps={{
                paper: {
                  onMouseEnter: () => setIsHovering(true),
                  onMouseLeave: () => {
                    setTimeout(() => {
                      setIsHovering(false);
                    }, 200);
                  },
                  sx: {
                    backgroundColor: "#2c2c2e",
                    color: "white",
                    padding: "16px",
                    borderRadius: "12px",
                    maxWidth: "300px",
                    marginTop: "5px",
                  },
                },
              }}
            >
              {selectedProject && (
                <>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {selectedProject.name}
                  </Typography>
                  <Typography variant="body2">
                    {selectedProject.description}
                  </Typography>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#EE2E31" }}
                    >
                      GitHub repo
                    </a>
                  )}
                </>
              )}
            </Popover>
          </>
        )}

        {/* Small screens layout */}
        {isSmallScreen && (
          <>
            <h1 style={{ textAlign: "center", paddingTop: "3rem" }}>
              My Projects
            </h1>
            <div className="project-cards">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.link ? (
                     <button
                     onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                    >
                      GitHub repo
                    </button>
                  ) : (
                    <button disabled>
                      {project.status === "in-progress"
                        ? "In Progress"
                        : "Coming Soon"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
