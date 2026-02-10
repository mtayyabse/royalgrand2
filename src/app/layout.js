import "./globals.css";
import { poppins, playfair } from "./fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${playfair.variable}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
