import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-sky-500 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-lg font-bold">Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/experience">Experience</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
