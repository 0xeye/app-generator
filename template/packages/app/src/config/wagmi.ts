import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { supportedChains } from "./supportedChains";
import { Config, fallback, http } from "wagmi";
import { mainnet } from "viem/chains";

const name = "ySplitter";

export const config: Config = getDefaultConfig({
  appName: name,
  projectId: import.meta.env?.VITE_WALLETCONNECT_PROJECT_ID ?? 'projectId',
  transports: {
    [mainnet.id]: fallback([
      http(`${import.meta.env.VITE_RPC_URI_FOR_1}`),
    ]),
  },
  chains: supportedChains,
  wallets: [{
    groupName: 'Popular',
    wallets: [
      injectedWallet,
      rabbyWallet,
      metaMaskWallet,
      walletConnectWallet,
      rainbowWallet,
      safeWallet
    ]
  }],
})
