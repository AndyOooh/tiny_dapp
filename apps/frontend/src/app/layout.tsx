import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Box, Container, Heading, Theme, ThemePanel } from "@radix-ui/themes";
import WalletProvider from "@/providers/WalletProvider";
import { Header } from "@/components/layout/Header";
import { accentColor, grayColor } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiny Dapps",
  description: "Small dapps for the masses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <div className="noise" /> */}

        <Theme
          accentColor={accentColor}
          grayColor={grayColor}
          panelBackground="translucent"
          scaling="95%"
          appearance="dark"
          hasBackground={false}
        >
          <WalletProvider>
            <Container minHeight="100dvh" size="2">
              <Header />
              {children}
            </Container>
          </WalletProvider>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
