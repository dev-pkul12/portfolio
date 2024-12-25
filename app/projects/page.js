import { projects } from '../../data/data';

export default function Projects() {
  return (
    <section className="py-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <div className="mt-6 grid gap-6 w-full max-w-6xl px-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded text-center mx-auto">
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline mt-4 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
