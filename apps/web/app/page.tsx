"use client";

import { Flex, Text, Button, Theme, ThemePanel } from "@radix-ui/themes";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./config/wagmi.config";
import { Header } from "./components/Header";
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <Theme accentColor='jade' grayColor='slate'>
      <WagmiProvider config={wagmiConfig}>
        <Header />
        <main className=''>
          <h1>Welcome to Tiny Dapp</h1>
          <Flex direction='column' gap='2'>
            <Text>Hello from Radix Themes</Text>
            <Button>Let's go</Button>
          </Flex>
        </main>
        <footer className=''>Footer</footer>
        <Footer />
      </WagmiProvider>
      <ThemePanel />
    </Theme>
  );
}
