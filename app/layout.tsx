import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Վերջին զանգ",
  description: "Վերջին զանգ",
  openGraph: {
    title: "Վերջին զանգի հրավիրատոմս",
    description: "Ամեն ավարտ մի նոր սկիզբ է․․․",
    url: "https://verjin-zang-2.vercel.app/",
    siteName: "Վերջին զանգ",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
        className="m-auto max-w-md bg-[#ECEFFC] text-[#1E1E1E]"
        style={{ whiteSpace: "pre-line" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
