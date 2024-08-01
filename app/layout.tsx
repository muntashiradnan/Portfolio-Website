import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title: 'Muntashir Adnan',
	authors: {
		name: "Muntashir Adnan",
	},

	description:
		"I'm Muntashir Adnan, currently an sophomore majoring in Computer Science 🚀 I'm a up incoming developer wanting users to have a easier life🤝. I love video games and even compete on a UB team🕹️, and I've been really trying to get into video editing🎥!",
	openGraph: {
		title: "MuntashirAdnan",
		description:
			"I'm Muntashir Adnan, currently an sophomore majoring in Computer cScience 🚀 I'm a up incoming developer wanting users to have a easier life🤝. I love video games and even compete on a UB team🕹️, and I've been really trying to get into video editing🎥!",
		url: "https://localhost:3000",
		siteName: "MuntashirAdnan",
		images: "/images/image (13).png",
		type: "website",
	},
	keywords: ["Profolio website", "Muntashir Adnan", "coding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>



      </body>
    </html>
  );
}
