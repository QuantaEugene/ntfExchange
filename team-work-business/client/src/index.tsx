import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import './App.css'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import { createWeb3Modal } from "@web3modal/wagmi/react";

import {
  WagmiProvider,
  cookieStorage,
  createStorage,
  http
} from "wagmi";

import {
  Chain,
  mainnet,
  arbitrum,
  bsc,
  polygon,
  aurora,
  zora,
  base,
  celo,
  avalanche,
  ronin
} from "wagmi/chains";

import {
  injected,
  walletConnect
} from 'wagmi/connectors';

import { defaultWagmiConfig } from "@web3modal/wagmi";

const projectId = "a31577a44b26e995462542a763255e27";

const queryClient = new QueryClient();

const wagmiConfig = defaultWagmiConfig({

  projectId,
  chains: [bsc, polygon, aurora, mainnet, zora, base, celo, avalanche, ronin, arbitrum] as [Chain, ...Chain[]],
  metadata: {
    name: "test",
    description: "Test App",
    url: "http://localhost:3000",
    icons: ["http://localhost:3000/icon.png"],
  },

  enableEmail: true,
  storage: createStorage({
    storage: cookieStorage,
  }),

  connectors: [injected(), walletConnect({ projectId })],
  transports: {
    [bsc.id]: http(),
    [polygon.id]: http(),
    [aurora.id]: http(),
    [mainnet.id]: http(),
    [zora.id]: http(),
    [base.id]: http(),
    [celo.id]: http(),
    [avalanche.id]: http(),
    [ronin.id]: http(),
    [arbitrum.id]: http(),
  } as any,


} as any);

document.addEventListener("DOMContentLoaded", function () {

  createWeb3Modal({

    projectId,
    wagmiConfig,
    themeVariables: {
      '--w3m-color-mix': '#A982E9',
      '--w3m-color-mix-strength': 20,
    },

  });

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <React.StrictMode>

      <WagmiProvider config={wagmiConfig}>

        <QueryClientProvider client={queryClient}>

          <App />

        </QueryClientProvider>

      </WagmiProvider>

    </React.StrictMode>

  );

});
