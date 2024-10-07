"use client";

import { Flex, Text, Button, Theme, ThemePanel, Container } from "@radix-ui/themes";
import { WagmiProvider } from "wagmi";
import { rainbowConfig } from "./config/wagmi.config";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Profile } from "./components/Profile";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <Theme accentColor='jade' grayColor='slate'>
      <WagmiProvider config={rainbowConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            // modalSize='compact'
            theme={darkTheme()}>
            <Flex px='0' direction='column' className='h-screen bg-purple-50/10'>
              <Header />
              <main>Hello</main>
              <Container size='1'>
                <main className=''>
                  <h1>Welcome to Tiny Dapp</h1>
                  <Flex direction='column' gap='2'>
                    <Text>Hello from Radix Themes</Text>
                    <Button>Let's go</Button>
                  </Flex>
                  <Profile />
                </main>
              </Container>
              <Footer />
            </Flex>
          </RainbowKitProvider>
        </QueryClientProvider>
        {/* <ThemePanel />  */}
      </WagmiProvider>
    </Theme>
  );
}
