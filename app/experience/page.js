import { experience } from '../../data/data';

export default function Experience() {
  return (
    <section className="py-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center">Experience</h2>
      <div className="mt-6 w-full max-w-4xl px-4">
        {experience.map((exp, index) => (
          <div 
            key={index} 
            className="p-6 bg-white shadow-md rounded mb-6 mx-auto max-w-md"
          >
            <h3 className="font-bold text-lg text-center">{exp.role}</h3>
            <p className="text-gray-600 text-center">{exp.company}</p>
            <p className="text-gray-500 text-center">{exp.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
