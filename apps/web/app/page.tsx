"use client";

import { Flex, Text, Button, Theme, ThemePanel, Container } from "@radix-ui/themes";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./config/wagmi.config";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Theme accentColor='jade' grayColor='slate'>
      <WagmiProvider config={wagmiConfig}>
        <Flex px='0' direction='column' className='h-screen bg-purple-50/10'>
          <Header />
          <Container size='1'>
            <main className=''>
              <h1>Welcome to Tiny Dapp</h1>
              <Flex direction='column' gap='2'>
                <Text>Hello from Radix Themes</Text>
                <Button>Let's go</Button>
              </Flex>
            </main>
          </Container>
          <Footer />
        </Flex>
      </WagmiProvider>
      {/* <ThemePanel /> */}
    </Theme>
  );
}
