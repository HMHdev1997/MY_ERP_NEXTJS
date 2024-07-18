import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "@/components/app.header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleFonts } from 'next-google-fonts';
import { Container } from "react-bootstrap";
import x from '@/styles/app.module.css'
import { NextRouter } from 'next/router'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MY_ERP",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container className={x['myContainer']}>
          {children}
        </Container>
      </body>
    </html>
  );
}
