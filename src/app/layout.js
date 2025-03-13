import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dancing_script = Dancing_Script( {
  variable: "--font-dancing-script",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invitación XV Años | Katerin",
  description: "Con mucho cariño te invito a celebrar mis XV años, una noche inolvidable llena de sueños y alegría. Te espero el 28 de Junio. 💚",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dancing_script.variable}`}>
        {children}
      </body>
    </html>
  );
}
