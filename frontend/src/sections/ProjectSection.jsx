import { ProjectsContainer, Card } from "@/components/projects";
import projectData from "@/assets/data/projects-test.json";

const ProjectSection = () => {
  console.log(projectData);
  return (
    <ProjectsContainer>
      {projectData.map(({ image, title, desc, tools }, idx) => (
        <Card
          key={idx}
          image={image}
          title={title}
          desc={desc}
          tools={tools}
        />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectSection;
