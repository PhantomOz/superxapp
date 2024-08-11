import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import {
  sepolia,
  optimismSepolia,
  arbitrumSepolia,
  baseSepolia,
  celoAlfajores,
} from "wagmi/chains";

// Get projectId from https://cloud.walletconnect.com

export const projectId = "e4fc175deb7f071939e7c5f6f16a0829";
//  process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error("Project ID is not defined");

export const metadata = {
  name: "SuperxApp",
  description: "SuperxApp briding made easy",
  url: "https://superxapp.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [
  sepolia,
  optimismSepolia,
  arbitrumSepolia,
  baseSepolia,
  celoAlfajores,
] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
