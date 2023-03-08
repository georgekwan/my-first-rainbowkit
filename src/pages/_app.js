import '@rainbow-me/rainbowkit/styles.css';
import {
  metaMaskWallet,
  ledgerWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  trustWallet,
  imTokenWallet,
} from '@rainbow-me/rainbowkit/wallets';
import {
  getDefaultWallets,
  connectorsForWallets,
  wallet,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Set up chain and provider
const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      ledgerWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
  {
    groupName: 'Other',
    wallets: [
      trustWallet({ chains }),
      coinbaseWallet({ chains }),
      imTokenWallet({ chains }),
    ],
  },
]);

// Set up wallet
// const { connectors } = getDefaultWallets({
//   appName: 'My First RainbowKit App',
//   chains,
// });

// Create client
const wagmiClient = createClient({
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />;
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
