import { http, createConfig } from 'wagmi'
import { sepolia, optimismSepolia, arbitrumSepolia, celoAlfajores, baseSepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect} from 'wagmi/connectors'

const projectId = 'e34a6845ea82b9fad965fa69ab304ec7'

export const config = createConfig({
  chains: [sepolia, optimismSepolia, arbitrumSepolia, celoAlfajores, baseSepolia],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [sepolia.id]: http(),
    [optimismSepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
    [celoAlfajores.id]: http(),
    [baseSepolia.id]: http(),
  },
})