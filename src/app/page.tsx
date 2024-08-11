"use client"
// import Header from "@/components/header";
import { useTheme } from "@/hooks/context";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '../config/config';
import { Header } from "../components/header";
import { Bridge } from "@/components/bridge";


export default function Home() {
  const { theme, toggleTheme } = useTheme();


  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <main className="relative min-h-screen">
          <Header />
          <Bridge />
        </main>
      </QueryClientProvider>
    </WagmiProvider>
  );

}
