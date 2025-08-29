import { mainnet, polygon, optimism, arbitrum, base } from "viem/chains";

export const accentColor = "teal";
export const grayColor = "sand";

// bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500
export const accentGradient = "bg-gradient-to-r from-blue-500 to-purple-500";

export const SUPPORTED_CHAINS = [mainnet, polygon, optimism, arbitrum, base];
export const SUPPORTED_CHAIN_IDS = SUPPORTED_CHAINS.map(chain => chain.id);
