import { useRouter } from "next/navigation";

// import { DeploymentDto } from "@/codegen/model";
// import { useConfigState } from "@/state/config";
// import { useInjectedStore } from "@/state/injected";

// import { useDeployments } from "./use-deployments";

export const useNavigate = () => {
    // const setDisplayTransactions = useConfigState.useSetDisplayTransactions();
    // const setDeployment = useInjectedStore((s) => s.setDeployment);
    const router = useRouter();
    // const deployments = useDeployments();
    // const setFast = useConfigState.useSetFast();

    return (to: "/" | "fast") => {
        // setDisplayTransactions(false);

        if (to === "/") {
            return;
        }

        if (to === "fast") {
            router.push("/fast", undefined);
            // setDeployment(null);
            // setFast(true);
        } else if (to === "/") {
            router.push("/", undefined);
            // setDeployment(null);
            // setFast(false);
        } else {
            router.push(`/${to}`, undefined);
            // setDeployment(to);
            // setFast(false);
        }
    };
};
