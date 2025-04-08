import Header from "@/components/header";
import { Metadata } from "next";
import "./globals.css";
import "@fontsource/inter";

export const metadata: Metadata = {
  title: "My blog",
  description: "A place for me to write my ideas",
};

const RootLayout = ({children} : Readonly<{children: React.ReactNode}>) => {
  return(
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-700 text-red-50">
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;