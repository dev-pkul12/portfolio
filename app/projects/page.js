import { projects } from '../../data/data';

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded">
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline mt-4 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
