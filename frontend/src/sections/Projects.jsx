import ProjectLayout from "@/layouts/ProjectLayout";
import ProjectCard from "@/components/ProjectCard";
import ProjectsTest from "@/assets/data/projects-test.json";

export default function Projects() {
  return (
    <ProjectLayout>
      {ProjectsTest.map(({ title, images }, idx) => (
        <ProjectCard
          key={idx}
          cardImage={`/assets/projects/${images.thumbnail}.jpg`}
          cardTitle={title}
        />
      ))}
    </ProjectLayout>
  );
}
