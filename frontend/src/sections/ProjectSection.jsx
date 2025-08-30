import { ProjectsContainer, Card } from "@/components/projects";
import projectData from "@/assets/data/projects.json";

const ProjectSection = () => {
  return (
    <ProjectsContainer>
      {projectData.map(({ image, title, desc, video, tools }, idx) => (
        <Card key={idx} image={image} title={title} desc={desc} src={video} tools={tools} />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectSection;
