import { http, createConfig, Config } from "wagmi";
import { mainnet, sepolia, arbitrum, polygon, base, optimism } from "wagmi/chains";
// import { getDefaultConfig, AuthenticationConfig, Register } from "@rainbow-me/rainbowkit";
import { getDefaultConfig, getDefaultWallets, Wallet, WalletDetailsParams } from "@rainbow-me/rainbowkit";
// import { useBlockNumber } from "wagmi";

// export const wagmiConfig = createConfig({
//   chains: [mainnet, sepolia],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//     [arbitrum.id]: http(),
//   },
// });

// // useBlockNumber({ chainId: 123 })  // Example. Error: chainId 123 is not supported

// declare module "wagmi" {
//   interface Register {
//     config: typeof wagmiConfig;
//   }
// }

export const rainbowConfig: Config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
  // wallets: getDefaultWallets([wallet.WalletConnect, wallet.MetaMask]),
});

// declare module "@rainbow-me/rainbowkit" {
//   interface Register {
//     config: typeof rainbowConfig;
//   }
// }
