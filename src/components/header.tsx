"use client";
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from "@/hooks/useNavigate";
import { useNavIcon } from "@/hooks/context";
import { BadgeNew } from "../components/banner/new-badge";
import { IconSuperFastSimple } from "../components/transaction-modals/icons";
import { useConfigState } from "../state/config";
import { useAccount } from "wagmi";
import ConnectButton from "./connection/connectButton";

export function Header() {
    const deployments: any[] = [];
    const displayTransactions = useConfigState.useDisplayTransactions();

    const navIcon = useNavIcon();
    const { address } = useAccount();

    return (
        <nav className="flex flex-row justify-between items-center p-3 md:p-6 fixed top-0 left-0 w-screen z-10">
            <div className="cursor-pointer">
                {deployments.length === 1 ? (
                    <img
                        src={navIcon!}
                        width="0"
                        height="0"
                        sizes="100vw"
                        alt={deployments[0]?.name}
                        draggable={false}
                        className="inline-flex w-auto max-w-40 h-8"
                    />
                ) : (
                    <div className="bg-base-content rounded-full shadow-sm">
                        <h3 className="px-4 py-2 text-xl font-bold text-base-100">
                            super-xApp
                        </h3>
                    </div>
                )}
            </div>

            {/* <TokenBanner /> */}

            <div className="flex gap-3">
                <ConnectButton />
            </div>
        </nav>
    );
}
