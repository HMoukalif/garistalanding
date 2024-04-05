import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myLocalFont = localFont({
  src: [
    {
      path: "../fonts/THICCCBOI-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/THICCCBOI-Regular.woff2",
      weight: "400",
      style: "normal  ",
    },
    {
      path: "../fonts/THICCCBOI-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/THICCCBOI-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/THICCCBOI-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myLocalFont.className} scroll-smooth overflow-x-hidden bg-primaryBg text-secondaryBg`}
      >
        {children}
      </body>
    </html>
  );
}
