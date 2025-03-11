import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Skate",
  description:
    "Our accelerator allows you to upload, read, and process multiple file types ",
  openGraph: {
    title: "Data Skate",
    description:
      "Our accelerator allows you to upload, read, and process multiple file types ",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
