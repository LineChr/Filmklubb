import React from "react";
import "./styles.css";
import { Amarante, Abhaya_Libre } from "next/font/google";
import Header from "@/components/Header/Header";

const amarante = Amarante({
  subsets: ["latin"],
  variable: "--font-amarante",
  weight:"400",
});

const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  variable: "--font-abhaya-libre",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  description: "Et starterprosjekt for Payload CMS, bygget med Docker",
  title: "Payload CMS",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="no">
      <body className={`${amarante.variable} ${abhayaLibre.variable}`}>
        <div className="content-container">
          <Header/>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};
