import Navbar from "../components/Navbar";
import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
