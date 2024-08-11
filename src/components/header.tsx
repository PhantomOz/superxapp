"use client";
import { useNavIcon } from "@/hooks/context";
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

                <div className="bg-[#00D395] rounded-box shadow-sm">
                    <h3 className="px-4 py-2 text-xl italic rounded-box font-bold text-base-100">
                        SuperxApp
                    </h3>
                </div>

            </div>


            <div className="flex gap-3">
                <ConnectButton />
            </div>
        </nav>
    );
}
