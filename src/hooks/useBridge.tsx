import { useEffect, useState } from "react";
import { useChainId, useWriteContract } from "wagmi";
import abi from '@/components/connection/abi.json';

export function useBridge() {
    const [contractAddress, setContractAddress] = useState<`0x${string}`>();
    const chainId = useChainId();
    const { writeContract, data, isSuccess, isPending, isError } = useWriteContract();

    useEffect(() => {
        setContractAddress(chainAddress[chainId]);
    }, [chainId]);

    function sendToken(chainSelector: number, receiver: `0x${string}`, to: `0x${string}`, token: `0x${string}`, amount: number, tokenType: number, payFeesIn: number, symbol: string, updateData: string[]) {
        writeContract({
            abi,
            address: contractAddress as `0x${string}`,
            functionName: 'transferFrom',
            args: [
                chainSelector,
                receiver,
                to,
                token,
                amount,
                tokenType,
                payFeesIn,
                symbol,
                updateData
            ],
        });
        return { data, isSuccess, isPending, isError };
    }
    return { sendToken };
}

export const toChainSelector: any = {
    11155111: [
        {
            id: "11155420",
            name: "OP Sepolia",
        },
        {
            id: "421614",
            name: "Arbitrum Sepolia"
        },
        // {
        //     id: "44787",
        //     name: "Alfajores"
        // },
        {
            id: "84532",
            name: "Base Sepolia"
        },
    ],
    11155420: [
        {
            id: "11155111",
            name: "Sepolia",
        },
        {
            id: "421614",
            name: "Arbitrum Sepolia"
        },
        {
            id: "84532",
            name: "Base Sepolia"
        },
    ],
    421614: [
        {
            id: "11155111",
            name: "Sepolia",
        },
        {
            id: "11155420",
            name: "OP Sepolia",
        },
        {
            id: "84532",
            name: "Base Sepolia"
        },
    ],
    84532: [
        {
            id: "11155111",
            name: "Sepolia",
        },
        {
            id: "11155420",
            name: "OP Sepolia",
        },
        {
            id: "421614",
            name: "Arbitrum Sepolia"
        },
    ],
    // 44787: [
    //     {
    //         id: "11155111",
    //         name: "Sepolia",
    //     }
    // ],

}

export const chainCurrency: any = {
    11155111: ['USDC', 'LINK', 'WETH', 'ETH'],
    11155420: ['USDC', 'LINK', 'WETH', 'ETH'],
    421614: ['USDC', 'LINK', 'WETH', 'ETH'],
    84532: ['USDC', 'LINK', 'WETH', 'ETH'],
    44787: ['USDC', 'LINK', 'WCELO', 'CELO'],
}

export interface ToChain {
    id: string;
    name: string;
}

export const chainAddress: any = {
    11155111: `0x0d36DD97b829069b48F97190DA264b87C3558e3b`,
    421614: `0x13CfEA2CcC182C55Ee4A7954e23f8207F093eee9`,
    84532: `0xbb3D975B2F00Be37CBCBC5917649Fe7f9E30fFA3`,
    11155420: '0x002D3C87e568C8b8387378c7ca11bB4DdDb2A554',
}

export const CCIPChainSelector: any = {
    11155111: 16015286601757825753,
    421614: 3478487238524512106,
    84532: 10344971235874465080,
    11155420: 5224473277236331295,
}

export const MultiChainTokenAddress: any = {
    11155111: {
        "DAI": {
            address: "0x6b18B2c8fE8B9031aE44FCE116bA8f6290E98146"
        },
        "USDC": { address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" },
        "LINK": { address: "0x779877A7B0D9E8603169DdbD7836e478b4624789" },
        "WETH": { address: "0x097D90c9d3E0B50Ca60e1ae45F6A81010f9FB534" },
        "ETH": { address: "0x1111111111111111111111111111111111111111" }
    },
    421614: {
        "DAI": {
            address: "0x5A67F42DCE66f311B869e737cc88297284b1123A"
        },
        "USDC": { address: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d" },
        "LINK": { address: "0xb1D4538B4571d411F07960EF2838Ce337FE1E80E" },
        "WETH": { address: "0xE591bf0A0CF924A0674d7792db046B23CEbF5f34" },
        "ETH": { address: "0x1111111111111111111111111111111111111111" }
    },
    84532: {
        "DAI": {
            address: "0x1999654469856017612c077E917476A7aa740eD6"
        },
        "USDC": { address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e" },
        "LINK": { address: "0xE4aB69C077896252FAFBD49EFD26B5D171A32410" },
        "WETH": { address: "0x4200000000000000000000000000000000000006" },
        "ETH": { address: "0x1111111111111111111111111111111111111111" }
    },
    11155420: {
        "DAI": {
            address: "0xa67972265516E4BFEA3d4f9c70749768be2d29F8"
        },
        "USDC": { address: "0x5fd84259d66Cd46123540766Be93DFE6D43130D7" },
        "LINK": { address: "0xE4aB69C077896252FAFBD49EFD26B5D171A32410" },
        "WETH": { address: "0x4200000000000000000000000000000000000006" },
        "ETH": { address: "0x1111111111111111111111111111111111111111" }
    },
}