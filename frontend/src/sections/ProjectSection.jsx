import { ProjectsContainer, Card } from "@/components/projects";
import projectData from "@/assets/data/projects.json";

const ProjectSection = () => {
  return (
    <ProjectsContainer>
      {projectData.map((project, idx) => (
        <Card
          key={idx}
          image={project.image}
          title={project.title}
          desc={project.desc}
          src={project.video}
          tools={project.tools}
        />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectSection;
