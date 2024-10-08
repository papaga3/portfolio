import Header from "@/components/header";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My blog",
  description: "A place for me to write my ideas",
};

const RootLayout = ({children} : Readonly<{children: React.ReactNode}>) => {
  return(
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;