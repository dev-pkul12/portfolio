import { experience } from '../../data/data';

export default function Experience() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center">Experience</h2>
      <div className="mt-6">
        {experience.map((exp, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded mb-4">
            <h3 className="font-bold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500">{exp.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
