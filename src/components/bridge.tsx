"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useAccount, useBalance, useChainId, useSwitchChain } from "wagmi"
import { chainCurrency, ToChain, toChainSelector } from "@/hooks/useBridge"

export function Bridge() {
  const [toAddress, setToAddress] = useState<`0x${string}` | undefined>("0x4a...f7c7");
  const { address, isConnected } = useAccount();
  const { data, isLoading, isError } = useBalance({ address: address });
  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();
  const [toChains, setToChains] = useState<ToChain[]>([]);
  const [toNetwork, setToNetwork] = useState('11155111');
  const [fromTokens, setFromTokens] = useState<string[]>([]);

  console.log(chains);

  useEffect(() => {
    setToAddress(address);
  }, [isConnected]);

  useEffect(() => {
    const chainSelector = toChainSelector[chainId];
    setToChains(chainSelector)
    setToNetwork(chainSelector[0].id);
    setFromTokens(chainCurrency[chainId]);
  }, [isConnected, chainId]);

  const handleFromNetworkChange = (e: string) => {
    switchChain({ chainId: Number(e) });
  };
  const handleToNetworkChange = (e: string) => {
    setToNetwork(e);
  };
  const handleValueChange = () => { };
  const handleAddressChange = () => { };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B1B] to-[#2B2B2B]">
      <Card className="w-full max-w-md p-4 bg-[#2B2B2B] rounded-lg border-[#FFFFFF]">
        <div className="flex justify-between items-center mb-4" />
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span>
              <Select onValueChange={handleFromNetworkChange} value={`${chainId}`}>
                <SelectTrigger className="flex items-center">
                  <EclipseIcon className="w-4 h-4 mr-2 text-[#00D395]" />
                  <SelectValue placeholder="Sepolia" />
                </SelectTrigger>
                <SelectContent>
                  {chains?.map((chain, index) => <SelectItem key={index} value={`${chain.id}`} >{chain.name}</SelectItem>)}

                </SelectContent>
              </Select>
            </span>
          </div>
          <ArrowRightIcon className="w-6 h-6 text-[#7C7C7C]" />
          <div className="flex items-center">
            <Select onValueChange={handleToNetworkChange} value={toNetwork}>
              <SelectTrigger className="flex items-center">
                <EclipseIcon className="w-4 h-4 mr-2 text-[#00D395]" />
                <SelectValue placeholder="Sepolia" />
              </SelectTrigger>
              <SelectContent>
                {toChains?.map((toChain, index) => <SelectItem key={index + 5} value={toChain?.id}>{toChain?.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4 p-4 bg-[#3B3B3B] rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-3xl text-[#FFFFFF]" contentEditable>0</span>
            <div className="flex flex-col justify-between items-center">
              <Select>
                <SelectTrigger className="flex items-center w-20">
                  <EclipseIcon className="w-4 h-4 mr-2 text-[#00D395]" />
                  <SelectValue placeholder="ETH" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">ETH</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-[#7C7C7C]">to</p>
              <Select>
                <SelectTrigger className="flex items-center w-20">
                  <EclipseIcon className="w-4 h-4 mr-2 text-[#00D395]" />
                  <SelectValue placeholder="ETH" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">ETH</SelectItem>
                  <SelectItem value="btc">BTC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="text-[#7C7C7C] flex justify-between items-center">
            <p>$0</p> {isLoading ? (
              <p>Loading balance...</p>
            ) : isError ? (
              <p>Error fetching balance</p>
            ) : (
              <p>{Number(data?.formatted).toFixed(3)} {data?.symbol} Available</p>
            )}</div>
        </div>
        <div className="mb-4 p-4 bg-[#3B3B3B] rounded-lg">
          <div className="flex justify-between items-center mb-2 w-full">
            <p className="text-[#7C7C7C]">To address</p>
            <Input
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value as `0x{string}`)}
              className="text-[#00D395] bg-transparent border-none w-fit flex-1 focus:ring-0"
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#7C7C7C]">Receive on <Badge variant={'secondary'}>Sepolia</Badge></span>
            <p>~</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#7C7C7C]">Transfer time</span>
            <span className="text-[#7C7C7C]">~3 mins</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#7C7C7C]">Network fees</span>
            <div className="text-[#7C7C7C] flex items-center gap-2">
              <span>$0.1276</span>
              <Select>
                <SelectTrigger className="flex items-center w-20">
                  <SelectValue placeholder="ETH" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">ETH</SelectItem>
                  <SelectItem value="1">LINK</SelectItem>
                </SelectContent>
              </Select></div>
          </div>
        </div>
        <button className="mb-4 p-4 bg-[#3B3B3B] rounded-lg text-center w-full">
          <span className="text-[#7C7C7C]">Enter an amount</span>
        </button>
        <div className="flex justify-between items-center">
          <Badge variant="default" className="bg-[#3B3B3B] text-[#7C7C7C]">
            Testnet
          </Badge>
          <span className="text-[#7C7C7C]">Powered by SuperxApp & Chainlink CCIP</span>
        </div>
      </Card>
    </div>
  )
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function EclipseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}
