import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingDonate from "./components/FloatingDonate";

export const metadata: Metadata = {
  title: "ResGatas — ONG de Resgate de Gatas | Itajaí - SC",
  description:
    "A ResGatas é uma ONG de Itajaí-SC dedicada ao resgate, castração e adoção consciente de gatas adultas em estado de abandono. Doe e ajude nossos mais de 60 gatinhos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingDonate />
      </body>
    </html>
  );
}
