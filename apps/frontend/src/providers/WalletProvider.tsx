"use client";

import { optimism, base, polygon, arbitrum } from "viem/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { accentColor } from "@/constants";

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains: [polygon, optimism, arbitrum, base],
    ssr: true,
    appIcon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    // initialChain: base,
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          initialChain={base}
          theme={{
            ...darkTheme({
              accentColor: accentColor,
              borderRadius: "large",
              fontStack: "rounded",
              // overlayBlur: "large",
              overlayBlur: "small",
            }),
            colors: {
              ...darkTheme().colors,
              // accentColor: "#FFB200",
              // closeButton: "#FFB200",
              // modalBackdrop: "#FFB200",
            },
          }}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
