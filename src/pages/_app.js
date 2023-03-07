import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

// Set up chain and provider
const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

// Set up wallet
const { connectors } = getDefaultWallets({
  appName: 'RainbowKit Demo',
  chains,
});

// Create client
const wagmiClient = createClient({
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
