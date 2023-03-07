import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Set up chain and provider
const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

// Set up wallet
const { connectors } = getDefaultWallets({
  appName: 'My First RainbowKit App',
  chains,
});

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
