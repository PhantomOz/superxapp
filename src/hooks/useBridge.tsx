
export function useBridge() {

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
        {
            id: "44787",
            name: "Alfajores"
        },
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
    44787: [
        {
            id: "11155111",
            name: "Sepolia",
        }
    ],

}

export const chainCurrency: any = {
    11155111: ['USDC', 'LINK', 'WETH', 'ETH'],
    11155420: ['USDC', 'LINK', 'WETH', 'ETH'],
    421614: ['USDC', 'LINK', 'WETH', 'ETH'],
    84532: ['USDC', 'LINK', 'WETH', 'ETH'],
}

export interface ToChain {
    id: string;
    name: string;
}