import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VC++ - Vassar College Computer Science Club",
  description: "Join us for coding workshops, hackathons, tech talks, and collaborative projects. Build your skills, network with peers, and shape the future of technology.",
  icons: {
    icon: "/vcplusplug_logo.png",
    apple: "/vcplusplug_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('%cHidden Challenge Found!', 'color: #22c55e; font-size: 16px; font-weight: bold;'); console.log('Looking for something interesting? Try visiting /challenge');`
          }}
        />
      </body>
    </html>
  );
}
