import { about } from '../../data/data';

export default function About() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="mt-4 text-gray-700">{about.description}</p>
    </section>
  );
}
