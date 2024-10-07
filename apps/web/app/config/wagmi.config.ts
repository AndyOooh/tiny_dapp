import { http, createConfig } from "wagmi";
import { mainnet, sepolia, arbitrum } from "wagmi/chains";
// import { useBlockNumber } from "wagmi";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
  },
});

// useBlockNumber({ chainId: 123 })  // Example. Error: chainId 123 is not supported

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
