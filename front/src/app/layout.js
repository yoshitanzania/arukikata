
import localFont from "next/font/local";
import { Sawarabi_Mincho } from "next/font/google";

const bodyFont = localFont({
  src: [
    {
      path: "../fonts/KleeOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/KleeOne-SemiBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-body",
});

const headingFont = Sawarabi_Mincho({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-heading",
});


export const metadata = {
  title: "タンザニア旅行のトリセツ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
