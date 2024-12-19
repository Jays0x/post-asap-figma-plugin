import { Figtree } from "next/font/google";
import "./globals.css";


const figTree = Figtree({
  variable: "--figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "Asap - Post it Asap!",
  description: "Share your designs directly anywhere from Figma.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className='dark'>
      <body
        className={`${figTree.variable} antialiased `}

      >
        {children}
      </body>
    </html>
  );
}
