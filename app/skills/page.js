import { skills } from '../../data/data';

export default function Skills() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-sky-100 text-sky-600 px-4 py-2 rounded shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
